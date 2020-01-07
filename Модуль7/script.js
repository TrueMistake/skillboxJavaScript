'use strict';
/*
function Vehicle(name,year,color) {
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
*/



function Vehicle(name,year,color) {
    this.name = name;
    this.year = year;
    this.color = color;
    this.motor = false;
}

Vehicle.prototype.changeName = function (e) {
    console.log(this.name = e);
};
Vehicle.prototype.info = function () {
    alert('Имя: ' + this.name + ' Год: ' + this.year + ' Цвет: ' + this.color);
};

var lada = new Vehicle('Lada',1999,'red');
var aerobus = new Vehicle('aerobus', 2008, 'white');
var ships = new Vehicle('Hyundai Heavy Industries', 2014, 'blue');
