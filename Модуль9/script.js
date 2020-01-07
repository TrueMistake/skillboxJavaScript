window.onload = function (ev) {
    var input = document.querySelector('.create-input');
    var btn = document.querySelector('.create-btn');
    var list = document.querySelector('.list');

    btn.addEventListener('click', function () {
        if (input.value !== '') {
            var li = document.createElement('li');
            li.innerHTML = input.value;
            li.classList.add('li');
            li.setAttribute('onclick', 'profit(this)');
            list.appendChild(li);
            input.value = '';
        } else {
            alert('заполнить поле');
        }
    });

}
function profit(e) {
    e.classList.toggle('profit');
}