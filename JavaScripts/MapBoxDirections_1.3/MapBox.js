mapboxgl.accessToken =
  "pk.eyJ1Ijoic2FyYXRocyIsImEiOiJja2dxcmpua2owODVrMnFxdzJqazk0Y3FqIn0.3zP_RXiZ4FkwyDNXmlccqw";

// Map
var map = new mapboxgl.Map({
  container: "map", // container id
  style: "mapbox://styles/mapbox/streets-v11", // style URL
  center: [80.27, 13.09], // starting position [lng, lat]
  zoom: 9 // starting zoom
});

map.on("load", function() {
  addDirections(map);
  addClientMarker(map);
  addDCMarkers(map);
});

function addDCMarkers(map) {
  // Diagnostic Center
  var vijayaHospitalMarker = new mapboxgl.Marker();
  vijayaHospitalMarker.setLngLat([80.20829, 13.04958]);

  var pallavaHospitalMarker = new mapboxgl.Marker();
  pallavaHospitalMarker.setLngLat([80.21271, 13.04181]);

  vijayaHospitalMarker.addTo(map);
  pallavaHospitalMarker.addTo(map);

  return map;
}

function addClientMarker(map) {
  //  Client Location (moveable Marker)
  var clientMarker = new mapboxgl.Marker({
    draggable: true,
    color: "red"
  });
  clientMarker.setLngLat([80.21838068962099, 13.044492753397355]);

  //Movable Marker Event
  clientMarker.on("dragend", function() {
    console.log("Movable marker location " + clientMarker.getLngLat());
  });

  clientMarker.addTo(map);

  return map;
}

function addDirections(map) {
  // Direction Controls
  var directionControls = {
    inputs: true, // Default -> true
    instructions: true, // Default -> true
    profileSwitcher: true // Default -> true
  };

  // Direction Default configuration
  var directions = new MapboxDirections({
    accessToken: mapboxgl.accessToken,
    profile: "mapbox/walking",
    steps: "false",
    language: "ar",
    placeholderOrigin: "Choose Starting Point",
    placeholderDestination: "Choose Destination",
    controls: directionControls
  });

  map.addControl(directions, "top-left"); // Add Direction Control
  directions.setOrigin([80.21838068962099, 13.044492753397355]); // [lng, lat]
  directions.setDestination([80.21285, 13.04204]); // [lng, lat]

  return map;
}
