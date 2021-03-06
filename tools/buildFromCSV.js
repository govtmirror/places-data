// Reads a CSV file of preset configuration data and builds a collection of preset JSON files
// This code is tightly coupled to the exact text in first line of CSV file.
// Input and output are relative to the script directory

// Dependencies:
//   npm install csv-parse
//   npm install mkdirp  # recursive mkdir that does not fail if directory exists

// Configuration variables
var csvFilename = process.argv[2] || 'original.csv';
var presetFoldername = '../data/presets/';

var csvParse = require('csv-parse');
var fs = require('fs');
var mkdirp = require('mkdirp');
var path = require('path');

var csvPath = path.join(__dirname, '..', csvFilename);
var presetPathRoot = path.join(__dirname, presetFoldername);
var makis = ['maki', 'npmap-symbol-library'];

var presetSchemaFile = require('./preset.json');
var jsonschema = require('jsonschema');

var parserOptions = {
  // see http://csv.adaltas.com/parse/ for additional parser options,
  columns: true // create objects with property names based on values in first row
};
var parser = csvParse(parserOptions, function (err, presetList) {
  if (err) {
    console.log(err);
  } else {
    presetList.filter(function (d) {
      return (d.type || d.name).length;
    }).forEach(processPreset);
  }
});

var getGeometry = function (preset) {
  return makeGeometryList(preset)[0];
};

var combineArrays = function () {
  var arrays = [];
  for (var a in arguments) {
    if (Array.isArray(arguments[a])) {
      arrays.push(arguments[a]);
    }
  }
  var newArray = [];
  arrays.forEach(function (arr) {
    arr.forEach(function (t) {
      t = typeof t === 'string' ? t.trim() : t;
      if (t && t !== '' && newArray.indexOf(t) === -1) {
        newArray.push(t);
      }
    });
  });
  return newArray;
};

var processPreset = function (preset) {
  try {
    var newPreset = {
      name: preset.type || preset.name,
      description: preset.description,
      howToMap: preset.howToMap,
      path: [preset.superclass, preset['class'], (preset.type || preset.name)].join('--').replace(/\s/g, '_'),
      fields: makeFields(preset),
      geometry: makeGeometryList(preset),
      icon: makeIcon(preset),
      maki: makeMaki(preset),
      layerIndex: parseFloat(preset.layerIndex),
      defaultOrder: isNaN(preset.defaultOrder) ? null : parseFloat(preset.defaultOrder),
      matchScore: makeMatchScore(preset),
      inCarto: !!(preset.inCarto.length > 0 && preset.inCarto.toLowerCase() !== 'no'),
      inGuide: !!(preset.inGuide.length > 0 && preset.inGuide.toLowerCase() !== 'no'),
      inEditor: !!(preset.inEditor.length > 0 && preset.inEditor.toLowerCase() !== 'no'),
      tags: preset.tags ? JSON.parse(preset.tags) : {
        'error': 'error'
      },
      terms: combineArrays(JSON.parse(preset.iDSearchTerms || []), JSON.parse(preset.altNames || []))
    };
  } catch (err) {
    console.log('Error with preset', preset.type || preset.name);
    throw err;
  }
  // remove empty properties
  Object.getOwnPropertyNames(newPreset).forEach(function (prop) {
    if (newPreset[prop] === null || newPreset[prop] === undefined || !newPreset[prop].toString || newPreset[prop].toString().length === 0) delete newPreset[prop];
  });

  // Validate the file against the schema
  var isValid = jsonschema.validate(newPreset, presetSchemaFile);

  // write new preset to file
  var presetFile = (getGeometry(preset) + '/' + preset.superclass + '/' + preset['class'] + '/' + encodeURIComponent(preset.type || preset.name).replace(/%20/g, ' ') + '.json').toLowerCase().replace(/\s/g, '_');
  var presetPath = path.join(presetPathRoot, presetFile);
  var presetDir = path.dirname(presetPath);
  var fileContent = JSON.stringify(newPreset, null, 2);
  if (!isValid.length) {
    mkdirp.sync(presetDir);
    fs.writeFile(presetPath, fileContent, function (err) {
      if (err) {
        return console.log(err);
      }
      console.log('Saved ' + presetFile);
    });
  } else {
    isValid.forEach(function (error) {
      if (error.property) {
        console.error(error.property + ' ' + error.message);
      } else {
        console.error(error);
      }
    });
    process.exit(1);
  }
/*  } catch (e) {
    console.log('Unexpected exception');
    console.log(e);
    console.log('Processing preset');
    console.log(preset);
  } */
};
var makeFields = function (preset) {
  // Only adds presets that exist
  var requestedFields = preset.JSON_Fields ? preset.JSON_Fields.slice(1, -1).replace(/"/g, '').split(',') : [];
  var fieldsPath = '../data/fields/';

  return requestedFields.filter(function (fieldName) {
    var returnValue = false;
    var stats;
    try {
      stats = fs.statSync(fieldsPath + fieldName + '.json');
      if (stats && stats.isFile()) {
        returnValue = true;
      }
    } catch (e) {
      returnValue = false;
    }
    return true; // returnValue;
  });
};
var makeGeometryList = function (preset) {
  var list = [];
  if (preset.point) list.push('point');
  if (preset.line) list.push('line');
  if (preset.polygon) list.push('area');
  if (preset.vertex) list.push('vertex');
  return list;
};
var makeIcon = function (preset) {
  if (makis.indexOf(preset.iconSource) >= 0) {
    if (preset.point || preset.vertex) return preset.makiIcon;
  }
  if (preset.line) return preset.makiIcon;
  if (preset.polygon) return preset.makiIcon;
  return null;
};
var makeMaki = function (preset) {
  if (preset.point || preset.vertex) return makis.indexOf(preset.iconSource) >= 0 ? preset.iconSource : null;
  if (preset.line) return preset.iconSource;
  if (preset.polygon) return preset.iconSource;
  return null;
};
var makeMatchScore = function (preset) {
  var matchScore;
  var hardcodedScores = {
    'area': 0.1,
    'line': 0.1,
    'embankment': 0.2,
    'address': 0.2,
    'multipolygon': 0.1,
    'point': 0.1,
    'vertex': 0.1
  };
  matchScore = hardcodedScores[(preset.type || preset.name).toLowerCase()] || 1;

  // certain tags get a better matchScore
  var specialTags = {
    'horse': 0.02,
    'bicycle': 0.01
  };

  var tags = {};
  try {
    tags = preset.tags ? JSON.parse(preset.tags) : {};
  } catch (err) {
    console.log('Error with preset tags: ', preset.tags);
    console.log('This is on preset: ', preset);
    throw err;
  }
  for (var tag in tags) {
    if (specialTags[tag]) {
      matchScore += specialTags[tag];
    }
  }
  return matchScore;
};

fs.createReadStream(csvPath).pipe(parser);
