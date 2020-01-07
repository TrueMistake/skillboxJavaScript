var a = prompt('Введите год начало отсчёта:', '');
var b = prompt('Введите год окончания отсчёта:', '');
if(a < b){
    for(a; a <= b; a++){
        console.log('Год '+ a + ' ' + leapYear(a));
    }
}else{
    alert('Год начало не может быть больше года окончания!!');
}

function leapYear(year)
{
    return (((a % 4 == 0) && (a % 100 !== 0)) || (a % 400 === 0));
}