/* Задание 1 */
function start() {
    var code = prompt('Введите кусок JavaScript-кода');
    'use strict';
    eval(code);
}

try{
    start();
}
catch(ex){
    alert('Ошибка ввода: ' + ex);
}


/* Задание 2 */
function filterByType() {
    var mass = [];
    for (var i = 1; i < arguments.length; i++) {
       if (arguments[0] == (typeof arguments[i])) {
           mass.push(arguments[i]);
       }
    }
    console.log(mass);
}

filterByType('string', 1,34508, 'world', 'привет', 123.13233, false, undefined, 'profit');