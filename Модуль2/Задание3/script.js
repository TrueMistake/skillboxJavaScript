var result = 0;

do{
    var a = prompt('Введите число');
    if(!isNaN(a)){
        result += Number(a);
        console.log(result + ' Число');
    }

}while (a !== null);
alert(result);

