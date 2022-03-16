// Create the map object with a center and zoom level
let map = L.map('mapid').setView([37.5, -122.5], 10);

// Add GeoJSON data
let sanFranAirport = {
    "type": "FeatureCollection", "features":[{
        "type": "Feature",
        "properties":{
            "id": "3469",
            "name":"San Francisco International Airport",
            "city": "San Francisco",
            "state": "CA",
            "country": "United States",
            "faa": "SFO",
            "icao": "KSFO",
            "alt": "13",
            "tz-offset":"-8",
            "dst":"A",
            "tz": "America/Los_Angeles"},
            "geometry":{
                "type":"Point",
                "coordinates":[-122.375,37.61899948120117]}}
        ]};

// Grab geojson data and add to our map
L.geoJSON(sanFranAirport, {
    onEachFeature: function(feature, layer) {
        console.log(layer);
        layer.bindPopup("<h2>" + "Airport code: " + feature.properties.faa + "</h2>" + "______________________________________________" + "<h3>" + "Airport name: " + feature.properties.name + "</h3>");
    }
    // We turn each feature into a marker on the map
    // pointToLayer: function(feature, latlng) {
    //     console.log(feature);
    //     return L.marker(latlng).bindPopup("<h2>" + feature.properties.name + "</h2>" +"___________________________________________" + "<h3>" + feature.properties.city + ", " + feature.properties.state + ", " + feature.properties.country + "</h3>");
    // }
}).addTo(map);

// Create the tile layer that will be the background of our map
let outdoormap = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/outdoors-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});
// Then add our tile layer to the map
outdoormap.addTo(map);