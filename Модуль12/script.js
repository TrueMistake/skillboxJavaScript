var left = 0;

$('.ball').on('click', function () {
    var height = $('.football').outerHeight(false);
    var top = getRandomInt(0,100);
    (left == 100)? left=0 : left=100;
    $(this).animate({
        left: left + '%',
        top: top + '%',
        marginLeft: -left + 'px'
    }, 1000, "linear",function () {
        if ((top >= 40) && ( top <= 53)) {
            alert('ГОЛ!');
        }
    });

});

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}