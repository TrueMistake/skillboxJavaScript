'use strict';
/*function Vehicle(name,year,color) {
    this.name = name;
    this.year = year;
    this.color = color;
    this.motor = false;
    this.info = function () {
        alert('Имя: ' + this.name + ' Год: ' + this.year + ' Цвет: ' + this.color);
    }
}

function Car(name,year,color) {
    Vehicle.apply(this, arguments);
    this.wheel = 4;
    this.changeName = function (e) {
        this.name = e;
    }
}
function Airplane(name,year,color) {
    Vehicle.apply(this, arguments);
    this.wing = 2;
}
function Ship(name,year,color) {
    Vehicle.apply(this, arguments);
    this.width = 330;
}

var lada = new Car('Lada',1999,'red');
var aerobus = new Airplane('aerobus', 2008, 'white');
var ships = new Ship('Hyundai Heavy Industries', 2014, 'blue');


function filterByType() {
  var args = Array.prototype.slice.call(arguments);
  var filters = args.filter(function (e) {
    return args[0] === typeof e;
  });
  console.log(filters);
}
filterByType('string', 1,34508, 'world', 'привет', 123.13233, false, undefined, 'profit');
*/

const filterByTypeES6 = (a,...params) => {
    for (var key in params) {
        if (a === typeof params[key]) {
            console.log(params[key]);
        }
    }
}
filterByTypeES6('string', 1,34508, 'world', 'привет', 123.13233, false, undefined, 'profit');



class VehicleES6 {
    constructor(name,year,color) {
        this.name = name;
        this.year = year;
        this.color = color;
        this.motor = false;
    }
    info = function () {
        console.log('Имя: ' + this.name + ' Год: ' + this.year + ' Цвет: ' + this.color);
    }
}

class CarES6 extends VehicleES6{
    constructor(name,year,color){
        super(name,year,color);
        this.wheel = 4;
    }
}

class AirplaneES6 extends VehicleES6{
    constructor(name,year,color){
        super(name,year,color);
        this.wing = 2;
    }
}

class ShipES6 extends VehicleES6{
    constructor(name,year,color){
        super(name,year,color);
        this.width = 330;
    }
}


const lada = new CarES6('Lada',1999,'red');
const aerobus = new AirplaneES6('aerobus', 2008, 'white');
const ships = new ShipES6('Hyundai Heavy Industries', 2014, 'blue');

console.log(lada.wheel);
aerobus.info();
ships.info();
