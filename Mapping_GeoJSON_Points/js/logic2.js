// Add console.log to check to see if our code is working.
console.log("working");

// Change the geographical center of the map to the geographical center of the Earth
let map = L.map('mapid').setView([30, 30], 2);

// We create the tile layer that will be the background of our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {

// Adding dark-mode to map 
// let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {

    attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});
// Then we add our 'streets' tile layer to the map.
streets.addTo(map);

// Accessing the airport GeoJSON URL
let airportData = "https://raw.githubusercontent.com/mrmarken/Mapping_Earthquakes/main/majorAirports.json";

// Grabbing our GeoJSON data.
d3.json(airportData).then(function(data) {
  console.log(data);

  // Creating a GeoJSON layer with the retrieved data.
L.geoJSON(data, {
  onEachFeature: function(feature,layer){
    console.log(layer);
    layer.bindPopup("<h3> Airport Code: " + feature.properties.faa + "<hr><h4> Airport Name: "+ feature.properties.name + "</h4>");
      }
}).addTo(map);
});
