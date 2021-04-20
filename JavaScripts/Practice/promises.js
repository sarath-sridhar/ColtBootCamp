//Studies Promises
var cars = [
  { Model: "Punto", Warrenty: 3, Color: "blue" },
  { Model: "Baleno", Warrenty: 2, Color: "red" }
];

function displayCars() {
  Cars.forEach(singleCar => {
    console.log(singleCar);
  });
}

function addCar(currentCar, myCallback) {
  cars.push(currentCar);
  myCallback();
}
addCar({ Model: "City", Warrenty: 3, Color: "White" }, displayCars);
