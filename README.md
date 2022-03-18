# Mapping_Earthquakes
In this project, we use data driven documents (d3), Javascript, HTML and bootstrap to traverse and retrieve geographical features and non-spatial attributes from  GeoJSON data. We also use Javascript's Leaflet library along with Mapbox API to create visualizations of earthquake data from the US Geological Survey.

## Project Overview
We created an earthquake map with three viewing options for the map and options to display additional data - tectonic plates and major earthquakes. In addition to showing the location and magnitudes of reported earthquakes in the past seven days, the map shows earthquake data in relation to the tectonic plates' location on the earth and it displays all earthquakes with a magnitude greater than 4.5. There are options (layers) to view the map as streets, satellite, or navigation night. With knowledge of Javascript, Leaflet.js and geoJSON data, the javascript code is written using d3.json(). The map options are added as tile layers, data is styled on a leaflet map and data is added with overlay and a layerGroup class.

## Result
- check index.html in the Earthquake_Challenge folder of the repository
- screenshot of the final page below
	- note: there are three options for viewing the map and you can choose to display or not display the data

![Screenshot of Map](https://github.com/kmaluccio/Mapping_Earthquakes/blob/main/Earthquake_Challenge/earthquakeMap.png)
