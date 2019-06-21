//console.log("Hello World!!!!!!");

function sendCars(day, ...carIDs){
    carIDs.forEach(id => console.log(id));
}

sendCars('Monday', 100, 200, 300);
