// Build Map
mapboxgl.accessToken = 'pk.eyJ1Ijoic2FyYXRocyIsImEiOiJja2dxcmpua2owODVrMnFxdzJqazk0Y3FqIn0.3zP_RXiZ4FkwyDNXmlccqw';

// Add Map
var map = new mapboxgl.Map({
    container: 'map', // container id
    style: 'mapbox://styles/mapbox/streets-v11', // style URL
    center: [80.27, 13.09], // starting position [lng, lat]
    zoom: 9 // starting zoom
});

// Directions
var directionControls = {
    inputs: true, // Default -> true
    instructions: true,  // Default -> true
    profileSwitcher: true  // Default -> true
}

var directions = new MapboxDirections({
    accessToken: mapboxgl.accessToken,
    profile: 'mapbox/walking',
    steps: 'false',
    language: 'ar',
    placeholderOrigin: "Choose Starting Point",
    placeholderDestination: "Choose Destination",
    controls: directionControls
});

directions.on('route', function (e) {
    console.log(e.route); // Logs the current route shown in the interface.
});

map.on('load', function () {
    map.addControl(directions, 'top-left'); // Add Direction Control
    directions.setOrigin([80.21838068962099, 13.044492753397355]); // [lng, lat]
    directions.setDestination([80.22474288940431, 13.041696833111496]); // [lng, lat]
});

// Reference https://blog.mapbox.com/mapbox-gl-directions-plugin-320694594eae