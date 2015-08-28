iD.data.npmapPresets = {
  "presets": {
    "accessibility/wheelchair-accessible/wheelchair accessible": {
      "name": "Wheelchair Accessible",
      "fields": [
        "name",
        "nps/unitcode"
      ],
      "geometry": [
        "point"
      ],
      "icon": "wheelchair-accessible-black",
      "maki": "npmap-symbol-library",
      "matchScore": 10,
      "isDefault": false,
      "tags": {
        "wheelchair": "yes"
      },
      "terms": [
        "wheelchair accessible",
        "wheelchair",
        "accessible"
      ],
      "searchable": true
    },
    "accommodation/floating restroom/floating restroom": {
      "name": "Floating Restroom",
      "fields": [
        "name",
        "nps/unitcode",
        "operator",
        "address",
        "opening_hours",
        "toilets/disposal",
        "gender",
        "indoor",
        "fee",
        "access"
      ],
      "geometry": [
        "point"
      ],
      "icon": "restrooms-black",
      "maki": "npmap-symbol-library",
      "matchScore": 10,
      "isDefault": false,
      "tags": {
        "amenity": "toilets",
        "type": "floating"
      },
      "terms": [
        "floating restroom"
      ],
      "searchable": true
    },
    "accommodation/restroom/restroom": {
      "name": "Restroom",
      "fields": [
        "name",
        "nps/unitcode",
        "operator",
        "address",
        "opening_hours",
        "toilets/disposal",
        "gender",
        "indoor",
        "fee",
        "access"
      ],
      "geometry": [
        "point",
        "vertex"
      ],
      "icon": "restrooms-black",
      "maki": "npmap-symbol-library",
      "matchScore": 10,
      "isDefault": false,
      "tags": {
        "amenity": "toilets"
      },
      "terms": [
        "restroom",
        "toilets",
        "toilet",
        "privy",
        "head",
        "bathroom",
        "lavatory",
        "wc",
        "water closet",
        "latrine",
        "outhouse"
      ],
      "searchable": true
    },
    "barrier/fence/fence": {
      "name": "Fence",
      "fields": [
        "name",
        "nps/unitcode"
      ],
      "geometry": [
        "line"
      ],
      "matchScore": 10,
      "isDefault": false,
      "tags": {
        "barrier": "fence"
      },
      "terms": [
        "fence"
      ],
      "searchable": true
    },
    "barrier/gate/gate": {
      "name": "Gate",
      "fields": [
        "name",
        "nps/unitcode"
      ],
      "geometry": [
        "line"
      ],
      "matchScore": 10,
      "isDefault": false,
      "tags": {
        "barrier": "gate"
      },
      "terms": [
        "gate"
      ],
      "searchable": true
    },
    "building/agricultural/barn": {
      "name": "Barn",
      "fields": [
        "name",
        "nps/unitcode",
        "address",
        "levels",
        "landuse"
      ],
      "geometry": [
        "point"
      ],
      "icon": "farm",
      "maki": "maki",
      "matchScore": 70,
      "isDefault": true,
      "tags": {
        "building": "barn"
      },
      "terms": [
        "barn"
      ],
      "searchable": true
    },
    "building/agricultural/greenhouse": {
      "name": "Greenhouse",
      "fields": [
        "name",
        "nps/unitcode",
        "address",
        "levels"
      ],
      "geometry": [
        "point"
      ],
      "icon": "garden",
      "maki": "maki",
      "matchScore": 70,
      "isDefault": true,
      "tags": {
        "building": "greenhouse"
      },
      "terms": [
        "greenhouse",
        "glasshouse",
        "garden"
      ],
      "searchable": true
    },
    "building/agricultural/stable": {
      "name": "Stable",
      "fields": [
        "name",
        "nps/unitcode",
        "address",
        "levels",
        "landuse"
      ],
      "geometry": [
        "point"
      ],
      "icon": "stable-black",
      "maki": "npmap-symbol-library",
      "matchScore": 70,
      "isDefault": true,
      "tags": {
        "building": "stable"
      },
      "terms": [
        "stable"
      ],
      "searchable": true
    },
    "building/building/building": {
      "name": "Building",
      "fields": [
        "name",
        "nps/unitcode",
        "address",
        "levels"
      ],
      "geometry": [
        "point"
      ],
      "icon": "building",
      "maki": "maki",
      "matchScore": 70,
      "isDefault": true,
      "tags": {
        "building": "*"
      },
      "terms": [
        "building",
        "structure"
      ],
      "searchable": true
    },
    "building/building/building footprint": {
      "name": "Building Footprint",
      "fields": [
        "name",
        "nps/unitcode",
        "address",
        "levels"
      ],
      "geometry": [
        "area"
      ],
      "matchScore": 70,
      "isDefault": true,
      "tags": {
        "building": "*"
      },
      "terms": [
        "building",
        "structure"
      ],
      "searchable": true
    },
    "building/building/building under construction": {
      "name": "Building Under Construction",
      "fields": [
        "name",
        "nps/unitcode",
        "address",
        "levels"
      ],
      "geometry": [
        "point"
      ],
      "icon": "building",
      "maki": "maki",
      "matchScore": 70,
      "isDefault": true,
      "tags": {
        "building": "construction"
      },
      "terms": [
        "building under construction",
        "construction",
        "under construction"
      ],
      "searchable": true
    },
    "building/building/bunker": {
      "name": "Bunker",
      "fields": [
        "name",
        "nps/unitcode",
        "address",
        "levels",
        "bunker_type"
      ],
      "geometry": [
        "point"
      ],
      "icon": "building",
      "maki": "maki",
      "matchScore": 70,
      "isDefault": true,
      "tags": {
        "building": "bunker"
      },
      "terms": [
        "bunker",
        "military bunker"
      ],
      "searchable": true
    },
    "building/building/cabin": {
      "name": "Cabin",
      "fields": [
        "name",
        "nps/unitcode",
        "address",
        "levels"
      ],
      "geometry": [
        "point"
      ],
      "icon": "building",
      "maki": "maki",
      "matchScore": 70,
      "isDefault": true,
      "tags": {
        "building": "cabin"
      },
      "terms": [
        "cabin"
      ],
      "searchable": true
    },
    "building/building/public building": {
      "name": "Public Building",
      "fields": [
        "name",
        "nps/unitcode",
        "address",
        "levels",
        "smoking"
      ],
      "geometry": [
        "point"
      ],
      "icon": "building",
      "maki": "maki",
      "matchScore": 70,
      "isDefault": true,
      "tags": {
        "building": "public"
      },
      "terms": [
        "public building",
        "public",
        "civic",
        "town hall",
        "court house"
      ],
      "searchable": true
    },
    "building/cabin/cabin": {
      "name": "Cabin",
      "fields": [
        "name",
        "nps/unitcode",
        "address",
        "levels"
      ],
      "geometry": [
        "point"
      ],
      "icon": "building",
      "maki": "maki",
      "matchScore": 70,
      "tags": {
        "building": "cabin"
      },
      "terms": [
        "cabin"
      ],
      "searchable": true
    },
    "building/commercial/administrative office": {
      "name": "Administrative Office",
      "fields": [
        "name",
        "nps/unitcode",
        "operator",
        "address",
        "opening_hours"
      ],
      "geometry": [
        "point"
      ],
      "icon": "commercial",
      "maki": "maki",
      "matchScore": 70,
      "isDefault": true,
      "tags": {
        "office": "government"
      },
      "terms": [
        "administrative office",
        "admin office",
        "government",
        "civil service"
      ],
      "searchable": true
    },
    "building/commercial/commercial building": {
      "name": "Commercial Building",
      "fields": [
        "name",
        "nps/unitcode",
        "address",
        "levels",
        "smoking"
      ],
      "geometry": [
        "point"
      ],
      "icon": "commercial",
      "maki": "maki",
      "matchScore": 70,
      "isDefault": true,
      "tags": {
        "building": "commercial"
      },
      "terms": [
        "commercial building",
        "commercial"
      ],
      "searchable": true
    },
    "building/commercial/headquarters": {
      "name": "Headquarters",
      "fields": [
        "name",
        "nps/unitcode",
        "operator",
        "address",
        "opening_hours"
      ],
      "geometry": [
        "point"
      ],
      "icon": "commercial",
      "maki": "maki",
      "matchScore": 70,
      "isDefault": true,
      "tags": {
        "building": "office",
        "office": "government",
        "function": "headquarters"
      },
      "terms": [
        "headquarters",
        "office",
        "government headquarters",
        "government office",
        "office building"
      ],
      "searchable": true
    },
    "building/commercial/hospital building": {
      "name": "Hospital Building",
      "fields": [
        "name",
        "nps/unitcode",
        "operator",
        "address",
        "emergency"
      ],
      "geometry": [
        "point"
      ],
      "icon": "hospital-black",
      "maki": "npmap-symbol-library",
      "matchScore": 70,
      "isDefault": true,
      "tags": {
        "building": "hospital"
      },
      "terms": [
        "hospital building",
        "hospital",
        "ward",
        "institution",
        "infirmary",
        "clinic",
        "emergency room",
        "doctor",
        "health service",
        "sick",
        "surgery",
        "medical",
        "emergency"
      ],
      "searchable": true
    },
    "building/commercial/hotel building": {
      "name": "Hotel Building",
      "fields": [
        "name",
        "nps/unitcode",
        "address",
        "levels",
        "smoking"
      ],
      "geometry": [
        "point"
      ],
      "icon": "lodging-black",
      "maki": "npmap-symbol-library",
      "matchScore": 70,
      "isDefault": true,
      "tags": {
        "building": "hotel"
      },
      "terms": [
        "hotel"
      ],
      "searchable": true
    },
    "building/commercial/industrial building": {
      "name": "Industrial Building",
      "fields": [
        "name",
        "nps/unitcode",
        "address",
        "levels",
        "smoking"
      ],
      "geometry": [
        "point"
      ],
      "icon": "industrial",
      "maki": "maki",
      "matchScore": 70,
      "isDefault": true,
      "tags": {
        "building": "industrial"
      },
      "terms": [
        "industrial building",
        "industrial"
      ],
      "searchable": true
    },
    "building/commercial/office": {
      "name": "Office",
      "fields": [
        "name",
        "nps/unitcode",
        "address",
        "levels",
        "smoking"
      ],
      "geometry": [
        "point"
      ],
      "icon": "commercial",
      "maki": "maki",
      "matchScore": 70,
      "isDefault": true,
      "tags": {
        "building": "office"
      },
      "terms": [
        "office",
        "office building"
      ],
      "searchable": true
    },
    "building/commercial/retail building": {
      "name": "Retail Building",
      "fields": [
        "name",
        "nps/unitcode",
        "address",
        "levels",
        "smoking"
      ],
      "geometry": [
        "point"
      ],
      "icon": "commercial",
      "maki": "maki",
      "matchScore": 70,
      "isDefault": true,
      "tags": {
        "building": "retail"
      },
      "terms": [
        "retail building",
        "retail"
      ],
      "searchable": true
    },
    "building/education/education center": {
      "name": "Education Center",
      "fields": [
        "name",
        "nps/unitcode"
      ],
      "geometry": [
        "point"
      ],
      "matchScore": 70,
      "isDefault": true,
      "tags": {
        "building": "yes",
        "amenity": "education_centre"
      },
      "terms": [
        "education center"
      ],
      "searchable": true
    },
    "building/education/school building": {
      "name": "School Building",
      "fields": [
        "name",
        "nps/unitcode",
        "address",
        "levels"
      ],
      "geometry": [
        "point"
      ],
      "icon": "school",
      "maki": "maki",
      "matchScore": 70,
      "isDefault": true,
      "tags": {
        "building": "school"
      },
      "terms": [
        "school building",
        "school",
        "academy",
        "elementary school",
        "middle school",
        "high school"
      ],
      "searchable": true
    },
    "building/education/university building": {
      "name": "University Building",
      "fields": [
        "name",
        "nps/unitcode",
        "address",
        "levels"
      ],
      "geometry": [
        "point"
      ],
      "icon": "college",
      "maki": "maki",
      "matchScore": 70,
      "isDefault": true,
      "tags": {
        "building": "university"
      },
      "terms": [
        "university building",
        "university",
        "college"
      ],
      "searchable": true
    },
    "building/historic/historic building": {
      "name": "Historic Building",
      "fields": [
        "name",
        "nps/unitcode",
        "site_type"
      ],
      "geometry": [
        "point"
      ],
      "matchScore": 70,
      "isDefault": true,
      "tags": {
        "historic": "building",
        "building": "yes"
      },
      "terms": [
        "historic building"
      ],
      "searchable": true
    },
    "building/historic/historic cabin": {
      "name": "Historic Cabin",
      "fields": [
        "name",
        "nps/unitcode",
        "address",
        "levels"
      ],
      "geometry": [
        "point"
      ],
      "icon": "building",
      "maki": "maki",
      "matchScore": 70,
      "isDefault": true,
      "tags": {
        "building": "cabin",
        "historic": "yes"
      },
      "terms": [
        "historic",
        "cabin"
      ],
      "searchable": true
    },
    "building/place of worship/cathedral": {
      "name": "Cathedral",
      "fields": [
        "name",
        "nps/unitcode",
        "address",
        "levels",
        "religion"
      ],
      "geometry": [
        "point"
      ],
      "icon": "place-of-worship",
      "maki": "maki",
      "matchScore": 70,
      "isDefault": true,
      "tags": {
        "building": "cathedral"
      },
      "terms": [
        "cathedral"
      ],
      "searchable": true
    },
    "building/place of worship/chapel": {
      "name": "Chapel",
      "fields": [
        "name",
        "nps/unitcode",
        "address",
        "levels",
        "religion"
      ],
      "geometry": [
        "point"
      ],
      "icon": "place-of-worship",
      "maki": "maki",
      "matchScore": 70,
      "isDefault": true,
      "tags": {
        "building": "chapel"
      },
      "terms": [
        "chapel"
      ],
      "searchable": true
    },
    "building/place of worship/church": {
      "name": "Church",
      "fields": [
        "name",
        "nps/unitcode",
        "address",
        "levels",
        "religion"
      ],
      "geometry": [
        "point"
      ],
      "icon": "place-of-worship",
      "maki": "maki",
      "matchScore": 70,
      "isDefault": true,
      "tags": {
        "building": "church"
      },
      "terms": [
        "church"
      ],
      "searchable": true
    },
    "building/primitive/hut": {
      "name": "Hut",
      "fields": [
        "name",
        "nps/unitcode",
        "address",
        "levels"
      ],
      "geometry": [
        "point"
      ],
      "icon": "shelter-black",
      "maki": "npmap-symbol-library",
      "matchScore": 70,
      "isDefault": true,
      "tags": {
        "building": "hut"
      },
      "terms": [
        "hut"
      ],
      "searchable": true
    },
    "building/primitive/shelter": {
      "name": "Shelter",
      "fields": [
        "name",
        "nps/unitcode",
        "operator",
        "address",
        "shelter_type",
        "drinking_water"
      ],
      "geometry": [
        "point"
      ],
      "icon": "shelter-black",
      "maki": "npmap-symbol-library",
      "matchScore": 30,
      "isDefault": false,
      "tags": {
        "amenity": "shelter",
        "building": "hut"
      },
      "terms": [
        "shelter",
        "sanctuary",
        "cover",
        "hide",
        "lean-to",
        "gazebo",
        "picnic"
      ],
      "searchable": true
    },
    "building/residential/apartments": {
      "name": "Apartments",
      "fields": [
        "name",
        "nps/unitcode",
        "address",
        "levels"
      ],
      "geometry": [
        "point"
      ],
      "icon": "building",
      "maki": "maki",
      "matchScore": 70,
      "isDefault": true,
      "tags": {
        "building": "apartments"
      },
      "terms": [
        "apartments",
        "apartment",
        "apartment building"
      ],
      "searchable": true
    },
    "building/residential/detached home": {
      "name": "Detached Home",
      "fields": [
        "name",
        "nps/unitcode",
        "address",
        "levels"
      ],
      "geometry": [
        "point"
      ],
      "icon": "building",
      "maki": "maki",
      "matchScore": 70,
      "isDefault": true,
      "tags": {
        "building": "detached"
      },
      "terms": [
        "detached home",
        "detached",
        "detached building"
      ],
      "searchable": true
    },
    "building/residential/dormitory": {
      "name": "Dormitory",
      "fields": [
        "name",
        "nps/unitcode",
        "address",
        "levels"
      ],
      "geometry": [
        "point"
      ],
      "icon": "building",
      "maki": "maki",
      "matchScore": 70,
      "isDefault": true,
      "tags": {
        "building": "dormitory"
      },
      "terms": [
        "dormitory",
        "residence hall",
        "dormatorium",
        "dorm"
      ],
      "searchable": true
    },
    "building/residential/house": {
      "name": "House",
      "fields": [
        "name",
        "nps/unitcode",
        "address",
        "levels"
      ],
      "geometry": [
        "point"
      ],
      "icon": "building",
      "maki": "maki",
      "matchScore": 70,
      "isDefault": true,
      "tags": {
        "building": "house"
      },
      "terms": [
        "house"
      ],
      "searchable": true
    },
    "building/residential/lodge": {
      "name": "Lodge",
      "fields": [
        "name",
        "nps/unitcode",
        "operator",
        "address",
        "opening_hours"
      ],
      "geometry": [
        "point"
      ],
      "icon": "lodging-black",
      "maki": "npmap-symbol-library",
      "matchScore": 70,
      "isDefault": true,
      "tags": {
        "tourism": "alpine_hut"
      },
      "terms": [
        "lodge",
        "alpine hut",
        "wilderness hut",
        "hut"
      ],
      "searchable": true
    },
    "building/residential/lodging": {
      "name": "Lodging",
      "fields": [
        "name",
        "nps/unitcode",
        "address",
        "levels",
        "smoking"
      ],
      "geometry": [
        "point"
      ],
      "icon": "lodging-black",
      "maki": "npmap-symbol-library",
      "matchScore": 70,
      "isDefault": true,
      "tags": {
        "tourism": "hotel"
      },
      "terms": [
        "lodging",
        "hotel",
        "motel",
        "resort"
      ],
      "searchable": true
    },
    "building/residential/residential building": {
      "name": "Residential Building",
      "fields": [
        "name",
        "nps/unitcode",
        "address",
        "levels"
      ],
      "geometry": [
        "point"
      ],
      "icon": "building",
      "maki": "maki",
      "matchScore": 70,
      "isDefault": true,
      "tags": {
        "building": "residential"
      },
      "terms": [
        "residential building",
        "residential"
      ],
      "searchable": true
    },
    "building/residential/row house": {
      "name": "Row House",
      "fields": [
        "name",
        "nps/unitcode",
        "address",
        "levels"
      ],
      "geometry": [
        "point"
      ],
      "icon": "building",
      "maki": "maki",
      "matchScore": 70,
      "isDefault": true,
      "tags": {
        "building": "terrace"
      },
      "terms": [
        "row house",
        "terrace",
        "townhouse"
      ],
      "searchable": true
    },
    "building/residential/static mobile home": {
      "name": "Static Mobile Home",
      "fields": [
        "name",
        "nps/unitcode",
        "address",
        "levels"
      ],
      "geometry": [
        "point"
      ],
      "icon": "building",
      "maki": "maki",
      "matchScore": 70,
      "isDefault": true,
      "tags": {
        "building": "static_caravan"
      },
      "terms": [
        "static mobile home",
        "static caravan",
        "mobile home"
      ],
      "searchable": true
    },
    "building/shelter/weather shelter": {
      "name": "Weather Shelter",
      "fields": [
        "name",
        "nps/unitcode"
      ],
      "geometry": [
        "point"
      ],
      "matchScore": 70,
      "isDefault": true,
      "tags": {
        "amenity": "shelter"
      },
      "terms": [
        "tornado shelter"
      ],
      "searchable": true
    },
    "building/storage/garage": {
      "name": "Garage",
      "fields": [
        "name",
        "nps/unitcode",
        "address",
        "levels",
        "capacity"
      ],
      "geometry": [
        "point"
      ],
      "icon": "warehouse",
      "maki": "maki",
      "matchScore": 70,
      "isDefault": true,
      "tags": {
        "building": "garage"
      },
      "terms": [
        "garage"
      ],
      "searchable": true
    },
    "building/storage/shed": {
      "name": "Shed",
      "fields": [
        "name",
        "nps/unitcode",
        "address",
        "levels"
      ],
      "geometry": [
        "point"
      ],
      "icon": "building",
      "maki": "maki",
      "matchScore": 70,
      "isDefault": true,
      "tags": {
        "building": "shed"
      },
      "terms": [
        "shed"
      ],
      "searchable": true
    },
    "building/storage/warehouse": {
      "name": "Warehouse",
      "fields": [
        "name",
        "nps/unitcode",
        "address",
        "levels"
      ],
      "geometry": [
        "point"
      ],
      "icon": "warehouse",
      "maki": "maki",
      "matchScore": 70,
      "isDefault": true,
      "tags": {
        "building": "warehouse"
      },
      "terms": [
        "warehouse",
        "storage"
      ],
      "searchable": true
    },
    "land recreation/all-terrain vehicle/all-terrain vehicle trail": {
      "name": "All-terrain Vehicle Trail",
      "fields": [
        "name",
        "nps/unitcode",
        "operator",
        "tracktype",
        "surface",
        "width",
        "incline",
        "mtb/scale",
        "mtb/scale/uphill",
        "mtb/scale/imba",
        "sac_scale",
        "trail_visibility",
        "nps/trailuse",
        "nps/structure"
      ],
      "geometry": [
        "point"
      ],
      "icon": "All-terrain trail",
      "maki": "npmap-symbol-library",
      "matchScore": 30,
      "isDefault": false,
      "tags": {
        "highway": "track",
        "atv": "yes"
      },
      "terms": [
        "atv trail",
        "atv",
        "all terrain vehicle",
        "quad",
        "4wd",
        "4 wheeler",
        "four-wheeler",
        "off-road",
        "off road",
        "trail",
        "track",
        "structure"
      ],
      "searchable": true
    },
    "land recreation/all-terrain vehicle/four-wheel drive trail": {
      "name": "Four-Wheel Drive Trail",
      "fields": [
        "name",
        "nps/unitcode",
        "operator",
        "tracktype",
        "surface",
        "width",
        "incline",
        "mtb/scale",
        "mtb/scale/uphill",
        "mtb/scale/imba",
        "sac_scale",
        "trail_visibility",
        "nps/trailuse",
        "nps/structure"
      ],
      "geometry": [
        "point"
      ],
      "matchScore": 30,
      "isDefault": false,
      "tags": {
        "highway": "track",
        "4wd_only": "yes"
      },
      "terms": [
        "four-wheel drive trail",
        "atv",
        "all terrain vehicle",
        "quad",
        "4wd",
        "4 wheeler",
        "four-wheeler",
        "off-road",
        "off road",
        "trail",
        "track"
      ],
      "searchable": true
    },
    "land recreation/bicycle/bicycle trail": {
      "name": "Bicycle Trail",
      "fields": [
        "name",
        "nps/unitcode",
        "operator",
        "tracktype",
        "surface",
        "width",
        "incline",
        "mtb/scale",
        "mtb/scale/uphill",
        "mtb/scale/imba",
        "sac_scale",
        "trail_visibility",
        "nps/nonmotorizeduse",
        "nps/structure"
      ],
      "geometry": [
        "point"
      ],
      "icon": "bicycle-trail-black",
      "maki": "npmap-symbol-library",
      "matchScore": 30,
      "isDefault": false,
      "tags": {
        "highway": "path",
        "bicycle": "yes"
      },
      "terms": [
        "bicycle trail",
        "bicycle",
        "trail",
        "track"
      ],
      "searchable": true
    },
    "land recreation/bicycle/bike rack": {
      "name": "Bike Rack",
      "fields": [
        "name",
        "nps/unitcode"
      ],
      "geometry": [
        "point"
      ],
      "matchScore": 30,
      "isDefault": false,
      "tags": {
        "amenity": "bicycle_parking",
        "bicycle_parking": "rack"
      },
      "terms": [
        "bike rack"
      ],
      "searchable": true
    },
    "land recreation/camping/backcountry campsite": {
      "name": "Backcountry Campsite",
      "fields": [
        "name",
        "nps/unitcode",
        "operator",
        "address",
        "opening_hours",
        "capacity",
        "fee"
      ],
      "geometry": [
        "point"
      ],
      "icon": "campsite-black",
      "maki": "npmap-symbol-library",
      "matchScore": 60,
      "isDefault": false,
      "tags": {
        "tourism": "camp_site",
        "camp_site": "pitch",
        "backcountry": "yes"
      },
      "terms": [
        "campsite",
        "camp site",
        "backcountry",
        "primitive"
      ],
      "searchable": true
    },
    "land recreation/camping/campfire ring": {
      "name": "Campfire Ring",
      "fields": [
        "name",
        "nps/unitcode"
      ],
      "geometry": [
        "point"
      ],
      "icon": "campfire-black",
      "maki": "npmap-symbol-library",
      "matchScore": 60,
      "isDefault": false,
      "tags": {
        "leisure": "firepit"
      },
      "terms": [
        "campfire",
        "firepit",
        "fireplace",
        "fire ring",
        "campfire ring"
      ],
      "searchable": true
    },
    "land recreation/camping/campground": {
      "name": "Campground",
      "fields": [
        "name",
        "nps/unitcode",
        "operator",
        "address",
        "opening_hours",
        "capacity",
        "fee"
      ],
      "geometry": [
        "point"
      ],
      "icon": "campground-black",
      "maki": "npmap-symbol-library",
      "matchScore": 60,
      "isDefault": false,
      "tags": {
        "tourism": "camp_site"
      },
      "terms": [
        "campground"
      ],
      "searchable": true
    },
    "land recreation/camping/campsite": {
      "name": "Campsite",
      "fields": [
        "name",
        "nps/unitcode",
        "operator",
        "address",
        "opening_hours",
        "capacity",
        "fee"
      ],
      "geometry": [
        "point"
      ],
      "icon": "campsite-black",
      "maki": "npmap-symbol-library",
      "matchScore": 60,
      "isDefault": false,
      "tags": {
        "tourism": "camp_site",
        "camp_site": "pitch"
      },
      "terms": [
        "campsite",
        "camp site"
      ],
      "searchable": true
    },
    "land recreation/camping/dump station": {
      "name": "Dump Station",
      "fields": [
        "name",
        "nps/unitcode",
        "operator",
        "address"
      ],
      "geometry": [
        "point",
        "vertex"
      ],
      "icon": "sanitary-disposal-station-black",
      "maki": "npmap-symbol-library",
      "matchScore": 60,
      "isDefault": false,
      "tags": {
        "amenity": "sanitary_dump_station"
      },
      "terms": [
        "sanitary disposal station",
        "dumpstation",
        "dump station"
      ],
      "searchable": true
    },
    "land recreation/camping/rv campground": {
      "name": "RV Campground",
      "fields": [
        "name",
        "nps/unitcode",
        "operator",
        "address",
        "opening_hours",
        "capacity",
        "fee"
      ],
      "geometry": [
        "point"
      ],
      "icon": "rv-campground-black",
      "maki": "npmap-symbol-library",
      "matchScore": 60,
      "isDefault": false,
      "tags": {
        "tourism": "camp_site",
        "caravans": "yes"
      },
      "terms": [
        "rv campground",
        "campsite",
        "camp_site",
        "motorhome park"
      ],
      "searchable": true
    },
    "land recreation/climbing/canyoneering route": {
      "name": "Canyoneering Route",
      "fields": [
        "name",
        "nps/unitcode"
      ],
      "geometry": [
        "point"
      ],
      "matchScore": 50,
      "isDefault": false,
      "tags": {
        "highway": "path",
        "sport": "canyoning"
      },
      "terms": [
        "canyoneering route"
      ],
      "searchable": true
    },
    "land recreation/climbing/climbing route": {
      "name": "Climbing Route",
      "fields": [
        "name",
        "nps/unitcode"
      ],
      "geometry": [
        "point"
      ],
      "matchScore": 50,
      "isDefault": false,
      "tags": {
        "highway": "path",
        "sport": "climbing"
      },
      "terms": [
        "climbing route"
      ],
      "searchable": true
    },
    "land recreation/food/food box %2f food cache": {
      "name": "Food Box / Food Cache",
      "fields": [
        "name",
        "nps/unitcode"
      ],
      "geometry": [
        "point"
      ],
      "matchScore": 60,
      "isDefault": false,
      "tags": {
        "storage": "food"
      },
      "terms": [
        "food cache",
        "food box"
      ],
      "searchable": true
    },
    "land recreation/golf/golf course": {
      "name": "Golf Course",
      "fields": [
        "name",
        "nps/unitcode",
        "operator",
        "address",
        "opening_hours"
      ],
      "geometry": [
        "point"
      ],
      "icon": "golfing-black",
      "maki": "npmap-symbol-library",
      "matchScore": 60,
      "isDefault": false,
      "tags": {
        "leisure": "golf_course"
      },
      "terms": [
        "golf course"
      ],
      "searchable": true
    },
    "land recreation/horse/horseback riding": {
      "name": "Horseback Riding",
      "fields": [
        "name",
        "nps/unitcode",
        "operator",
        "tracktype",
        "surface",
        "width",
        "incline",
        "mtb/scale",
        "mtb/scale/uphill",
        "mtb/scale/imba",
        "sac_scale",
        "trail_visibility",
        "nps/nonmotorizeduse",
        "nps/structure"
      ],
      "geometry": [
        "point",
        "vertex"
      ],
      "icon": "horseback-riding-black",
      "maki": "npmap-symbol-library",
      "matchScore": 60,
      "isDefault": false,
      "tags": {
        "leisure": "horse_riding"
      },
      "terms": [
        "equestrian trail",
        "equestrian",
        "bridleway",
        "horse riding",
        "horse",
        "trail",
        "track",
        "horseback"
      ],
      "searchable": true
    },
    "land recreation/motorcycle/motorcycle trail": {
      "name": "Motorcycle Trail",
      "fields": [
        "name",
        "nps/unitcode",
        "operator",
        "tracktype",
        "surface",
        "width",
        "incline",
        "mtb/scale",
        "mtb/scale/uphill",
        "mtb/scale/imba",
        "sac_scale",
        "trail_visibility",
        "nps/trailuse",
        "nps/structure"
      ],
      "geometry": [
        "point"
      ],
      "icon": "motor-bike-trail-black",
      "maki": "npmap-symbol-library",
      "matchScore": 60,
      "isDefault": false,
      "tags": {
        "highway": "track",
        "motorcycle": "yes"
      },
      "terms": [
        "motorcycle trail",
        "motorcycle",
        "trail",
        "track"
      ],
      "searchable": true
    },
    "land recreation/picnic/grill": {
      "name": "Grill",
      "fields": [
        "name",
        "nps/unitcode"
      ],
      "geometry": [
        "point"
      ],
      "matchScore": 60,
      "isDefault": false,
      "tags": {
        "barbecue_grill": "yes"
      },
      "terms": [
        "grill"
      ],
      "searchable": true
    },
    "land recreation/picnic/picnic area": {
      "name": "Picnic Area",
      "fields": [
        "name",
        "nps/unitcode",
        "operator",
        "address",
        "opening_hours",
        "fee"
      ],
      "geometry": [
        "point"
      ],
      "icon": "picnic-area-black",
      "maki": "npmap-symbol-library",
      "matchScore": 60,
      "isDefault": false,
      "tags": {
        "tourism": "picnic_site"
      },
      "terms": [
        "picnic area",
        "picnic site",
        "picnic"
      ],
      "searchable": true
    },
    "land recreation/picnic/picnic table": {
      "name": "Picnic Table",
      "fields": [
        "name",
        "nps/unitcode"
      ],
      "geometry": [
        "point"
      ],
      "matchScore": 60,
      "isDefault": false,
      "tags": {
        "leisure": "picnic_table"
      },
      "terms": [
        "picnic table"
      ],
      "searchable": true
    },
    "land recreation/trail/motorized trail": {
      "name": "Motorized Trail",
      "fields": [
        "name",
        "nps/unitcode",
        "operator",
        "tracktype",
        "surface",
        "width",
        "incline",
        "mtb/scale",
        "mtb/scale/uphill",
        "mtb/scale/imba",
        "sac_scale",
        "trail_visibility",
        "nps/trailuse",
        "nps/structure"
      ],
      "geometry": [
        "point"
      ],
      "icon": "trailhead-black",
      "maki": "npmap-symbol-library",
      "matchScore": 60,
      "isDefault": true,
      "tags": {
        "highway": "track"
      },
      "terms": [
        "track",
        "trail",
        "path"
      ],
      "searchable": true
    },
    "land recreation/trail/non-motorized trail": {
      "name": "Non-Motorized Trail",
      "fields": [
        "name",
        "nps/unitcode",
        "operator",
        "tracktype",
        "surface",
        "width",
        "incline",
        "mtb/scale",
        "mtb/scale/uphill",
        "mtb/scale/imba",
        "sac_scale",
        "trail_visibility",
        "nps/nonmotorizeduse",
        "nps/structure"
      ],
      "geometry": [
        "point"
      ],
      "icon": "trailhead-black",
      "maki": "npmap-symbol-library",
      "matchScore": 60,
      "isDefault": true,
      "tags": {
        "highway": "path"
      },
      "terms": [
        "trail",
        "path",
        "track",
        "hike",
        "hiking",
        "trackway",
        "walk",
        "footpath"
      ],
      "searchable": true
    },
    "land recreation/trail/self guiding trail": {
      "name": "Self Guiding Trail",
      "fields": [
        "name",
        "nps/unitcode",
        "operator",
        "address",
        "opening_hours"
      ],
      "geometry": [
        "point"
      ],
      "icon": "self-guiding-trail-black",
      "maki": "npmap-symbol-library",
      "matchScore": 60,
      "isDefault": false,
      "tags": {
        "tourism": "information",
        "information": "guidepost"
      },
      "terms": [
        "guidepost",
        "guide post",
        "information"
      ],
      "searchable": true
    },
    "land recreation/trail/steps": {
      "name": "Steps",
      "fields": [
        "surface",
        "lit",
        "width",
        "incline_steps",
        "access"
      ],
      "geometry": [
        "point"
      ],
      "matchScore": 60,
      "isDefault": false,
      "tags": {
        "highway": "steps"
      },
      "terms": [
        "stairs",
        "staircase",
        "steps"
      ],
      "searchable": true
    },
    "land recreation/trail/trail register": {
      "name": "Trail Register",
      "fields": [
        "name",
        "nps/unitcode"
      ],
      "geometry": [
        "point",
        "vertex"
      ],
      "icon": "trailhead-black",
      "maki": "npmap-symbol-library",
      "matchScore": 60,
      "isDefault": false,
      "tags": {
        "tourism": "register"
      },
      "terms": [
        "register",
        "trail head",
        "trail",
        "track"
      ],
      "searchable": true
    },
    "land recreation/trail/trailhead": {
      "name": "Trailhead",
      "fields": [
        "name",
        "nps/unitcode",
        "operator",
        "tracktype",
        "surface",
        "width",
        "incline",
        "mtb/scale",
        "mtb/scale/uphill",
        "mtb/scale/imba",
        "sac_scale",
        "trail_visibility",
        "nps/trailuse"
      ],
      "geometry": [
        "point",
        "vertex"
      ],
      "icon": "trailhead-black",
      "maki": "npmap-symbol-library",
      "matchScore": 60,
      "isDefault": false,
      "tags": {
        "highway": "trailhead"
      },
      "terms": [
        "trailhead",
        "trail head",
        "trail",
        "track"
      ],
      "searchable": true
    },
    "locality/boundary/park": {
      "name": "Park",
      "fields": [
        "name",
        "nps/unitcode",
        "operator"
      ],
      "geometry": [
        "point"
      ],
      "icon": "park",
      "maki": "maki",
      "matchScore": 10,
      "isDefault": false,
      "tags": {
        "leisure": "park"
      },
      "terms": [
        "park",
        "green area",
        "national park",
        "state park",
        "city park",
        "recreation area",
        "woodland",
        "parkland"
      ],
      "searchable": true
    },
    "locality/region/park district": {
      "name": "Park District",
      "fields": [
        "name",
        "nps/unitcode",
        "population"
      ],
      "geometry": [
        "point"
      ],
      "icon": "marker",
      "maki": "maki",
      "matchScore": 10,
      "isDefault": false,
      "tags": {
        "place": "locality"
      },
      "terms": [
        "locale",
        "locality",
        "location",
        "place",
        "neighborhood",
        "district"
      ],
      "searchable": true
    },
    "miscellaneous/art/sculpture": {
      "name": "Sculpture",
      "fields": [
        "name",
        "nps/unitcode"
      ],
      "geometry": [
        "point"
      ],
      "matchScore": 10,
      "isDefault": false,
      "tags": {
        "tourism": "artwork",
        "artwork_type": "statue"
      },
      "terms": [
        "sculpture"
      ],
      "searchable": true
    },
    "miscellaneous/battlefield/battlefield": {
      "name": "Battlefield",
      "fields": [
        "name",
        "nps/unitcode"
      ],
      "geometry": [
        "point"
      ],
      "matchScore": 10,
      "isDefault": false,
      "tags": {
        "historic": "battlefield"
      },
      "terms": [
        "battlefield"
      ],
      "searchable": true
    },
    "miscellaneous/bench/bench": {
      "name": "Bench",
      "fields": [
        "name",
        "nps/unitcode",
        "operator",
        "backrest",
        "direction",
        "seats",
        "material"
      ],
      "geometry": [
        "point"
      ],
      "matchScore": 10,
      "isDefault": false,
      "tags": {
        "amenity": "bench"
      },
      "terms": [
        "bench",
        "seat"
      ],
      "searchable": true
    },
    "miscellaneous/canal/canal": {
      "name": "Canal",
      "fields": [
        "name",
        "nps/unitcode"
      ],
      "geometry": [
        "point"
      ],
      "icon": "water",
      "maki": "maki",
      "matchScore": 10,
      "isDefault": false,
      "tags": {
        "waterway": "canal"
      },
      "terms": [
        "canal",
        "ditch",
        "lateal"
      ],
      "searchable": true
    },
    "miscellaneous/cannon/cannon": {
      "name": "Cannon",
      "fields": [
        "name",
        "nps/unitcode"
      ],
      "geometry": [
        "point"
      ],
      "matchScore": 10,
      "isDefault": false,
      "tags": {
        "historic": "cannon"
      },
      "terms": [
        "cannon"
      ],
      "searchable": true
    },
    "miscellaneous/cemetery/cemetery": {
      "name": "Cemetery",
      "fields": [
        "name",
        "nps/unitcode"
      ],
      "geometry": [
        "point"
      ],
      "icon": "cemetary",
      "maki": "maki",
      "matchScore": 10,
      "isDefault": false,
      "tags": {
        "landuse": "cemetery"
      },
      "terms": [
        "cemetery",
        "graveyard"
      ],
      "searchable": true
    },
    "miscellaneous/cemetery/grave": {
      "name": "Grave",
      "fields": [
        "memo",
        "nps/unitcoderial",
        "subject/name",
        "subject/species",
        "subject/birth",
        "subject/death",
        "religion"
      ],
      "geometry": [
        "point"
      ],
      "icon": "cemetery",
      "maki": "maki",
      "matchScore": 10,
      "isDefault": false,
      "tags": {
        "cemetery": "grave"
      },
      "terms": [
        "grave",
        "tomb"
      ],
      "searchable": true
    },
    "miscellaneous/dam/dam": {
      "name": "Dam",
      "fields": [
        "name",
        "nps/unitcode"
      ],
      "geometry": [
        "point"
      ],
      "icon": "dam",
      "maki": "maki",
      "matchScore": 10,
      "isDefault": false,
      "tags": {
        "waterway": "dam"
      },
      "terms": [
        "dam",
        "breakwater",
        "dike",
        "jetty"
      ],
      "searchable": true
    },
    "miscellaneous/entrance/entrance%2fexit": {
      "name": "Entrance/Exit",
      "fields": [
        "name",
        "nps/unitcode"
      ],
      "geometry": [
        "vertex"
      ],
      "maki": "maki",
      "matchScore": 10,
      "isDefault": false,
      "tags": {
        "building": "entrance"
      },
      "terms": [
        "entrance"
      ],
      "searchable": true
    },
    "miscellaneous/fence/fence": {
      "name": "Fence",
      "fields": [
        "name",
        "nps/unitcode"
      ],
      "geometry": [
        "point",
        "vertex"
      ],
      "matchScore": 10,
      "isDefault": false,
      "tags": {
        "barrier": "fence"
      },
      "terms": [
        "gate"
      ],
      "searchable": true
    },
    "miscellaneous/flagpole/flag pole": {
      "name": "Flag Pole",
      "fields": [
        "name",
        "nps/unitcode"
      ],
      "geometry": [
        "point"
      ],
      "matchScore": 10,
      "isDefault": false,
      "tags": {
        "man_made": "flagpole"
      },
      "terms": [
        "flagpole"
      ],
      "searchable": true
    },
    "miscellaneous/fort/fortification": {
      "name": "Fortification",
      "fields": [
        "name",
        "nps/unitcode",
        "site_type"
      ],
      "geometry": [
        "point"
      ],
      "matchScore": 10,
      "isDefault": false,
      "tags": {
        "historic": "archaeological_site",
        "site_type": "fortification"
      },
      "terms": [
        "fortification",
        "fort",
        "earthworks",
        "hill fort",
        "trench"
      ],
      "searchable": true
    },
    "miscellaneous/garden/garden": {
      "name": "Garden",
      "fields": [
        "name",
        "nps/unitcode"
      ],
      "geometry": [
        "point"
      ],
      "matchScore": 10,
      "isDefault": false,
      "tags": {
        "leisure": "garden"
      },
      "terms": [
        "garden"
      ],
      "searchable": true
    },
    "miscellaneous/gate/gate": {
      "name": "Gate",
      "fields": [
        "name",
        "nps/unitcode"
      ],
      "geometry": [
        "point",
        "vertex"
      ],
      "matchScore": 10,
      "isDefault": false,
      "tags": {
        "barrier": "gate"
      },
      "terms": [
        "gate"
      ],
      "searchable": true
    },
    "miscellaneous/levee/dyke (levee)": {
      "name": "Dyke (Levee)",
      "fields": [
        "name",
        "nps/unitcode",
        "operator"
      ],
      "geometry": [
        "point"
      ],
      "matchScore": 10,
      "isDefault": false,
      "tags": {
        "man_made": "dyke"
      },
      "terms": [
        "dyke",
        "levee"
      ],
      "searchable": true
    },
    "miscellaneous/lock/lock": {
      "name": "Lock",
      "fields": [
        "name",
        "nps/unitcode"
      ],
      "geometry": [
        "point"
      ],
      "matchScore": 10,
      "isDefault": false,
      "tags": {
        "lock": "yes"
      },
      "terms": [
        "lock"
      ],
      "searchable": true
    },
    "miscellaneous/manmade/tower": {
      "name": "Tower",
      "fields": [
        "name",
        "nps/unitcode",
        "operator",
        "tower/type"
      ],
      "geometry": [
        "point"
      ],
      "matchScore": 10,
      "isDefault": false,
      "tags": {
        "man_made": "tower"
      },
      "terms": [
        "tower",
        "castle",
        "overlook"
      ],
      "searchable": true
    },
    "miscellaneous/military area/military area": {
      "name": "Military Area",
      "fields": [
        "name",
        "nps/unitcode"
      ],
      "geometry": [
        "point"
      ],
      "matchScore": 10,
      "isDefault": false,
      "tags": {
        "landuse": "military"
      },
      "terms": [
        "military area"
      ],
      "searchable": true
    },
    "miscellaneous/mine/historic mine": {
      "name": "Historic Mine",
      "fields": [
        "name",
        "nps/unitcode",
        "description",
        "mineral"
      ],
      "geometry": [
        "point"
      ],
      "matchScore": 10,
      "isDefault": false,
      "tags": {
        "historic": "mine"
      },
      "terms": [
        "historic mine"
      ],
      "searchable": true
    },
    "miscellaneous/mine/quarry (mine)": {
      "name": "Quarry (Mine)",
      "fields": [
        "name",
        "nps/unitcode",
        "operator",
        "resource"
      ],
      "geometry": [
        "point"
      ],
      "matchScore": 10,
      "isDefault": false,
      "tags": {
        "landuse": "quarry"
      },
      "terms": [
        "quarry",
        "mine"
      ],
      "searchable": true
    },
    "miscellaneous/mine/shaft (mine)": {
      "name": "Shaft (Mine)",
      "fields": [
        "name",
        "nps/unitcode",
        "operator",
        "resource"
      ],
      "geometry": [
        "point"
      ],
      "matchScore": 10,
      "isDefault": false,
      "tags": {
        "man_made": "mineshaft"
      },
      "terms": [
        "shaft",
        "mine",
        "mineshaft",
        "adit"
      ],
      "searchable": true
    },
    "miscellaneous/monument/monument": {
      "name": "Monument",
      "fields": [
        "name",
        "nps/unitcode"
      ],
      "geometry": [
        "point"
      ],
      "icon": "monument",
      "maki": "maki",
      "matchScore": 10,
      "isDefault": false,
      "tags": {
        "historic": "monument"
      },
      "terms": [
        "monument",
        "historic monument"
      ],
      "searchable": true
    },
    "miscellaneous/museum/museum": {
      "name": "Museum",
      "fields": [
        "name",
        "nps/unitcode"
      ],
      "geometry": [
        "point"
      ],
      "matchScore": 10,
      "isDefault": false,
      "tags": {
        "tourism": "museum"
      },
      "terms": [
        "museum"
      ],
      "searchable": true
    },
    "miscellaneous/oil well/oilfield": {
      "name": "Oilfield",
      "fields": [
        "name",
        "nps/unitcode",
        "operator",
        "resource"
      ],
      "geometry": [
        "point"
      ],
      "icon": "oil-well",
      "maki": "maki",
      "matchScore": 10,
      "isDefault": false,
      "tags": {
        "man_made": "oilfield"
      },
      "terms": [
        "oilfield"
      ],
      "searchable": true
    },
    "miscellaneous/point of interest/point of interest": {
      "name": "Point of Interest",
      "fields": [
        "name",
        "nps/unitcode",
        "operator",
        "address",
        "opening_hours"
      ],
      "geometry": [
        "point",
        "vertex"
      ],
      "matchScore": 10,
      "isDefault": false,
      "tags": {
        "tourism": "yes"
      },
      "terms": [
        "point of interest",
        "poi"
      ],
      "searchable": true
    },
    "miscellaneous/reserve/reserve": {
      "name": "Reserve",
      "fields": [
        "name",
        "nps/unitcode",
        "operator"
      ],
      "geometry": [
        "point"
      ],
      "icon": "park",
      "maki": "maki",
      "matchScore": 10,
      "isDefault": false,
      "tags": {
        "leisure": "nature_reserve"
      },
      "terms": [
        "reserve",
        "nature reserve",
        "wildlife reserve",
        "wildlife",
        "protected area",
        "protected"
      ],
      "searchable": true
    },
    "miscellaneous/reservoir/reservoir": {
      "name": "Reservoir",
      "fields": [
        "name",
        "nps/unitcode"
      ],
      "geometry": [
        "point"
      ],
      "icon": "water",
      "maki": "maki",
      "matchScore": 10,
      "isDefault": false,
      "tags": {
        "natural": "water",
        "water": "reservoir",
        "landuse": "reservoir"
      },
      "terms": [
        "reservoir",
        "lake",
        "tank"
      ],
      "searchable": true
    },
    "miscellaneous/ruin/historic ruins": {
      "name": "Historic Ruins",
      "fields": [
        "name",
        "nps/unitcode"
      ],
      "geometry": [
        "point"
      ],
      "matchScore": 10,
      "isDefault": false,
      "tags": {
        "historic": "ruins"
      },
      "terms": [
        "historic ruins",
        "ruins"
      ],
      "searchable": true
    },
    "miscellaneous/ship/historic ship": {
      "name": "Historic Ship",
      "fields": [
        "name",
        "nps/unitcode"
      ],
      "geometry": [
        "point"
      ],
      "matchScore": 10,
      "isDefault": false,
      "tags": {
        "historic": "ship"
      },
      "terms": [
        "ship",
        "historic"
      ],
      "searchable": true
    },
    "miscellaneous/site/historic site": {
      "name": "Historic Site",
      "fields": [
        "name",
        "nps/unitcode",
        "site_type"
      ],
      "geometry": [
        "point"
      ],
      "matchScore": 10,
      "isDefault": false,
      "tags": {
        "historic": "*"
      },
      "terms": [
        "historic site",
        "historic",
        "site"
      ],
      "searchable": true
    },
    "miscellaneous/view/viewpoint": {
      "name": "Viewpoint",
      "fields": [
        "name",
        "nps/unitcode",
        "operator",
        "address",
        "opening_hours"
      ],
      "geometry": [
        "point"
      ],
      "matchScore": 10,
      "isDefault": false,
      "tags": {
        "tourism": "viewpoint"
      },
      "terms": [
        "viewpoint",
        "scenic viewpoint",
        "scenic",
        "scenery"
      ],
      "searchable": true
    },
    "miscellaneous/wreck/wreck": {
      "name": "Wreck",
      "fields": [
        "name",
        "nps/unitcode"
      ],
      "geometry": [
        "point"
      ],
      "matchScore": 10,
      "isDefault": false,
      "tags": {
        "historic": "wreck"
      },
      "terms": [
        "wreck",
        "shipwreck"
      ],
      "searchable": true
    },
    "natural feature/arch/arch": {
      "name": "Arch",
      "fields": [
        "name",
        "nps/unitcode"
      ],
      "geometry": [
        "point"
      ],
      "matchScore": 10,
      "isDefault": false,
      "tags": {
        "natural": "arch"
      },
      "terms": [
        "arch",
        "bridge",
        "natural bridge",
        "sea arch"
      ],
      "searchable": true
    },
    "natural feature/arroyo/arroyo": {
      "name": "Arroyo",
      "fields": [
        "name",
        "nps/unitcode"
      ],
      "geometry": [
        "point"
      ],
      "icon": "water",
      "maki": "maki",
      "matchScore": 10,
      "isDefault": false,
      "tags": {
        "waterway": "drain",
        "intermittent": "yes"
      },
      "terms": [
        "arroyo",
        "coulee",
        "draw",
        "gully",
        "wash"
      ],
      "searchable": true
    },
    "natural feature/basin/basin": {
      "name": "Basin",
      "fields": [
        "name",
        "nps/unitcode"
      ],
      "geometry": [
        "point"
      ],
      "matchScore": 10,
      "isDefault": false,
      "tags": {
        "landuse": "basin"
      },
      "terms": [
        "basin"
      ],
      "searchable": true
    },
    "natural feature/bay/bay": {
      "name": "Bay",
      "fields": [
        "name",
        "nps/unitcode"
      ],
      "geometry": [
        "point"
      ],
      "matchScore": 10,
      "isDefault": false,
      "tags": {
        "natural": "bay"
      },
      "terms": [
        "bay",
        "arm",
        "bight",
        "cove",
        "estuary",
        "gulf",
        "inlet",
        "sound"
      ],
      "searchable": true
    },
    "natural feature/beach/beach": {
      "name": "Beach",
      "fields": [
        "name",
        "nps/unitcode",
        "surface"
      ],
      "geometry": [
        "point"
      ],
      "matchScore": 10,
      "isDefault": false,
      "tags": {
        "natural": "beach"
      },
      "terms": [
        "beach",
        "coast",
        "shore",
        "strand"
      ],
      "searchable": true
    },
    "natural feature/cape/cape": {
      "name": "Cape",
      "fields": [
        "name",
        "nps/unitcode"
      ],
      "geometry": [
        "point"
      ],
      "matchScore": 10,
      "isDefault": false,
      "tags": {
        "natural": "cape"
      },
      "terms": [
        "cape",
        "lea",
        "neck",
        "peninsula",
        "point"
      ],
      "searchable": true
    },
    "natural feature/cave/cave entrance": {
      "name": "Cave Entrance",
      "fields": [
        "name",
        "nps/unitcode"
      ],
      "geometry": [
        "point"
      ],
      "matchScore": 10,
      "isDefault": false,
      "tags": {
        "natural": "cave_entrance"
      },
      "terms": [
        "cave",
        "cavern",
        "grotto"
      ],
      "searchable": true
    },
    "natural feature/cliff/cliff": {
      "name": "Cliff",
      "fields": [
        "name",
        "nps/unitcode",
        "height"
      ],
      "geometry": [
        "point"
      ],
      "matchScore": 10,
      "isDefault": false,
      "tags": {
        "natural": "cliff"
      },
      "terms": [
        "cliff",
        "bluff",
        "crag",
        "head",
        "headland",
        "nose",
        "palisades",
        "precipice",
        "promontory",
        "rim",
        "rimrock"
      ],
      "searchable": true
    },
    "natural feature/dune/dune": {
      "name": "Dune",
      "fields": [
        "name",
        "nps/unitcode"
      ],
      "geometry": [
        "point"
      ],
      "matchScore": 10,
      "isDefault": false,
      "tags": {
        "natural": "dune"
      },
      "terms": [
        "dune",
        "sand dune"
      ],
      "searchable": true
    },
    "natural feature/forest/forest": {
      "name": "Forest",
      "fields": [
        "name",
        "nps/unitcode",
        "leaf_type",
        "leaf_cycle",
        "crop"
      ],
      "geometry": [
        "point"
      ],
      "icon": "park",
      "maki": "maki",
      "matchScore": 10,
      "isDefault": false,
      "tags": {
        "landuse": "forest"
      },
      "terms": [
        "forest",
        "wood",
        "park",
        "jungle"
      ],
      "searchable": true
    },
    "natural feature/forest/woods": {
      "name": "Woods",
      "fields": [
        "name",
        "nps/unitcode",
        "leaf_type",
        "leaf_cycle",
        "crop"
      ],
      "geometry": [
        "point"
      ],
      "icon": "park2",
      "maki": "maki",
      "matchScore": 10,
      "isDefault": false,
      "tags": {
        "natural": "wood"
      },
      "terms": [
        "wood",
        "forest",
        "park",
        "jungle"
      ],
      "searchable": true
    },
    "natural feature/geyser/geyser": {
      "name": "Geyser",
      "fields": [
        "name",
        "nps/unitcode"
      ],
      "geometry": [
        "point"
      ],
      "matchScore": 10,
      "isDefault": false,
      "tags": {
        "natural": "geyser"
      },
      "terms": [
        "geyser",
        "gusher",
        "spout",
        "hot spring",
        "thermal spring"
      ],
      "searchable": true
    },
    "natural feature/glacier/glacier": {
      "name": "Glacier",
      "fields": [
        "name",
        "nps/unitcode",
        "surface",
        "direction"
      ],
      "geometry": [
        "point"
      ],
      "matchScore": 10,
      "isDefault": false,
      "tags": {
        "natural": "glacier"
      },
      "terms": [
        "glacier",
        "icefield",
        "ice patch",
        "snow patch"
      ],
      "searchable": true
    },
    "natural feature/grassland/grassland (plain)": {
      "name": "Grassland (Plain)",
      "fields": [
        "name",
        "nps/unitcode"
      ],
      "geometry": [
        "point"
      ],
      "matchScore": 10,
      "isDefault": false,
      "tags": {
        "natural": "grassland"
      },
      "terms": [
        "grassland",
        "plain",
        "highland",
        "kula",
        "upland"
      ],
      "searchable": true
    },
    "natural feature/harbor/harbor": {
      "name": "Harbor",
      "fields": [
        "name",
        "nps/unitcode",
        "operator",
        "address"
      ],
      "geometry": [
        "point"
      ],
      "icon": "harbor",
      "maki": "maki",
      "matchScore": 10,
      "isDefault": false,
      "tags": {
        "harbour": "*"
      },
      "terms": [
        "harbour",
        "harbor",
        "marina"
      ],
      "searchable": true
    },
    "natural feature/island/island": {
      "name": "Island",
      "fields": [
        "name",
        "nps/unitcode"
      ],
      "geometry": [
        "point"
      ],
      "matchScore": 10,
      "isDefault": false,
      "tags": {
        "place": "island"
      },
      "terms": [
        "island",
        "archipelago",
        "atoll",
        "cay",
        "hammock",
        "hummock",
        "isla",
        "isle",
        "islet",
        "key",
        "moku",
        "rock"
      ],
      "searchable": true
    },
    "natural feature/isthmus/isthmus": {
      "name": "Isthmus",
      "fields": [
        "name",
        "nps/unitcode"
      ],
      "geometry": [
        "point"
      ],
      "matchScore": 10,
      "isDefault": false,
      "tags": {
        "natural": "isthmus"
      },
      "terms": [
        "isthmus"
      ],
      "searchable": true
    },
    "natural feature/lake/lake": {
      "name": "Lake",
      "fields": [
        "name",
        "nps/unitcode"
      ],
      "geometry": [
        "point"
      ],
      "icon": "water",
      "maki": "maki",
      "matchScore": 10,
      "isDefault": false,
      "tags": {
        "natural": "water",
        "water": "lake"
      },
      "terms": [
        "lake",
        "backwater",
        "lac",
        "lagoon",
        "laguna",
        "pond",
        "pool",
        "resaca",
        "waterhole",
        "lakelet",
        "loch",
        "mere"
      ],
      "searchable": true
    },
    "natural feature/lava/lava": {
      "name": "Lava",
      "fields": [
        "name",
        "nps/unitcode"
      ],
      "geometry": [
        "point"
      ],
      "matchScore": 10,
      "isDefault": false,
      "tags": {
        "natural": "lava"
      },
      "terms": [
        "lava",
        "kepula",
        "lava flow"
      ],
      "searchable": true
    },
    "natural feature/pass/mountain pass (saddle %2f gap)": {
      "name": "Mountain Pass (Saddle / Gap)",
      "fields": [
        "name",
        "nps/unitcode",
        "ele",
        "direction"
      ],
      "geometry": [
        "point"
      ],
      "matchScore": 10,
      "isDefault": false,
      "tags": {
        "natural": "saddle"
      },
      "terms": [
        "saddle",
        "gap",
        "col",
        "notch",
        "pass",
        "water gap",
        "wind gap"
      ],
      "searchable": true
    },
    "natural feature/peak/peak": {
      "name": "Peak",
      "fields": [
        "name",
        "nps/unitcode",
        "ele"
      ],
      "geometry": [
        "point"
      ],
      "icon": "triangle",
      "maki": "maki",
      "matchScore": 10,
      "isDefault": false,
      "tags": {
        "natural": "peak"
      },
      "terms": [
        "peak",
        "summit",
        "ahu",
        "berg",
        "bald",
        "butte",
        "cerro",
        "colina",
        "cone",
        "cumbre",
        "dome",
        "head",
        "hill",
        "horn",
        "knob",
        "knoll",
        "mauna",
        "mesa",
        "mesita",
        "mound",
        "mount",
        "mountain",
        "puu",
        "rock",
        "sugarload",
        "table",
        "acme",
        "aiguille",
        "alp",
        "climax",
        "crest",
        "crown",
        "pinnacle",
        "tip",
        "top"
      ],
      "searchable": true
    },
    "natural feature/plateau/plateau": {
      "name": "Plateau",
      "fields": [
        "name",
        "nps/unitcode"
      ],
      "geometry": [
        "point"
      ],
      "matchScore": 10,
      "isDefault": false,
      "tags": {
        "natural": "landform",
        "landform": "plateau"
      },
      "terms": [
        "plateau"
      ],
      "searchable": true
    },
    "natural feature/prairie/prairie": {
      "name": "Prairie",
      "fields": [
        "name",
        "nps/unitcode"
      ],
      "geometry": [
        "point"
      ],
      "matchScore": 10,
      "isDefault": false,
      "tags": {
        "natural": "grassland",
        "grassland": "prarie"
      },
      "terms": [
        "prarie",
        "grassland"
      ],
      "searchable": true
    },
    "natural feature/rapids/rapids": {
      "name": "Rapids",
      "fields": [
        "name",
        "nps/unitcode",
        "whitewater",
        "width",
        "rapid_grade"
      ],
      "geometry": [
        "point",
        "vertex"
      ],
      "icon": "water",
      "maki": "maki",
      "matchScore": 10,
      "isDefault": false,
      "tags": {
        "waterway": "rapids"
      },
      "terms": [
        "rapids",
        "riffle",
        "ripple"
      ],
      "searchable": true
    },
    "natural feature/reef (bar)/reef (bar)": {
      "name": "Reef (Bar)",
      "fields": [
        "name",
        "nps/unitcode"
      ],
      "geometry": [
        "point"
      ],
      "matchScore": 10,
      "isDefault": false,
      "tags": {
        "natural": "reef"
      },
      "terms": [
        "reef",
        "bar",
        "ledge",
        "sandbar",
        "shoal",
        "spit"
      ],
      "searchable": true
    },
    "natural feature/ridge/ridge": {
      "name": "Ridge",
      "fields": [
        "name",
        "nps/unitcode"
      ],
      "geometry": [
        "point"
      ],
      "matchScore": 10,
      "isDefault": false,
      "tags": {
        "natural": "ridge"
      },
      "terms": [
        "ridge",
        "crest",
        "cuesta",
        "escarpment",
        "hogback",
        "lae",
        "rim",
        "spur"
      ],
      "searchable": true
    },
    "natural feature/sea/sea": {
      "name": "Sea",
      "fields": [
        "name",
        "nps/unitcode"
      ],
      "geometry": [
        "point"
      ],
      "icon": "water",
      "maki": "maki",
      "matchScore": 10,
      "isDefault": false,
      "tags": {
        "place": "sea"
      },
      "terms": [
        "sea",
        "gulf",
        "ocean"
      ],
      "searchable": true
    },
    "natural feature/shoal/shoal (bar)": {
      "name": "Shoal (Bar)",
      "fields": [
        "name",
        "nps/unitcode",
        "tidal"
      ],
      "geometry": [
        "point"
      ],
      "matchScore": 10,
      "isDefault": false,
      "tags": {
        "natural": "shoal"
      },
      "terms": [
        "shoal",
        "bar",
        "ledge",
        "reef",
        "sandbar",
        "spit"
      ],
      "searchable": true
    },
    "natural feature/spring/spring": {
      "name": "Spring",
      "fields": [
        "name",
        "nps/unitcode",
        "drinking_water"
      ],
      "geometry": [
        "point"
      ],
      "matchScore": 10,
      "isDefault": false,
      "tags": {
        "natural": "spring"
      },
      "terms": [
        "spring",
        "seep"
      ],
      "searchable": true
    },
    "natural feature/strait/strait (channel)": {
      "name": "Strait (Channel)",
      "fields": [
        "name",
        "nps/unitcode"
      ],
      "geometry": [
        "point"
      ],
      "matchScore": 10,
      "isDefault": false,
      "tags": {
        "natural": "strait"
      },
      "terms": [
        "strait",
        "channel",
        "passage",
        "reach",
        "thoroughfare",
        "throughfare"
      ],
      "searchable": true
    },
    "natural feature/stream/stream": {
      "name": "Stream",
      "fields": [
        "name",
        "nps/unitcode"
      ],
      "geometry": [
        "point"
      ],
      "icon": "water",
      "maki": "maki",
      "matchScore": 10,
      "isDefault": false,
      "tags": {
        "waterway": "stream"
      },
      "terms": [
        "beck",
        "branch",
        "brook",
        "burn",
        "course",
        "creek",
        "current",
        "drift",
        "flood",
        "flow",
        "freshet",
        "race",
        "rill",
        "rindle",
        "rivulet",
        "run",
        "runnel",
        "rush",
        "spate",
        "spritz",
        "surge",
        "tide",
        "torrent",
        "tributary",
        "watercourse"
      ],
      "searchable": true
    },
    "natural feature/swamp/swamp": {
      "name": "Swamp",
      "fields": [
        "name",
        "nps/unitcode"
      ],
      "geometry": [
        "point"
      ],
      "icon": "water",
      "maki": "maki",
      "matchScore": 10,
      "isDefault": false,
      "tags": {
        "natural": "wetland",
        "wetland": "swamp"
      },
      "terms": [
        "swamp",
        "wetland",
        "bog",
        "cienega",
        "marais",
        "marsh",
        "pocosin"
      ],
      "searchable": true
    },
    "natural feature/tree/tree": {
      "name": "Tree",
      "fields": [
        "name",
        "nps/unitcode"
      ],
      "geometry": [
        "point"
      ],
      "matchScore": 10,
      "isDefault": false,
      "tags": {
        "natural": "tree"
      },
      "terms": [
        "tree"
      ],
      "searchable": true
    },
    "natural feature/valley/valley": {
      "name": "Valley",
      "fields": [
        "name",
        "nps/unitcode"
      ],
      "geometry": [
        "point"
      ],
      "matchScore": 10,
      "isDefault": false,
      "tags": {
        "natural": "valley"
      },
      "terms": [
        "valley",
        "barranca",
        "canyon",
        "chasm",
        "cove",
        "draw",
        "glen",
        "gorge",
        "gulch",
        "gulf",
        "hollow",
        "ravine"
      ],
      "searchable": true
    },
    "natural feature/volcano/volcano (crater)": {
      "name": "Volcano (Crater)",
      "fields": [
        "name",
        "nps/unitcode",
        "status",
        "ele",
        "type"
      ],
      "geometry": [
        "point"
      ],
      "icon": "triangle",
      "maki": "maki",
      "matchScore": 10,
      "isDefault": false,
      "tags": {
        "natural": "volcano"
      },
      "terms": [
        "volcano",
        "crater",
        "caldera"
      ],
      "searchable": true
    },
    "natural feature/waterfall/waterfall": {
      "name": "Waterfall",
      "fields": [
        "name",
        "nps/unitcode"
      ],
      "geometry": [
        "line"
      ],
      "icon": "water",
      "maki": "maki",
      "matchScore": 15,
      "isDefault": false,
      "tags": {
        "waterway": "waterfall"
      },
      "terms": [
        "waterfall",
        "falls",
        "cascade",
        "cataract"
      ],
      "searchable": true
    },
    "natural feature/wetland/wetland": {
      "name": "Wetland",
      "fields": [
        "name",
        "nps/unitcode"
      ],
      "geometry": [
        "point"
      ],
      "icon": "wetland",
      "maki": "maki",
      "matchScore": 10,
      "isDefault": false,
      "tags": {
        "natural": "wetland"
      },
      "terms": [
        "wetland"
      ],
      "searchable": true
    },
    "parking/parking/parking lot": {
      "name": "Parking Lot",
      "fields": [
        "name",
        "nps/unitcode",
        "operator",
        "address",
        "capacity",
        "maxstay",
        "fee",
        "nps/trailuse"
      ],
      "geometry": [
        "area"
      ],
      "matchScore": 10,
      "isDefault": true,
      "tags": {
        "amenity": "parking"
      },
      "terms": [
        "parking",
        "car parking",
        "vehicle parking",
        "parking lot",
        "car park"
      ],
      "searchable": true
    },
    "road/four wheel drive/four wheel drive road": {
      "name": "Four Wheel Drive Road",
      "fields": [
        "name",
        "nps/unitcode",
        "operator",
        "surface",
        "width",
        "maxspeed",
        "oneway",
        "lanes",
        "nps/trailuse",
        "nps/structure"
      ],
      "geometry": [
        "line"
      ],
      "icon": "four-wheel-drive-road-black",
      "maki": "npmap-symbol-library",
      "matchScore": 15,
      "isDefault": false,
      "tags": {
        "highway": "road",
        "4wd_only": "yes"
      },
      "terms": [
        "four-wheel drive road",
        "4wd",
        "4 wheeler",
        "4-wheeler",
        "four wheeler",
        "four-wheeler"
      ],
      "searchable": true
    },
    "road/highway/highway": {
      "name": "Highway",
      "fields": [
        "name",
        "nps/unitcode"
      ],
      "geometry": [
        "line"
      ],
      "icon": "highway-motorway",
      "maki": "maki",
      "matchScore": 94,
      "isDefault": true,
      "tags": {
        "highway": "motorway"
      },
      "terms": [
        "highway"
      ],
      "searchable": true
    },
    "road/highway/highway link": {
      "name": "Highway Link",
      "fields": [
        "name",
        "nps/unitcode"
      ],
      "geometry": [
        "line"
      ],
      "icon": "highway-motorway-link",
      "maki": "maki",
      "matchScore": 94,
      "isDefault": true,
      "tags": {
        "highway": "motorway_link"
      },
      "terms": [
        "highway"
      ],
      "searchable": true
    },
    "road/minor/minor road": {
      "name": "Minor Road",
      "fields": [
        "name",
        "nps/unitcode",
        "operator",
        "surface",
        "width",
        "maxspeed",
        "oneway",
        "lanes",
        "nps/trailuse",
        "nps/structure"
      ],
      "geometry": [
        "line"
      ],
      "icon": "highway-unclassified",
      "maki": "maki",
      "matchScore": 30,
      "isDefault": false,
      "tags": {
        "highway": "unclassified"
      },
      "terms": [
        "unclassified road",
        "unclassified",
        "road"
      ],
      "searchable": true
    },
    "road/minor/pedestrian street": {
      "name": "Pedestrian Street",
      "fields": [
        "name",
        "nps/unitcode",
        "surface",
        "lit",
        "width",
        "oneway",
        "structure",
        "access"
      ],
      "geometry": [
        "line"
      ],
      "matchScore": 30,
      "tags": {
        "highway": "pedestrian"
      },
      "terms": [
        "pedestrian road",
        "pedestrian street"
      ],
      "searchable": true
    },
    "road/minor/private road": {
      "name": "Private Road",
      "fields": [
        "name",
        "nps/unitcode",
        "operator",
        "surface",
        "width",
        "maxspeed",
        "oneway",
        "lanes",
        "nps/trailuse",
        "nps/structure"
      ],
      "geometry": [
        "line"
      ],
      "icon": "highway-road",
      "maki": "maki",
      "matchScore": 30,
      "isDefault": false,
      "tags": {
        "highway": "road",
        "access": "private"
      },
      "terms": [
        "private road",
        "private",
        "road"
      ],
      "searchable": true
    },
    "road/minor/residential road": {
      "name": "Residential Road",
      "fields": [
        "name",
        "nps/unitcode",
        "operator",
        "surface",
        "width",
        "maxspeed",
        "oneway",
        "lanes",
        "nps/trailuse",
        "nps/structure"
      ],
      "geometry": [
        "line"
      ],
      "icon": "highway-residential",
      "maki": "maki",
      "matchScore": 30,
      "isDefault": false,
      "tags": {
        "highway": "residential"
      },
      "terms": [
        "residential road",
        "residential",
        "road"
      ],
      "searchable": true
    },
    "road/minor/road": {
      "name": "Road",
      "fields": [
        "name",
        "nps/unitcode"
      ],
      "geometry": [
        "line"
      ],
      "icon": "highway-road",
      "maki": "maki",
      "matchScore": 30,
      "isDefault": false,
      "tags": {
        "highway": "*"
      },
      "terms": [
        "minor road"
      ],
      "searchable": true
    },
    "road/minor/unknown road": {
      "name": "Unknown Road",
      "fields": [
        "name",
        "nps/unitcode",
        "operator",
        "surface",
        "width",
        "maxspeed",
        "oneway",
        "lanes",
        "nps/trailuse",
        "nps/structure"
      ],
      "geometry": [
        "line"
      ],
      "icon": "highway-unclassified",
      "maki": "maki",
      "matchScore": 30,
      "isDefault": false,
      "tags": {
        "highway": "road"
      },
      "terms": [
        "unknown road",
        "road"
      ],
      "searchable": true
    },
    "road/primary/primary link": {
      "name": "Primary Link",
      "fields": [
        "name",
        "nps/unitcode",
        "operator",
        "surface",
        "width",
        "maxspeed",
        "oneway",
        "nps/trailuse",
        "nps/structure"
      ],
      "geometry": [
        "line"
      ],
      "icon": "highway-primary-link",
      "maki": "maki",
      "matchScore": 53,
      "isDefault": false,
      "tags": {
        "highway": "primary_link"
      },
      "terms": [
        "ramp",
        "on ramp",
        "off ramp"
      ],
      "searchable": true
    },
    "road/primary/primary road": {
      "name": "Primary Road",
      "fields": [
        "name",
        "nps/unitcode",
        "operator",
        "surface",
        "width",
        "maxspeed",
        "oneway",
        "lanes",
        "nps/trailuse",
        "nps/structure"
      ],
      "geometry": [
        "line"
      ],
      "icon": "highway-primary",
      "maki": "maki",
      "matchScore": 55,
      "isDefault": true,
      "tags": {
        "highway": "primary"
      },
      "terms": [
        "primary road",
        "primary",
        "road",
        "highway",
        "interstate",
        "interstate highway"
      ],
      "searchable": true
    },
    "road/secondary/secondary link": {
      "name": "Secondary Link",
      "fields": [
        "name",
        "nps/unitcode",
        "operator",
        "surface",
        "width",
        "maxspeed",
        "oneway",
        "nps/trailuse",
        "nps/structure"
      ],
      "geometry": [
        "line"
      ],
      "icon": "highway-secondary-link",
      "maki": "maki",
      "matchScore": 45,
      "isDefault": false,
      "tags": {
        "highway": "secondary_link"
      },
      "terms": [
        "ramp",
        "on ramp",
        "off ramp"
      ],
      "searchable": true
    },
    "road/secondary/secondary road": {
      "name": "Secondary Road",
      "fields": [
        "name",
        "nps/unitcode",
        "operator",
        "surface",
        "width",
        "maxspeed",
        "oneway",
        "lanes",
        "nps/trailuse",
        "nps/structure"
      ],
      "geometry": [
        "line"
      ],
      "icon": "highway-secondary",
      "maki": "maki",
      "matchScore": 45,
      "isDefault": true,
      "tags": {
        "highway": "secondary"
      },
      "terms": [
        "secondary road",
        "secondary",
        "road",
        "us highway",
        "state highway",
        "county highway"
      ],
      "searchable": true
    },
    "road/service/parking aisle": {
      "name": "Parking Aisle",
      "fields": [
        "name",
        "nps/unitcode",
        "surface",
        "oneway",
        "nps/trailuse",
        "nps/structure"
      ],
      "geometry": [
        "line"
      ],
      "icon": "highway-service",
      "maki": "maki",
      "matchScore": 20,
      "isDefault": true,
      "tags": {
        "highway": "service",
        "service": "parking_aisle"
      },
      "terms": [
        "parking aisle"
      ],
      "searchable": true
    },
    "road/service/service road": {
      "name": "Service Road",
      "fields": [
        "name",
        "nps/unitcode",
        "operator",
        "surface",
        "width",
        "maxspeed",
        "oneway",
        "lanes",
        "nps/trailuse",
        "service",
        "nps/structure"
      ],
      "geometry": [
        "line"
      ],
      "icon": "highway-service",
      "maki": "maki",
      "matchScore": 20,
      "isDefault": true,
      "tags": {
        "highway": "service"
      },
      "terms": [
        "service road",
        "service",
        "road"
      ],
      "searchable": true
    },
    "road/tertiary/tertiary link": {
      "name": "Tertiary Link",
      "fields": [
        "name",
        "nps/unitcode",
        "operator",
        "surface",
        "width",
        "maxspeed",
        "oneway",
        "nps/trailuse",
        "nps/structure"
      ],
      "geometry": [
        "line"
      ],
      "icon": "highway-tertiary-link",
      "maki": "maki",
      "matchScore": 35,
      "isDefault": false,
      "tags": {
        "highway": "tertiary_link"
      },
      "terms": [
        "ramp",
        "on ramp",
        "off ramp"
      ],
      "searchable": true
    },
    "road/tertiary/tertiary road": {
      "name": "Tertiary Road",
      "fields": [
        "name",
        "nps/unitcode",
        "operator",
        "surface",
        "width",
        "maxspeed",
        "oneway",
        "lanes",
        "nps/trailuse",
        "nps/structure"
      ],
      "geometry": [
        "line"
      ],
      "icon": "highway-tertiary",
      "maki": "maki",
      "matchScore": 35,
      "isDefault": true,
      "tags": {
        "highway": "tertiary"
      },
      "terms": [
        "tertiary road",
        "tertiary",
        "road"
      ],
      "searchable": true
    },
    "road/trunk/trunk link": {
      "name": "Trunk Link",
      "fields": [
        "name",
        "nps/unitcode",
        "operator",
        "surface",
        "width",
        "maxspeed",
        "oneway",
        "nps/trailuse",
        "nps/structure"
      ],
      "geometry": [
        "line"
      ],
      "matchScore": 10,
      "tags": {
        "highway": "trunk_link"
      },
      "terms": [
        "ramp",
        "on ramp",
        "off ramp"
      ],
      "searchable": true
    },
    "road/trunk/trunk road": {
      "name": "Trunk Road",
      "fields": [
        "name",
        "nps/unitcode",
        "operator",
        "surface",
        "width",
        "maxspeed",
        "oneway",
        "lanes",
        "nps/trailuse",
        "nps/structure"
      ],
      "geometry": [
        "line"
      ],
      "matchScore": 10,
      "tags": {
        "highway": "trunk"
      },
      "terms": [
        "trunk road",
        "trunk",
        "road"
      ],
      "searchable": true
    },
    "road feature/bridge/bridge": {
      "name": "Bridge",
      "fields": [
        "name",
        "nps/unitcode",
        "operator",
        "address"
      ],
      "geometry": [
        "point"
      ],
      "matchScore": 10,
      "isDefault": false,
      "tags": {
        "bridge": "yes"
      },
      "terms": [
        "bridge"
      ],
      "searchable": true
    },
    "road feature/control/traffic signals": {
      "name": "Traffic Signals",
      "fields": [
        "name",
        "nps/unitcode",
        "operator",
        "address"
      ],
      "geometry": [
        "point"
      ],
      "icon": "circle",
      "maki": "maki",
      "matchScore": 10,
      "isDefault": false,
      "tags": {
        "highway": "traffic_signals"
      },
      "terms": [
        "traffic signals",
        "traffic signal",
        "traffic light",
        "stop light",
        "stoplight"
      ],
      "searchable": true
    },
    "road feature/no-outlet/turning circle": {
      "name": "Turning Circle",
      "fields": [
        "name",
        "nps/unitcode",
        "operator",
        "address"
      ],
      "geometry": [
        "point"
      ],
      "icon": "circle",
      "maki": "maki",
      "matchScore": 10,
      "isDefault": false,
      "tags": {
        "highway": "turning_circle"
      },
      "terms": [
        "turning circle",
        "cul-de-sac",
        "dead end street",
        "blind alley"
      ],
      "searchable": true
    },
    "road feature/tunnel/tunnel": {
      "name": "Tunnel",
      "fields": [
        "name",
        "nps/unitcode",
        "operator",
        "address"
      ],
      "geometry": [
        "point"
      ],
      "matchScore": 10,
      "isDefault": false,
      "tags": {
        "tunnel": "yes"
      },
      "terms": [
        "tunnel"
      ],
      "searchable": true
    },
    "service/airport/airport": {
      "name": "Airport",
      "fields": [
        "name",
        "nps/unitcode",
        "operator",
        "address",
        "icao",
        "iata"
      ],
      "geometry": [
        "point"
      ],
      "icon": "airport-black",
      "maki": "npmap-symbol-library",
      "matchScore": 10,
      "isDefault": false,
      "tags": {
        "aeroway": "aerodrome"
      },
      "terms": [
        "airport",
        "aeroway",
        "aerodrome"
      ],
      "searchable": true
    },
    "service/airport/airstrip": {
      "name": "Airstrip",
      "fields": [
        "name",
        "nps/unitcode",
        "operator",
        "address",
        "icao",
        "iata"
      ],
      "geometry": [
        "point"
      ],
      "icon": "airfield",
      "maki": "maki",
      "matchScore": 10,
      "isDefault": false,
      "tags": {
        "aeroway": "aerodrome",
        "aerodrome": "airstrip"
      },
      "terms": [
        "airstrip",
        "aeroway",
        "aerodrome",
        "air field",
        "landing field"
      ],
      "searchable": true
    },
    "service/airport/landing strip": {
      "name": "Landing Strip",
      "fields": [
        "name",
        "nps/unitcode",
        "operator",
        "address",
        "icao",
        "iata"
      ],
      "geometry": [
        "point"
      ],
      "icon": "airfield",
      "maki": "maki",
      "matchScore": 10,
      "isDefault": false,
      "tags": {
        "aeroway": "aerodrome",
        "aerodrome": "airstrip",
        "surface": "ground"
      },
      "terms": [
        "aeroway",
        "aerodrome",
        "air field",
        "landing strip",
        "landing"
      ],
      "searchable": true
    },
    "service/bank/atm": {
      "name": "ATM",
      "geometry": [
        "point"
      ],
      "matchScore": 40,
      "isDefault": false,
      "tags": {
        "amenity": "atm"
      },
      "terms": [
        "atm",
        "Automated teller Machine",
        "Cash Dispenser"
      ],
      "searchable": true
    },
    "service/bus/bus stop %2f shuttle stop": {
      "name": "Bus Stop / Shuttle Stop",
      "fields": [
        "name",
        "nps/unitcode",
        "operator",
        "address",
        "public_transport",
        "network",
        "shelter",
        "bench"
      ],
      "geometry": [
        "point"
      ],
      "icon": "bus-stop-black",
      "maki": "npmap-symbol-library",
      "matchScore": 10,
      "isDefault": false,
      "tags": {
        "highway": "bus_stop"
      },
      "terms": [
        "bus stop / shuttle stop",
        "bus stop",
        "shuttle stop",
        "bus station"
      ],
      "searchable": true
    },
    "service/entrance/entrance station": {
      "name": "Entrance Station",
      "fields": [
        "name",
        "nps/unitcode",
        "operator",
        "address",
        "opening_hours"
      ],
      "geometry": [
        "point"
      ],
      "icon": "ranger-station-black",
      "maki": "npmap-symbol-library",
      "matchScore": 10,
      "isDefault": false,
      "tags": {
        "barrier": "entrance"
      },
      "terms": [
        "entrance station",
        "entrance",
        "entry",
        "gateway",
        "portal"
      ],
      "searchable": true
    },
    "service/ferry/ferry terminal": {
      "name": "Ferry Terminal",
      "fields": [
        "name",
        "nps/unitcode",
        "operator",
        "address",
        "cargo"
      ],
      "geometry": [
        "point"
      ],
      "icon": "ferry",
      "maki": "maki",
      "matchScore": 10,
      "isDefault": false,
      "tags": {
        "amenity": "ferry_terminal"
      },
      "terms": [
        "ferry terminal"
      ],
      "searchable": true
    },
    "service/food/food service": {
      "name": "Food Service",
      "fields": [
        "name",
        "nps/unitcode",
        "operator",
        "address",
        "opening_hours"
      ],
      "geometry": [
        "point"
      ],
      "icon": "food-service-black",
      "maki": "npmap-symbol-library",
      "matchScore": 50,
      "isDefault": false,
      "tags": {
        "amenity": "food_court"
      },
      "terms": [
        "food service",
        "food court",
        "cafe",
        "restaurant"
      ],
      "searchable": true
    },
    "service/fuel/gas station": {
      "name": "Gas Station",
      "fields": [
        "name",
        "nps/unitcode",
        "operator",
        "address",
        "opening_hours"
      ],
      "geometry": [
        "point"
      ],
      "icon": "gas-station-black",
      "maki": "npmap-symbol-library",
      "matchScore": 40,
      "isDefault": false,
      "tags": {
        "amenity": "fuel"
      },
      "terms": [
        "gas station",
        "fuel",
        "petrol station",
        "petrol",
        "propane",
        "diesel",
        "lng",
        "liquified natural gas",
        "cng",
        "compressed natural gas",
        "biodiesel"
      ],
      "searchable": true
    },
    "service/information/brochure box": {
      "name": "Brochure Box",
      "fields": [
        "name",
        "nps/unitcode",
        "operator",
        "address",
        "opening_hours"
      ],
      "geometry": [
        "point"
      ],
      "matchScore": 80,
      "isDefault": true,
      "tags": {
        "tourism": "information",
        "information": "brochure"
      },
      "terms": [
        "brochure box"
      ],
      "searchable": true
    },
    "service/information/exhibit %2f wayside": {
      "name": "Exhibit / Wayside",
      "fields": [
        "name",
        "nps/unitcode",
        "operator",
        "address",
        "opening_hours"
      ],
      "geometry": [
        "point",
        "vertex"
      ],
      "icon": "information-black",
      "maki": "npmap-symbol-library",
      "matchScore": 80,
      "tags": {
        "tourism": "information",
        "information": "exhibit"
      },
      "terms": [
        "exhibit / wayside",
        "exhibit",
        "wayside",
        "attraction",
        "tourist attraction"
      ],
      "searchable": true
    },
    "service/information/gateway sign": {
      "name": "Gateway Sign",
      "fields": [
        "name",
        "nps/unitcode",
        "operator",
        "address",
        "opening_hours"
      ],
      "geometry": [
        "point",
        "vertex"
      ],
      "matchScore": 80,
      "isDefault": true,
      "tags": {
        "tourism": "information",
        "information": "sign"
      },
      "terms": [
        "gateway sign",
        "location",
        "place name"
      ],
      "searchable": true
    },
    "service/information/information": {
      "name": "Information",
      "fields": [
        "name",
        "nps/unitcode",
        "operator",
        "address",
        "opening_hours"
      ],
      "geometry": [
        "point"
      ],
      "icon": "information-black",
      "maki": "npmap-symbol-library",
      "matchScore": 80,
      "isDefault": true,
      "tags": {
        "tourism": "information"
      },
      "terms": [
        "information",
        "tourist information"
      ],
      "searchable": true
    },
    "service/information/information board": {
      "name": "Information Board",
      "fields": [
        "name",
        "nps/unitcode",
        "operator",
        "address",
        "opening_hours"
      ],
      "geometry": [
        "point"
      ],
      "matchScore": 80,
      "isDefault": true,
      "tags": {
        "tourism": "information",
        "information": "board"
      },
      "terms": [
        "bulletin board"
      ],
      "searchable": true
    },
    "service/information/information map": {
      "name": "Information Map",
      "fields": [
        "name",
        "nps/unitcode",
        "operator",
        "address",
        "opening_hours"
      ],
      "geometry": [
        "point"
      ],
      "icon": "information-black",
      "maki": "npmap-symbol-library",
      "matchScore": 80,
      "isDefault": true,
      "tags": {
        "tourism": "information",
        "information": "map"
      },
      "terms": [
        "information map",
        "information",
        "map"
      ],
      "searchable": true
    },
    "service/information/interpretive sign": {
      "name": "Interpretive Sign",
      "fields": [
        "name",
        "nps/unitcode",
        "operator",
        "address",
        "opening_hours"
      ],
      "geometry": [
        "point",
        "vertex"
      ],
      "icon": "information-black",
      "maki": "npmap-symbol-library",
      "matchScore": 80,
      "isDefault": true,
      "tags": {
        "tourism": "information",
        "information": "exhibit"
      },
      "terms": [
        "exhibit / wayside",
        "exhibit",
        "wayside",
        "attraction",
        "tourist attraction",
        "interpretive sign"
      ],
      "searchable": true
    },
    "service/information/visitor center": {
      "name": "Visitor Center",
      "fields": [
        "name",
        "nps/unitcode",
        "operator",
        "address",
        "opening_hours"
      ],
      "geometry": [
        "point"
      ],
      "icon": "visitor-center-black",
      "maki": "npmap-symbol-library",
      "matchScore": 100,
      "isDefault": true,
      "tags": {
        "tourism": "information",
        "information": "office"
      },
      "terms": [
        "visitor center",
        "visitor centre",
        "visitor information",
        "information"
      ],
      "searchable": true
    },
    "service/internet/wi-fi": {
      "name": "Wi-Fi",
      "fields": [
        "name",
        "nps/unitcode"
      ],
      "geometry": [
        "point"
      ],
      "matchScore": 10,
      "isDefault": false,
      "tags": {
        "wifi": "yes"
      },
      "terms": [
        "wifi",
        "internet",
        "online"
      ],
      "searchable": true
    },
    "service/parking/electric vehicle parking": {
      "name": "Electric Vehicle Parking",
      "fields": [
        "name",
        "nps/unitcode"
      ],
      "geometry": [
        "point"
      ],
      "matchScore": 10,
      "isDefault": false,
      "tags": {
        "amenity": "parking",
        "capacity:charging": "yes"
      },
      "terms": [
        "electric vehicle parking"
      ],
      "searchable": true
    },
    "service/parking/parking lot": {
      "name": "Parking Lot",
      "fields": [
        "name",
        "nps/unitcode",
        "operator",
        "address",
        "capacity",
        "maxstay",
        "fee",
        "nps/trailuse"
      ],
      "geometry": [
        "point",
        "vertex"
      ],
      "icon": "parking-black",
      "maki": "npmap-symbol-library",
      "matchScore": 60,
      "isDefault": true,
      "tags": {
        "amenity": "parking"
      },
      "terms": [
        "parking",
        "car parking",
        "vehicle parking",
        "parking lot",
        "car park"
      ],
      "searchable": true
    },
    "service/parking/roadside pullout": {
      "name": "Roadside Pullout",
      "geometry": [
        "point"
      ],
      "matchScore": 10,
      "isDefault": false,
      "tags": {
        "highway": "rest_area"
      },
      "terms": [
        "roadside pullout"
      ],
      "searchable": true
    },
    "service/post/mailbox": {
      "name": "Mailbox",
      "geometry": [
        "point",
        "vertex"
      ],
      "matchScore": 10,
      "isDefault": false,
      "tags": {
        "amenity": "post_box"
      },
      "terms": [
        "mailbox"
      ],
      "searchable": true
    },
    "service/post/post office": {
      "name": "Post Office",
      "fields": [
        "name",
        "nps/unitcode",
        "operator",
        "address",
        "opening_hours"
      ],
      "geometry": [
        "point"
      ],
      "icon": "post-office-black",
      "maki": "npmap-symbol-library",
      "matchScore": 10,
      "isDefault": false,
      "tags": {
        "amenity": "post_office"
      },
      "terms": [
        "post office",
        "mail office",
        "post",
        "mail",
        "letter",
        "parcel",
        "package"
      ],
      "searchable": true
    },
    "service/rail/metro stop %2f subway entrance": {
      "name": "Metro Stop / Subway Entrance",
      "fields": [
        "name",
        "nps/unitcode"
      ],
      "geometry": [
        "point"
      ],
      "icon": "rail-metro",
      "maki": "maki",
      "matchScore": 10,
      "isDefault": false,
      "tags": {
        "railway": "subway_entrance"
      },
      "terms": [
        "metro stop / subway entrance",
        "metro stop",
        "subway entrance",
        "subway exit"
      ],
      "searchable": true
    },
    "service/rail/train station": {
      "name": "Train Station",
      "fields": [
        "name",
        "nps/unitcode",
        "address",
        "levels",
        "smoking"
      ],
      "geometry": [
        "point"
      ],
      "icon": "rail",
      "maki": "maki",
      "matchScore": 10,
      "isDefault": false,
      "tags": {
        "building": "train_station"
      },
      "terms": [
        "train station",
        "railway station"
      ],
      "searchable": true
    },
    "service/shopping/store": {
      "name": "Store",
      "fields": [
        "name",
        "nps/unitcode",
        "operator",
        "address",
        "opening_hours"
      ],
      "geometry": [
        "point"
      ],
      "icon": "store-black",
      "maki": "npmap-symbol-library",
      "matchScore": 40,
      "isDefault": false,
      "tags": {
        "shop": "general"
      },
      "terms": [
        "store",
        "shop",
        "general store"
      ],
      "searchable": true
    },
    "service/showers/showers": {
      "name": "Showers",
      "fields": [
        "name",
        "nps/unitcode",
        "operator",
        "address",
        "opening_hours",
        "fee",
        "access"
      ],
      "geometry": [
        "point"
      ],
      "icon": "showers-black",
      "maki": "npmap-symbol-library",
      "matchScore": 10,
      "isDefault": false,
      "tags": {
        "amenity": "shower"
      },
      "terms": [
        "showers",
        "shower",
        "bath"
      ],
      "searchable": true
    },
    "service/support/emergency telephone": {
      "name": "Emergency Telephone",
      "fields": [
        "name",
        "nps/unitcode",
        "operator",
        "address"
      ],
      "geometry": [
        "point"
      ],
      "icon": "telephone-black",
      "maki": "npmap-symbol-library",
      "matchScore": 10,
      "isDefault": false,
      "tags": {
        "emergency": "phone"
      },
      "terms": [
        "emergency telephone",
        "emergency phone",
        "phone",
        "emergency"
      ],
      "searchable": true
    },
    "service/support/fire station": {
      "name": "Fire Station",
      "fields": [
        "name",
        "nps/unitcode",
        "operator",
        "address"
      ],
      "geometry": [
        "point"
      ],
      "icon": "fire-station",
      "maki": "maki",
      "matchScore": 10,
      "isDefault": false,
      "tags": {
        "amenity": "fire_station"
      },
      "terms": [
        "fire station",
        "fire department",
        "emergency"
      ],
      "searchable": true
    },
    "service/support/first aid station": {
      "name": "First Aid Station",
      "fields": [
        "name",
        "nps/unitcode",
        "operator",
        "address"
      ],
      "geometry": [
        "point"
      ],
      "icon": "first-aid-black",
      "maki": "npmap-symbol-library",
      "matchScore": 10,
      "isDefault": false,
      "tags": {
        "amenity": "first_aid"
      },
      "terms": [
        "first aid station",
        "first aid",
        "medical",
        "emergency"
      ],
      "searchable": true
    },
    "service/support/hospital": {
      "name": "Hospital",
      "fields": [
        "name",
        "nps/unitcode",
        "operator",
        "address",
        "opening_hours",
        "emergency"
      ],
      "geometry": [
        "point"
      ],
      "icon": "hospital-black",
      "maki": "npmap-symbol-library",
      "matchScore": 10,
      "isDefault": false,
      "tags": {
        "amenity": "hospital"
      },
      "terms": [
        "hospital grounds",
        "hospital",
        "ward",
        "institution",
        "infirmary",
        "clinic",
        "emergency room",
        "doctor",
        "health service",
        "sick",
        "surgery",
        "medical",
        "emergency"
      ],
      "searchable": true
    },
    "service/support/police": {
      "name": "Police",
      "fields": [
        "name",
        "nps/unitcode",
        "operator",
        "address",
        "opening_hours"
      ],
      "geometry": [
        "point"
      ],
      "icon": "police",
      "maki": "maki",
      "matchScore": 10,
      "isDefault": false,
      "tags": {
        "amenity": "police"
      },
      "terms": [
        "police",
        "police station",
        "cops",
        "police force",
        "badge",
        "constable",
        "detective",
        "fed",
        "law enforcement",
        "officer",
        "patrol",
        "emergency"
      ],
      "searchable": true
    },
    "service/support/ranger station": {
      "name": "Ranger Station",
      "fields": [
        "name",
        "nps/unitcode",
        "operator",
        "address",
        "opening_hours"
      ],
      "geometry": [
        "point"
      ],
      "icon": "ranger-station-black",
      "maki": "npmap-symbol-library",
      "matchScore": 95,
      "isDefault": true,
      "tags": {
        "amenity": "ranger_station"
      },
      "terms": [
        "ranger station",
        "permit center",
        "permit centre",
        "backcountry office",
        "warden office",
        "warden center"
      ],
      "searchable": true
    },
    "service/telephone/telephone": {
      "name": "Telephone",
      "fields": [
        "name",
        "nps/unitcode",
        "operator",
        "address",
        "indoor"
      ],
      "geometry": [
        "point"
      ],
      "icon": "telephone-black",
      "maki": "npmap-symbol-library",
      "matchScore": 10,
      "isDefault": false,
      "tags": {
        "amenity": "telephone"
      },
      "terms": [
        "telephone",
        "phone",
        "telephone box",
        "phone booth"
      ],
      "searchable": true
    },
    "service/theater/amphitheater": {
      "name": "Amphitheater",
      "fields": [
        "name",
        "nps/unitcode",
        "operator",
        "address"
      ],
      "geometry": [
        "point"
      ],
      "icon": "amphitheater-black",
      "maki": "npmap-symbol-library",
      "matchScore": 40,
      "isDefault": false,
      "tags": {
        "amenity": "theatre",
        "theatre:type": "amphi"
      },
      "terms": [
        "amphitheater",
        "theatre",
        "theater",
        "opera house",
        "playhouse",
        "performance",
        "play",
        "musical"
      ],
      "searchable": true
    },
    "service/waste/dumpster": {
      "name": "Dumpster",
      "fields": [
        "name",
        "nps/unitcode"
      ],
      "geometry": [
        "point"
      ],
      "matchScore": 10,
      "isDefault": false,
      "tags": {
        "amenity": "waste_disposal"
      },
      "terms": [
        "dumpster"
      ],
      "searchable": true
    },
    "service/waste/litter receptacle": {
      "name": "Litter Receptacle",
      "fields": [
        "name",
        "nps/unitcode",
        "operator",
        "address",
        "waste",
        "bin"
      ],
      "geometry": [
        "point"
      ],
      "icon": "litter-receptacle-black",
      "maki": "npmap-symbol-library",
      "matchScore": 10,
      "isDefault": false,
      "tags": {
        "amenity": "waste_basket"
      },
      "terms": [
        "waste basket",
        "waste paper basket",
        "trash bin",
        "waste bin",
        "trash",
        "rubbish",
        "litter",
        "garbage"
      ],
      "searchable": true
    },
    "service/waste/recycling": {
      "name": "Recycling",
      "fields": [
        "name",
        "nps/unitcode",
        "operator",
        "address",
        "recycling/cans",
        "recycling/glass",
        "recycling/paper",
        "recycling/clothes"
      ],
      "geometry": [
        "point"
      ],
      "icon": "recycling-black",
      "maki": "npmap-symbol-library",
      "matchScore": 10,
      "isDefault": false,
      "tags": {
        "amenity": "recycling"
      },
      "terms": [
        "recycling",
        "salvage",
        "garbage",
        "trash",
        "can",
        "bottle",
        "scrap"
      ],
      "searchable": true
    },
    "service/water/drinking water": {
      "name": "Drinking Water",
      "fields": [
        "name",
        "nps/unitcode",
        "operator",
        "description",
        "indoor",
        "access"
      ],
      "geometry": [
        "point"
      ],
      "icon": "drinking-water-black",
      "maki": "npmap-symbol-library",
      "matchScore": 10,
      "isDefault": false,
      "tags": {
        "amenity": "drinking_water"
      },
      "terms": [
        "drinking water",
        "fountain",
        "potable"
      ],
      "searchable": true
    },
    "service/water/fountain": {
      "name": "Fountain",
      "fields": [
        "name",
        "nps/unitcode",
        "operator",
        "address",
        "drinking_water",
        "lit"
      ],
      "geometry": [
        "point"
      ],
      "matchScore": 10,
      "isDefault": false,
      "tags": {
        "amenity": "fountain"
      },
      "terms": [
        "fountain",
        "well"
      ],
      "searchable": true
    },
    "service/water/radiator water": {
      "name": "Radiator Water",
      "fields": [
        "name",
        "nps/unitcode",
        "operator",
        "address"
      ],
      "geometry": [
        "point"
      ],
      "icon": "radiator-water-black",
      "maki": "npmap-symbol-library",
      "matchScore": 10,
      "isDefault": false,
      "tags": {
        "emergency": "water_tank"
      },
      "terms": [
        "radiator water",
        "water tank"
      ],
      "searchable": true
    },
    "service/water/water well": {
      "name": "Water Well",
      "fields": [
        "name",
        "nps/unitcode",
        "operator",
        "drinking_water",
        "pump"
      ],
      "geometry": [
        "point"
      ],
      "matchScore": 10,
      "isDefault": false,
      "tags": {
        "man_made": "water_well"
      },
      "terms": [
        "water well"
      ],
      "searchable": true
    },
    "trail/motorized/all-terrain trail": {
      "name": "All-terrain trail",
      "fields": [
        "name",
        "nps/unitcode",
        "operator",
        "tracktype",
        "surface",
        "width",
        "incline",
        "mtb/scale",
        "mtb/scale/uphill",
        "mtb/scale/imba",
        "sac_scale",
        "trail_visibility",
        "nps/trailuse",
        "nps/structure"
      ],
      "geometry": [
        "line"
      ],
      "icon": "All-terrain trail",
      "maki": "npmap-symbol-library",
      "matchScore": 15,
      "isDefault": false,
      "tags": {
        "highway": "track",
        "atv": "yes"
      },
      "terms": [
        "atv trail",
        "atv",
        "all terrain vehicle",
        "quad",
        "4wd",
        "4 wheeler",
        "four-wheeler",
        "off-road",
        "off road",
        "trail",
        "track",
        "structure"
      ],
      "searchable": true
    },
    "trail/motorized/four-wheel drive trail": {
      "name": "Four-Wheel Drive Trail",
      "fields": [
        "name",
        "nps/unitcode",
        "operator",
        "tracktype",
        "surface",
        "width",
        "incline",
        "mtb/scale",
        "mtb/scale/uphill",
        "mtb/scale/imba",
        "sac_scale",
        "trail_visibility",
        "nps/trailuse",
        "nps/structure"
      ],
      "geometry": [
        "line"
      ],
      "icon": "four-wheel-drive-road-black",
      "maki": "npmap-symbol-library",
      "matchScore": 15,
      "isDefault": false,
      "tags": {
        "highway": "track",
        "4wd_only": "yes"
      },
      "terms": [
        "four-wheel drive trail",
        "atv",
        "all terrain vehicle",
        "quad",
        "4wd",
        "4 wheeler",
        "four-wheeler",
        "off-road",
        "off road",
        "trail",
        "track"
      ],
      "searchable": true
    },
    "trail/motorized/motorcycle trail": {
      "name": "Motorcycle Trail",
      "fields": [
        "name",
        "nps/unitcode",
        "operator",
        "tracktype",
        "surface",
        "width",
        "incline",
        "mtb/scale",
        "mtb/scale/uphill",
        "mtb/scale/imba",
        "sac_scale",
        "trail_visibility",
        "nps/trailuse",
        "nps/structure"
      ],
      "geometry": [
        "line"
      ],
      "icon": "motor-bike-trail-black",
      "maki": "npmap-symbol-library",
      "matchScore": 15,
      "isDefault": false,
      "tags": {
        "highway": "track",
        "motorcycle": "yes"
      },
      "terms": [
        "motorcycle trail",
        "motorcycle",
        "trail",
        "track"
      ],
      "searchable": true
    },
    "trail/motorized/snowmobile trail": {
      "name": "Snowmobile Trail",
      "fields": [
        "name",
        "nps/unitcode",
        "operator",
        "tracktype",
        "surface",
        "width",
        "incline",
        "mtb/scale",
        "mtb/scale/uphill",
        "mtb/scale/imba",
        "sac_scale",
        "trail_visibility",
        "nps/trailuse",
        "nps/structure"
      ],
      "geometry": [
        "line"
      ],
      "icon": "snowmobile-trail-black",
      "maki": "npmap-symbol-library",
      "matchScore": 15,
      "isDefault": false,
      "tags": {
        "highway": "track",
        "snowmobile": "yes"
      },
      "terms": [
        "snowmobile trail",
        "snowmobile",
        "snow machine",
        "trail",
        "track"
      ],
      "searchable": true
    },
    "trail/non-motorized/backcountry ski trail": {
      "name": "Backcountry Ski Trail",
      "fields": [
        "name",
        "nps/unitcode",
        "operator",
        "tracktype",
        "surface",
        "width",
        "incline",
        "mtb/scale",
        "mtb/scale/uphill",
        "mtb/scale/imba",
        "sac_scale",
        "trail_visibility",
        "nps/nonmotorizeduse",
        "piste/difficulty"
      ],
      "geometry": [
        "line"
      ],
      "icon": "downhill-skiing-black",
      "maki": "npmap-symbol-library",
      "matchScore": 12,
      "isDefault": false,
      "tags": {
        "piste:type": "skitour"
      },
      "terms": [
        "backcountry ski trail",
        "backcountry ski",
        "backcountry",
        "trail",
        "track",
        "structure"
      ],
      "searchable": true
    },
    "trail/non-motorized/bicycle trail": {
      "name": "Bicycle Trail",
      "fields": [
        "name",
        "nps/unitcode",
        "operator",
        "tracktype",
        "surface",
        "width",
        "incline",
        "mtb/scale",
        "mtb/scale/uphill",
        "mtb/scale/imba",
        "sac_scale",
        "trail_visibility",
        "nps/nonmotorizeduse",
        "nps/structure"
      ],
      "geometry": [
        "line"
      ],
      "icon": "bicycle-trail-black",
      "maki": "npmap-symbol-library",
      "matchScore": 12,
      "isDefault": false,
      "tags": {
        "highway": "path",
        "bicycle": "yes"
      },
      "terms": [
        "bicycle trail",
        "bicycle",
        "trail",
        "track"
      ],
      "searchable": true
    },
    "trail/non-motorized/canyoneering route": {
      "name": "Canyoneering Route",
      "fields": [
        "name",
        "nps/unitcode"
      ],
      "geometry": [
        "line"
      ],
      "matchScore": 12,
      "isDefault": false,
      "tags": {
        "highway": "path",
        "sport": "canyoning"
      },
      "terms": [
        "canyoneering route"
      ],
      "searchable": true
    },
    "trail/non-motorized/climbing route": {
      "name": "Climbing Route",
      "fields": [
        "name",
        "nps/unitcode"
      ],
      "geometry": [
        "line"
      ],
      "matchScore": 12,
      "isDefault": false,
      "tags": {
        "highway": "path",
        "sport": "climbing"
      },
      "terms": [
        "climbing route"
      ],
      "searchable": true
    },
    "trail/non-motorized/cross-country ski trail": {
      "name": "Cross-Country Ski Trail",
      "fields": [
        "name",
        "nps/unitcode",
        "operator",
        "tracktype",
        "surface",
        "width",
        "incline",
        "mtb/scale",
        "mtb/scale/uphill",
        "mtb/scale/imba",
        "sac_scale",
        "trail_visibility",
        "nps/nonmotorizeduse",
        "piste/difficulty"
      ],
      "geometry": [
        "line"
      ],
      "icon": "cross-country-ski-trail-black",
      "maki": "npmap-symbol-library",
      "matchScore": 12,
      "isDefault": false,
      "tags": {
        "piste:type": "nordic"
      },
      "terms": [
        "cross-country ski trail",
        "cross-country ski",
        "cross-country",
        "nordic ski trail",
        "nordic ski",
        "nordic",
        "xcs",
        "trail",
        "track"
      ],
      "searchable": true
    },
    "trail/non-motorized/dog sled trail": {
      "name": "Dog Sled Trail",
      "fields": [
        "name",
        "nps/unitcode",
        "operator",
        "tracktype",
        "surface",
        "width",
        "incline",
        "mtb/scale",
        "mtb/scale/uphill",
        "mtb/scale/imba",
        "sac_scale",
        "trail_visibility",
        "nps/nonmotorizeduse",
        "piste/difficulty"
      ],
      "geometry": [
        "line"
      ],
      "matchScore": 12,
      "isDefault": false,
      "tags": {
        "piste:type": "sleigh"
      },
      "terms": [
        "dog sled trail",
        "dog sled",
        "mushing trail",
        "mushing",
        "winter track",
        "trail",
        "track"
      ],
      "searchable": true
    },
    "trail/non-motorized/downhill ski trail": {
      "name": "Downhill Ski Trail",
      "fields": [
        "name",
        "nps/unitcode",
        "operator",
        "tracktype",
        "surface",
        "width",
        "incline",
        "mtb/scale",
        "mtb/scale/uphill",
        "mtb/scale/imba",
        "sac_scale",
        "trail_visibility",
        "nps/nonmotorizeduse",
        "piste/difficulty"
      ],
      "geometry": [
        "line"
      ],
      "icon": "downhill-skiing-black",
      "maki": "npmap-symbol-library",
      "matchScore": 12,
      "isDefault": false,
      "tags": {
        "piste:type": "downhill"
      },
      "terms": [
        "downhill ski trail",
        "downhill ski",
        "downhill",
        "alpine ski trail",
        "alpine ski",
        "alpine",
        "trail",
        "track"
      ],
      "searchable": true
    },
    "trail/non-motorized/horseback riding": {
      "name": "Horseback Riding",
      "fields": [
        "name",
        "nps/unitcode",
        "operator",
        "tracktype",
        "surface",
        "width",
        "incline",
        "mtb/scale",
        "mtb/scale/uphill",
        "mtb/scale/imba",
        "sac_scale",
        "trail_visibility",
        "nps/nonmotorizeduse",
        "nps/structure"
      ],
      "geometry": [
        "line"
      ],
      "icon": "horseback-riding-black",
      "maki": "npmap-symbol-library",
      "matchScore": 12,
      "isDefault": true,
      "tags": {
        "highway": "path",
        "horse": "yes"
      },
      "terms": [
        "equestrian trail",
        "equestrian",
        "bridleway",
        "horse riding",
        "horse",
        "trail",
        "track"
      ],
      "searchable": true
    },
    "trail/non-motorized/non-motorized trail": {
      "name": "Non-Motorized Trail",
      "fields": [
        "name",
        "nps/unitcode",
        "operator",
        "tracktype",
        "surface",
        "width",
        "incline",
        "mtb/scale",
        "mtb/scale/uphill",
        "mtb/scale/imba",
        "sac_scale",
        "trail_visibility",
        "nps/nonmotorizeduse",
        "nps/structure"
      ],
      "geometry": [
        "line"
      ],
      "icon": "trailhead-black",
      "maki": "npmap-symbol-library",
      "matchScore": 12,
      "isDefault": true,
      "tags": {
        "highway": "path"
      },
      "terms": [
        "trail",
        "path",
        "track",
        "hike",
        "hiking",
        "trackway",
        "walk",
        "footpath"
      ],
      "searchable": true
    },
    "trail/non-motorized/non-motorized watercraft trail": {
      "name": "Non-Motorized Watercraft Trail",
      "fields": [
        "name",
        "nps/unitcode",
        "operator",
        "whitewater",
        "width",
        "section_grade",
        "nps/wateruse"
      ],
      "geometry": [
        "line"
      ],
      "icon": "canoe-access-black",
      "maki": "npmap-symbol-library",
      "matchScore": 12,
      "isDefault": false,
      "tags": {
        "canoe": "yes",
        "waterway": "yes"
      },
      "terms": [
        "non-motorized watercraft trail",
        "non-motorized watercraft",
        "canoe",
        "kayak",
        "raft",
        "trail",
        "track"
      ],
      "searchable": true
    },
    "trail/non-motorized/pedestrian path": {
      "name": "Pedestrian Path",
      "fields": [
        "name",
        "nps/unitcode",
        "surface",
        "lit",
        "width",
        "structure",
        "access"
      ],
      "geometry": [
        "line"
      ],
      "icon": "highway-footway",
      "maki": "maki",
      "matchScore": 12,
      "isDefault": false,
      "tags": {
        "highway": "footway"
      },
      "terms": [
        "footway",
        "pedestrian path",
        "pedestrian trail"
      ],
      "searchable": true
    },
    "trail/non-motorized/pedestrian street": {
      "name": "Pedestrian Street",
      "fields": [
        "name",
        "nps/unitcode",
        "surface",
        "lit",
        "width",
        "oneway",
        "structure",
        "access"
      ],
      "geometry": [
        "line"
      ],
      "icon": "highway-footway",
      "maki": "maki",
      "matchScore": 30,
      "isDefault": false,
      "tags": {
        "highway": "pedestrian"
      },
      "terms": [
        "pedestrian road",
        "pedestrian street"
      ],
      "searchable": true
    },
    "trail/non-motorized/sidewalk": {
      "name": "Sidewalk",
      "fields": [
        "name",
        "nps/unitcode",
        "operator",
        "surface",
        "lit",
        "width",
        "nps/nonmotorizeduse",
        "nps/structure"
      ],
      "geometry": [
        "line"
      ],
      "matchScore": 12,
      "isDefault": true,
      "tags": {
        "highway": "footway",
        "footway": "sidewalk"
      },
      "terms": [
        "sidewalk",
        "footway"
      ],
      "searchable": true
    },
    "trail/non-motorized/snowshoe trail": {
      "name": "Snowshoe Trail",
      "fields": [
        "name",
        "nps/unitcode",
        "operator",
        "tracktype",
        "surface",
        "width",
        "incline",
        "mtb/scale",
        "mtb/scale/uphill",
        "mtb/scale/imba",
        "sac_scale",
        "trail_visibility",
        "nps/nonmotorizeduse",
        "piste/difficulty"
      ],
      "geometry": [
        "line"
      ],
      "matchScore": 12,
      "isDefault": false,
      "tags": {
        "piste:type": "hike"
      },
      "terms": [
        "snowshoe trail",
        "snowshoe",
        "trail",
        "track"
      ],
      "searchable": true
    },
    "trail/non-motorized/steps": {
      "name": "Steps",
      "fields": [
        "surface",
        "lit",
        "width",
        "incline_steps",
        "access"
      ],
      "geometry": [
        "line"
      ],
      "icon": "highway-steps",
      "maki": "maki",
      "matchScore": 12,
      "isDefault": false,
      "tags": {
        "highway": "steps"
      },
      "terms": [
        "stairs",
        "staircase",
        "steps"
      ],
      "searchable": true
    },
    "trail/water/ferry route": {
      "name": "Ferry Route",
      "fields": [
        "name",
        "nps/unitcode"
      ],
      "geometry": [
        "line"
      ],
      "icon": "ferry",
      "maki": "maki",
      "matchScore": 25,
      "isDefault": false,
      "tags": {
        "route": "ferry"
      },
      "terms": [
        "ferry"
      ],
      "searchable": true
    },
    "trail/water/motorized trail": {
      "name": "Motorized Trail",
      "fields": [
        "name",
        "nps/unitcode",
        "operator",
        "tracktype",
        "surface",
        "width",
        "incline",
        "mtb/scale",
        "mtb/scale/uphill",
        "mtb/scale/imba",
        "sac_scale",
        "trail_visibility",
        "nps/trailuse",
        "nps/structure"
      ],
      "geometry": [
        "line"
      ],
      "icon": "trailhead-black",
      "maki": "npmap-symbol-library",
      "matchScore": 25,
      "isDefault": true,
      "tags": {
        "highway": "track"
      },
      "terms": [
        "track",
        "trail",
        "path"
      ],
      "searchable": true
    },
    "trail/water/motorized watercraft trail": {
      "name": "Motorized Watercraft Trail",
      "fields": [
        "name",
        "nps/unitcode",
        "operator",
        "whitewater",
        "width",
        "section_grade",
        "nps/wateruse"
      ],
      "geometry": [
        "line"
      ],
      "icon": "water",
      "maki": "maki",
      "matchScore": 25,
      "isDefault": false,
      "tags": {
        "motorboat": "yes",
        "waterway": "yes"
      },
      "terms": [
        "motorized watercraft trail",
        "motorized watercraft",
        "motorboat",
        "trail",
        "track"
      ],
      "searchable": true
    },
    "water recreation/access/boat launch": {
      "name": "Boat Launch",
      "fields": [
        "name",
        "nps/unitcode",
        "operator",
        "whitewater",
        "width",
        "section_grade",
        "nps/wateruse"
      ],
      "geometry": [
        "point"
      ],
      "icon": "boat-launch-black",
      "maki": "npmap-symbol-library",
      "matchScore": 10,
      "isDefault": false,
      "tags": {
        "leisure": "slipway"
      },
      "terms": [
        "boat launch",
        "slipway",
        "boat ramp"
      ],
      "searchable": true
    },
    "water recreation/access/canoe %2f kayak access": {
      "name": "Canoe / Kayak Access",
      "fields": [
        "name",
        "nps/unitcode",
        "operator",
        "whitewater",
        "width",
        "section_grade",
        "nps/wateruse"
      ],
      "geometry": [
        "point"
      ],
      "icon": "canoe-access-black",
      "maki": "npmap-symbol-library",
      "matchScore": 10,
      "isDefault": false,
      "tags": {
        "leisure": "slipway",
        "canoe": "yes"
      },
      "terms": [
        "canoe access",
        "canoe",
        "kayak",
        "raft",
        "trail",
        "track"
      ],
      "searchable": true
    },
    "water recreation/boat/anchorage": {
      "name": "Anchorage",
      "fields": [
        "name",
        "nps/unitcode"
      ],
      "geometry": [
        "point"
      ],
      "matchScore": 10,
      "isDefault": false,
      "tags": {
        "seamark:anchorage:category": "*"
      },
      "terms": [
        "anchorage"
      ],
      "searchable": true
    },
    "water recreation/boat/buoy": {
      "name": "Buoy",
      "fields": [
        "name",
        "nps/unitcode"
      ],
      "geometry": [
        "point"
      ],
      "matchScore": 10,
      "isDefault": false,
      "tags": {
        "man_made": "buoy"
      },
      "terms": [
        "buoy"
      ],
      "searchable": true
    },
    "water recreation/boat/marina": {
      "name": "Marina",
      "fields": [
        "name",
        "nps/unitcode",
        "operator",
        "address",
        "capacity",
        "mooring"
      ],
      "geometry": [
        "point"
      ],
      "icon": "marina-black",
      "maki": "npmap-symbol-library",
      "matchScore": 10,
      "isDefault": false,
      "tags": {
        "leisure": "marina"
      },
      "terms": [
        "marina",
        "harbour",
        "harbor"
      ],
      "searchable": true
    },
    "water recreation/boat/mooring": {
      "name": "Mooring",
      "fields": [
        "name",
        "nps/unitcode"
      ],
      "geometry": [
        "point"
      ],
      "matchScore": 10,
      "isDefault": false,
      "tags": {
        "mooring": "*"
      },
      "terms": [
        "mooring"
      ],
      "searchable": true
    },
    "water recreation/boat/sailing": {
      "name": "Sailing",
      "fields": [
        "name",
        "nps/unitcode"
      ],
      "geometry": [
        "point"
      ],
      "icon": "sailing-black",
      "maki": "npmap-symbol-library",
      "matchScore": 10,
      "isDefault": false,
      "tags": {
        "sport": "sailing"
      },
      "terms": [
        "sailing"
      ],
      "searchable": true
    },
    "water recreation/boat/zebra mussel decontamination station": {
      "name": "Zebra Mussel Decontamination Station",
      "fields": [
        "name",
        "nps/unitcode"
      ],
      "geometry": [
        "point"
      ],
      "matchScore": 10,
      "isDefault": false,
      "tags": {
        "amenity": "boat_wash",
        "type": "zebra_mussel"
      },
      "terms": [
        "zebra mussel decontamination station"
      ],
      "searchable": true
    },
    "water recreation/fishing/fish cleaning": {
      "name": "Fish Cleaning",
      "fields": [
        "name",
        "nps/unitcode"
      ],
      "geometry": [
        "point"
      ],
      "matchScore": 10,
      "isDefault": false,
      "tags": {
        "amenity": "fish_cleaning"
      },
      "terms": [
        "fish cleaning"
      ],
      "searchable": true
    },
    "water recreation/fishing/fish hatchery": {
      "name": "Fish Hatchery",
      "fields": [
        "name",
        "nps/unitcode"
      ],
      "geometry": [
        "point"
      ],
      "matchScore": 10,
      "isDefault": false,
      "tags": {
        "landuse": "aquaculture"
      },
      "terms": [
        "fish hatchery"
      ],
      "searchable": true
    },
    "water recreation/fishing/fishing": {
      "name": "Fishing",
      "fields": [
        "name",
        "nps/unitcode"
      ],
      "geometry": [
        "point"
      ],
      "icon": "fishing-black",
      "maki": "npmap-symbol-library",
      "matchScore": 10,
      "isDefault": false,
      "tags": {
        "leisure": "fishing"
      },
      "terms": [
        "fishing"
      ],
      "searchable": true
    },
    "water recreation/lighthouse/lighthouse": {
      "name": "Lighthouse",
      "fields": [
        "name",
        "nps/unitcode"
      ],
      "geometry": [
        "point"
      ],
      "matchScore": 10,
      "isDefault": false,
      "tags": {
        "man_made": "lighthouse"
      },
      "terms": [
        "lighthouse"
      ],
      "searchable": true
    },
    "water recreation/scuba/scuba diving": {
      "name": "Scuba Diving",
      "fields": [
        "name",
        "nps/unitcode"
      ],
      "geometry": [
        "point"
      ],
      "icon": "scuba-diving-black",
      "maki": "npmap-symbol-library",
      "matchScore": 10,
      "isDefault": false,
      "tags": {
        "sport": "scuba_diving"
      },
      "terms": [
        "scuba diving"
      ],
      "searchable": true
    },
    "water recreation/swimming/swimming area": {
      "name": "Swimming Area",
      "fields": [
        "name",
        "nps/unitcode"
      ],
      "geometry": [
        "point"
      ],
      "icon": "swimming-black",
      "maki": "npmap-symbol-library",
      "matchScore": 10,
      "isDefault": false,
      "tags": {
        "sport": "swimming"
      },
      "terms": [
        "swimming area"
      ],
      "searchable": true
    },
    "water recreation/wind surfing/wind surfing area": {
      "name": "Wind Surfing Area",
      "fields": [
        "name",
        "nps/unitcode"
      ],
      "geometry": [
        "point"
      ],
      "icon": "wind-surfing-black",
      "maki": "npmap-symbol-library",
      "matchScore": 10,
      "isDefault": false,
      "tags": {
        "sport": "windsurfing"
      },
      "terms": [
        "wind surfing area"
      ],
      "searchable": true
    },
    "winter recreation/cross-country skiing/cross-country ski trail": {
      "name": "Cross-Country Ski Trail",
      "fields": [
        "name",
        "nps/unitcode",
        "operator",
        "tracktype",
        "surface",
        "width",
        "incline",
        "mtb/scale",
        "mtb/scale/uphill",
        "mtb/scale/imba",
        "sac_scale",
        "trail_visibility",
        "nps/nonmotorizeduse",
        "piste/difficulty"
      ],
      "geometry": [
        "point"
      ],
      "icon": "cross-country-ski-trail-black",
      "maki": "npmap-symbol-library",
      "matchScore": 10,
      "isDefault": false,
      "tags": {
        "piste:type": "nordic"
      },
      "terms": [
        "cross-country ski trail",
        "cross-country ski",
        "cross-country",
        "nordic ski trail",
        "nordic ski",
        "nordic",
        "xcs",
        "trail",
        "track"
      ],
      "searchable": true
    },
    "winter recreation/dog sled/dog sled trail": {
      "name": "Dog Sled Trail",
      "fields": [
        "name",
        "nps/unitcode",
        "operator",
        "tracktype",
        "surface",
        "width",
        "incline",
        "mtb/scale",
        "mtb/scale/uphill",
        "mtb/scale/imba",
        "sac_scale",
        "trail_visibility",
        "nps/nonmotorizeduse",
        "piste/difficulty"
      ],
      "geometry": [
        "point"
      ],
      "matchScore": 10,
      "isDefault": false,
      "tags": {
        "piste:type": "sleigh"
      },
      "terms": [
        "dog sled trail",
        "dog sled",
        "mushing trail",
        "mushing",
        "winter track",
        "trail",
        "track"
      ],
      "searchable": true
    },
    "winter recreation/downing skiing/backcountry ski trail": {
      "name": "Backcountry Ski Trail",
      "fields": [
        "name",
        "nps/unitcode",
        "operator",
        "tracktype",
        "surface",
        "width",
        "incline",
        "mtb/scale",
        "mtb/scale/uphill",
        "mtb/scale/imba",
        "sac_scale",
        "trail_visibility",
        "nps/nonmotorizeduse",
        "piste/difficulty"
      ],
      "geometry": [
        "point"
      ],
      "matchScore": 10,
      "isDefault": false,
      "tags": {
        "piste:type": "skitour"
      },
      "terms": [
        "backcountry ski trail",
        "backcountry ski",
        "backcountry",
        "trail",
        "track",
        "structure"
      ],
      "searchable": true
    },
    "winter recreation/downing skiing/downhill ski trail": {
      "name": "Downhill Ski Trail",
      "fields": [
        "name",
        "nps/unitcode",
        "operator",
        "tracktype",
        "surface",
        "width",
        "incline",
        "mtb/scale",
        "mtb/scale/uphill",
        "mtb/scale/imba",
        "sac_scale",
        "trail_visibility",
        "nps/nonmotorizeduse",
        "piste/difficulty"
      ],
      "geometry": [
        "point"
      ],
      "icon": "downhill-skiing-black",
      "maki": "npmap-symbol-library",
      "matchScore": 10,
      "isDefault": false,
      "tags": {
        "piste:type": "downhill"
      },
      "terms": [
        "downhill ski trail",
        "downhill ski",
        "downhill",
        "alpine ski trail",
        "alpine ski",
        "alpine",
        "trail",
        "track"
      ],
      "searchable": true
    },
    "winter recreation/ice skating/ice rink": {
      "name": "Ice Rink",
      "fields": [
        "name",
        "nps/unitcode",
        "operator",
        "address",
        "opening_hours",
        "seasonal",
        "sport"
      ],
      "geometry": [
        "point"
      ],
      "icon": "ice-skating-black",
      "maki": "npmap-symbol-library",
      "matchScore": 10,
      "isDefault": false,
      "tags": {
        "leisure": "ice_rink"
      },
      "terms": [
        "ice rink",
        "hockey",
        "skating",
        "curling"
      ],
      "searchable": true
    },
    "winter recreation/sled/sledding": {
      "name": "Sledding",
      "fields": [
        "name",
        "nps/unitcode",
        "operator",
        "tracktype",
        "surface",
        "width",
        "incline",
        "mtb/scale",
        "mtb/scale/uphill",
        "mtb/scale/imba",
        "sac_scale",
        "trail_visibility",
        "nps/nonmotorizeduse",
        "piste/difficulty"
      ],
      "geometry": [
        "point"
      ],
      "icon": "sledding-black",
      "maki": "npmap-symbol-library",
      "matchScore": 10,
      "isDefault": false,
      "tags": {
        "piste:type": "sled"
      },
      "terms": [
        "sledding",
        "sled"
      ],
      "searchable": true
    },
    "winter recreation/snowmobile/snowmobile trail": {
      "name": "Snowmobile Trail",
      "fields": [
        "name",
        "nps/unitcode",
        "operator",
        "tracktype",
        "surface",
        "width",
        "incline",
        "mtb/scale",
        "mtb/scale/uphill",
        "mtb/scale/imba",
        "sac_scale",
        "trail_visibility",
        "nps/trailuse",
        "nps/structure"
      ],
      "geometry": [
        "point"
      ],
      "icon": "snowmobile-trail-black",
      "maki": "npmap-symbol-library",
      "matchScore": 10,
      "isDefault": false,
      "tags": {
        "highway": "track",
        "snowmobile": "yes"
      },
      "terms": [
        "snowmobile trail",
        "snowmobile",
        "snow machine",
        "trail",
        "track"
      ],
      "searchable": true
    },
    "winter recreation/snowshoe/snowshoe trail": {
      "name": "Snowshoe Trail",
      "fields": [
        "name",
        "nps/unitcode",
        "operator",
        "tracktype",
        "surface",
        "width",
        "incline",
        "mtb/scale",
        "mtb/scale/uphill",
        "mtb/scale/imba",
        "sac_scale",
        "trail_visibility",
        "nps/nonmotorizeduse",
        "piste/difficulty"
      ],
      "geometry": [
        "point"
      ],
      "matchScore": 10,
      "isDefault": false,
      "tags": {
        "piste:type": "hike"
      },
      "terms": [
        "snowshoe trail",
        "snowshoe",
        "trail",
        "track"
      ],
      "searchable": true
    }
  },
  "categories": {
    "category-point-building": {
      "geometry": "point",
      "name": "building",
      "members": [
        "building/historic/historic building",
        "building/education/school building",
        "building/agricultural/stable",
        "building/building/building",
        "building/building/building under construction",
        "building/agricultural/greenhouse",
        "building/building/bunker",
        "building/agricultural/barn",
        "building/building/cabin",
        "building/building/public building",
        "building/commercial/administrative office",
        "building/commercial/commercial building",
        "building/commercial/headquarters",
        "building/commercial/hospital building",
        "building/commercial/hotel building",
        "building/commercial/industrial building",
        "building/commercial/office",
        "building/commercial/retail building",
        "building/education/education center",
        "building/education/university building",
        "building/historic/historic cabin",
        "building/place of worship/cathedral",
        "building/place of worship/chapel",
        "building/place of worship/church",
        "building/primitive/hut",
        "building/residential/apartments",
        "building/residential/detached home",
        "building/residential/dormitory",
        "building/residential/house",
        "building/residential/lodge",
        "building/residential/lodging",
        "building/residential/residential building",
        "building/residential/row house",
        "building/residential/static mobile home",
        "building/shelter/weather shelter",
        "building/storage/garage",
        "building/storage/shed",
        "building/storage/warehouse"
      ]
    },
    "category-area-building": {
      "geometry": "area",
      "name": "building",
      "members": [
        "building/building/building footprint"
      ]
    },
    "category-point-land recreation": {
      "geometry": "point",
      "name": "land recreation",
      "members": [
        "land recreation/trail/motorized trail",
        "land recreation/trail/non-motorized trail"
      ]
    },
    "category-area-parking": {
      "geometry": "area",
      "name": "parking",
      "members": [
        "parking/parking/parking lot"
      ]
    },
    "category-line-road": {
      "geometry": "line",
      "name": "road",
      "members": [
        "road/highway/highway",
        "road/highway/highway link",
        "road/primary/primary road",
        "road/secondary/secondary road",
        "road/tertiary/tertiary road",
        "road/service/parking aisle",
        "road/service/service road"
      ]
    },
    "category-point-service": {
      "geometry": "point",
      "name": "service",
      "members": [
        "service/information/visitor center",
        "service/support/ranger station",
        "service/information/brochure box",
        "service/information/gateway sign",
        "service/information/information",
        "service/information/information board",
        "service/information/information map",
        "service/information/interpretive sign",
        "service/parking/parking lot"
      ]
    },
    "category-vertex-service": {
      "geometry": "vertex",
      "name": "service",
      "members": [
        "service/information/gateway sign",
        "service/information/interpretive sign",
        "service/parking/parking lot"
      ]
    },
    "category-line-trail": {
      "geometry": "line",
      "name": "trail",
      "members": [
        "trail/water/motorized trail",
        "trail/non-motorized/horseback riding",
        "trail/non-motorized/non-motorized trail",
        "trail/non-motorized/sidewalk"
      ]
    }
  },
  "defaults": {
    "point": [
      "service/information/visitor center",
      "service/support/ranger station",
      "category-point-service",
      "category-point-building",
      "category-point-land recreation"
    ],
    "area": [
      "building/building/building footprint",
      "parking/parking/parking lot"
    ],
    "line": [
      "category-line-road",
      "category-line-trail"
    ],
    "vertex": [
      "category-vertex-service"
    ]
  }
};
