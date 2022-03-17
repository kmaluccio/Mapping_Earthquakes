// Create the map object with a center and zoom level
// let map = L.map('mapid').setView([30, 30], 2);

// Create multiple tile layers that will be the background of our map
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});
let satelliteStreets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/satellite-streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});


// Create a base layer that holds both maps
let baseMaps = {
    "Street": streets,
    "Satellite Street": satelliteStreets
};
// Then add our tile layer to the map
// streets.addTo(map);

// Create map object with center and zoom level and default layer
let map = L.map('mapid', {
    center: [43.7, -79.3],
    zoom: 11,
    layers: [streets]
});

// Pass our map layers into our layers control and add the layers control to the map
L.control.layers(baseMaps).addTo(map);

// Accessing the toronto neighborhoods GeoJSON URL
let torontoHoods = "https://raw.githubusercontent.com/kmaluccio/Mapping_Earthquakes/main/torontoNeighborhoods.json";

// Grab geojson data and add to our map
d3.json(torontoHoods).then(function(data) {
    console.log(data);
    // Creating a GeoJSON layer with the retrieved data
    L.geoJSON(data
        ,{onEachFeature: function(feature, layer) {
            layer.bindPopup("<h2>" + "Neighborhood: " + feature.properties.AREA_NAME + "</h2>");
        },
        style: {
            color: "blue",
            fillColor: "yellow",
            weight: "1"
            }}
    ).addTo(map);
});