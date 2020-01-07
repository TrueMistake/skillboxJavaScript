var myDays = ["воскресенье", "понедельник","вторник","среда","четверг","пПятница","суббота"];
var myMonth = ["Января", "Февраля","Марта","Апреля","Мая","Июня","Июля","Августа","Сентября","Октября","Ноября","Декабря"];
var minutEnding = ["минута", "минут", "минуты"];
var secondEnding = ["секунда", "секунд", "секунды"];

function viewDate(){
    var now = new Date();
    var hour = getHourEnding(now.getHours());
    var minutes = endingWords(minutEnding, now.getMinutes());
    var seconds = endingWords(secondEnding, now.getSeconds());

    
    function endingWords(array,time) {
        var res;
        res = time % 10;
        if ((res >= 5 && res <= 9) || (res === 0) || (res >=11 && res <= 14)) {
            return time + ' ' + array[1];
        } else if (res === 1) {
            return time + ' ' + array[0];
        } else {
            return time + ' ' + array[2];
        }
    }


    function getHourEnding(h){
        var e = h % 10;
        var str;

        if ((e >= 5 && e <= 20) || (e === 0)) {
            str = 'ов';
            return h + " час" + str;
        } else if (e == 1) {
            str = '';
            return h + " час" + str;
        } else
            str = 'а';
            return h + " час" + str;
        }



    console.log("Сегодня " + now.getDate() + " " + myMonth[now.getMonth()] + " " + now.getFullYear() + " года," + " " + myDays[now.getDay()] + " " + hour + " " + minutes + " " + seconds);
}
setInterval(function() {
    viewDate();
}, 1000);
