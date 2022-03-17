// Create the map object with a center and zoom level
// let map = L.map('mapid').setView([30, 30], 2);

// Create multiple tile layers that will be the background of our map
let light = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});
let dark = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});
let dayNav = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/navigation-day-v1/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});
let nightNav = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/navigation-night-v1/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

// Create a base layer that holds both maps
let baseMaps = {
    Day: dayNav,
    Night: nightNav
};
// Then add our tile layer to the map
// streets.addTo(map);

// Create map object with center and zoom level and default layer
let map = L.map('mapid', {
    center: [44.0, -80.0],
    zoom: 2,
    layers: [nightNav]
});

// Pass our map layers into our layers control and add the layers control to the map
L.control.layers(baseMaps).addTo(map);

// Create our map style
var mapStyle = {
    color: "lightyellow",
    weight: 2
  };

// Accessing the airport GeoJSON URL
let torontoData = "https://raw.githubusercontent.com/kmaluccio/Mapping_Earthquakes/main/torontoRoutes.json";

// Grab geojson data and add to our map
d3.json(torontoData).then(function(data) {
    console.log(data);
    // Creating a GeoJSON layer with the retrieved data
    L.geoJSON(data, {
        onEachFeature: function(feature, layer) {
            layer.bindPopup("<h2>" + "Airline: " + feature.properties.src + "</h2>" + "___________________________________" + "<h3>" + "Destination: " + feature.properties.dst + "</h3>");
        },
        style: mapStyle}
    ).addTo(map);
});