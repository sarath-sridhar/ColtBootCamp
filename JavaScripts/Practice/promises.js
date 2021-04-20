//Studies Promise
var cars = [
  { Model: "Punto", Warrenty: 3, Color: "blue" },
  { Model: "Baleno", Warrenty: 2, Color: "red" }
];

function displayCars() {
  setTimeout(()=>{
    cars.forEach(singleCar => {
      console.log(singleCar);
    });
  },3000);
}

function addCar(currentCar,mycallBack ) {

  setTimeout(()=>{
    cars.push(currentCar);
  },2000);
  mycallBack();
}
addCar({ Model: "City", Warrenty: 3, Color: "White" },displayCars);



