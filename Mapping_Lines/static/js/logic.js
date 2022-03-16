// Create the map object with a center and zoom level
let map = L.map('mapid').setView([40.6413, -75.3790], 4);
// Alternative way to create the map object, useful when adding multiple tile layers or a background image of our map
// let map = L.map("mapid", {
//     center: [ 36.1733, -120.1794],
//     zoom: 7 });

// Coordinates for each point to be used in the line, go from SFO to AUS to YYZ to JFK to MIA airports
let line = [
    [37.6213, -122.3790],
    [30.1975, -97.6664],
    [43.6777, -79.6248],
    [40.6413, -73.78097],
    [25.7959, -80.2871]
];

// Create a polyline using the line coordinates and make the line yellow
L.polyline(line, {
    color: "blue",
    weight: '4',
    dashArray: '10, 10',
    dashOffset: '20'
}).addTo(map);

// We create the tile layer that will be the background of our map
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
}).setOpacity(0.4);
// Then add our light map tile layer to the map
streets.addTo(map);