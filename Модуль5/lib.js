window.lib = (function () {
    var TRY_COUNT = 2;
    var getRandomInt = function(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    };
    var random = getRandomInt(1,1000);
    var checkCount = function (e) {
        if (TRY_COUNT > 0) {
            alert(e + ' Осталось попыток: ' + TRY_COUNT);
            return TRY_COUNT--;
        } else if (TRY_COUNT <= 0) {
            return confirmNewGame();
        }
    };

    var start = function() {
        var userAnswer = prompt('Введи число от 1 до 1000');
        if (userAnswer !== null) {
            if (isNaN(parseInt(userAnswer))) {
                alert('Введи число от 1 до 1000!');
                start();
            } else if (userAnswer < random) {
                checkCount('Больше!');
                start();
            } else if (userAnswer > random) {
                checkCount('Меньше!');
                start();
            } else {
                alert('Правильно!');
            }
        }
    };



    function confirmNewGame() {
        var b = confirm('Сыграть ещё?');
        if (b) {
            TRY_COUNT = 10;
            random = getRandomInt(1,1000);
            start();
        } else {
            alert('Спасибо за игру!');
            return false;
        }
    }

    return {
        start
    };

})();