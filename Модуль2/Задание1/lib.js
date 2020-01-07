function game() {
    var count = 0;
    var a = prompt('Введите число от 1 до 1000');

    if (parseInt(a)) {
        if (a > rand) {
            alert('Меньше!');
            game();
        } else if (a < rand) {
            alert('Больше!');
            game();
        } else {
            alert('Правильно!');
            var b = prompt('Сыграть ещё?');
            if (b !== null) {
                rand = getRandomInt(1,10);
                game();
            }
        }
    } else {
        alert('Введи число!');
    }
    if (count > 10) {
        prompt('Начать игру заново?');
    }
    return function start() {
        console.log(count);
        return count++;
    }
}
var rand = getRandomInt(1,1000);

function getRandomInt(min, max) {
    console.log(Math.floor(Math.random() * (max - min + 1)) + min);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
