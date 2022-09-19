// Add console.log to check to see if our code is working.
console.log("working");

// // Create the map object with a center and zoom level.
// let map = L.map('mapid').setView([36.1733, -120.1794], 7);
// Change the center of the map to SFO and change zoom to 5
let map = L.map('mapid').setView([37.6213, -122.3790], 5);


// Coordinates for each point to be used in the line.
let line = [
  [33.9416, -118.4085],
  [37.6213, -122.3790],
  [40.7899, -111.9791],
  [47.4502, -122.3088]
];

// Create a polyline using the line coordinates and make the line red.
L.polyline(line, {
  // color: "red"
  // Change line color to yellow
  color: "yellow"
}).addTo(map);


// We create the tile layer (street view) that will be the background of our map.
// let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {

// Adding dark-mode to map 
// let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {

// Adding satellite-mode to map 
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/satellite-streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {

// let streets = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    
    // Greyed out after changing the url above
    // id: 'mapbox/streets-v11',
    // tileSize: 512,
    // zoomOffset: -1,
    accessToken: API_KEY
});

// Then we add our 'graymap' tile layer to the map.
streets.addTo(map);



// -----------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------


// // *** Notes: An alternative to using the setView() method is to modify each 
// // attribute in the map object using the curly braces notation as follows:

// // Create the map object with a center and zoom level.
// // let map = L.map("mapid", {
// //   center: [
// //     40.7, -94.5
// //   ],
// //   zoom: 4
// // });


// // Get data from cities.js
// let cityData = cities;


// // Loop through the cities array and create one marker for each city.
// cities.forEach(function(city) {
//   console.log(city)
//   // Add the marker locations to the map
//   L.marker(city.location).addTo(map);
// });

// // // Loop through the cities array and create one marker for each city.
// // cityData.forEach(function(city) {
// //   console.log(city)
// //   // // Add the marker locations to the map
// //   // L.marker(city.location)
// //   // Change the marker for each city to a circle that has a radius equivalent to the city's population 
// //   L.circleMarker(city.location, {
// //     radius: city.population/100000
// //   })
// //     .bindPopup("<h2>" + city.city + ", " + city.state + "</h2> <hr> <h3>Population " + city.population.toLocaleString() + "</h3>")
// //   .addTo(map);
// // });

// // Skill Drill
// // Edit the logic.js file to create an orange circle popup marker for each city, with a lineweight of 4, a radius 
// // where the population number is decreased by 200,000,  that's on a dark map. When you click on the circle, the 
// // popup should display the city, state, and the population formatted with a thousands separator.

// // // Loop through the cities array and create one marker for each city.
// // cityData.forEach(function(city) {
// //   console.log(city)
// //   // // Add the marker locations to the map
// //   // L.marker(city.location)
// //   // Change the marker for each city to a circle that has a radius equivalent to the city's population 
// //   L.circleMarker(city.location, {
// //     radius: (city.population/200000),
// //     color: "orange"
// //   })
// //     .bindPopup("<h2>" + city.city + ", " + city.state + "</h2> <hr> <h3>Population " + city.population.toLocaleString() + "</h3>")
// //   .addTo(map);
// // });


// // We create the tile layer that will be the background of our map.
// // let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {

// // Adding dark-mode to map 
// let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {

// // let streets = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
//     attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
//     maxZoom: 18,
    
//     // Greyed out after changing the url above
//     // id: 'mapbox/streets-v11',
//     // tileSize: 512,
//     // zoomOffset: -1,
//     accessToken: API_KEY
// });

// // Then we add our 'graymap' tile layer to the map.
// streets.addTo(map);