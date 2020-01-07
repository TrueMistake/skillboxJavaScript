window.onload = function() {
    // Назначаем обработчик события load
    var btn = document.querySelector('.btn');
    var selectStart = document.querySelector('#start');
    var selectEnd = document.querySelector('#end');
    var inputStart = document.querySelector('.input-start');
    var inputEnd = document.querySelector('.input-end');

    btn.addEventListener('click', function () {

        // Создаем объект XMLHttpRequest, при помощи которого будем отправлять запрос
        var req = new XMLHttpRequest();

        // Сохраняем ключ API, полученный со страницы https://tech.yandex.ru/keys/get/?service=trnsl
        // (с примером ниже работать не будет, нужно получить и вставить свой!)
        var API_KEY = 'trnsl.1.1.20190225T091515Z.06bde7bd52a8c1a7.0749f827a8a0474bf52a18b3b47f827f339c781a';

        // Сохраняем адрес API
        var url = 'https://translate.yandex.net/api/v1.5/tr.json/translate';
        // Формируем полный адрес запроса:
        url += '?key=' + API_KEY; // добавляем к запросу ключ API

        url += '&text='+inputStart.value; // текст для перевода
        url += '&lang='+changeSelect(selectStart)+'-'+changeSelect(selectEnd); // направление перевода: с русского на английский
        // url += '&lang=ru-en'; // направление перевода: с русского на английский
        console.log(url);
        // Таким образом формируется строка вида:
        // https://translate.yandex.net/api/v1.5/tr.json/translate?key=example_api_key&text=кролики&lang=ru-en

        var translate = document.querySelector('.translate');

        req.addEventListener('load', function () {
            console.log(req); // отображаем в консоли текст ответа сервера
            console.log(req.response); // отображаем в консоли текст ответа сервера
            var response = JSON.parse(req.response); // парсим его из JSON-строки в JavaScript-объект

            // Проверяем статус-код, который прислал сервер
            // 200 — это ОК, остальные — ошибка или что-то другое
            if (response.code !== 200) {
                translate.innerHTML = 'Произошла ошибка при получении ответа от сервера:\n\n' + response.message;
                return;
            }

            // Проверяем, найден ли перевод для данного слова
            if (response.text.length === 0) {
                translate.innerHTML = 'К сожалению, перевод для данного слова не найден';
                return;
            }

            // Если все в порядке, то отображаем перевод на странице
            inputEnd.value = response.text; // вставляем его на страницу
        });


        // Обработчик готов, можно отправлять запрос
        // Открываем соединение и отправляем
        req.open('get', url);
        req.send();

    });

};
function changeSelect(e) {
    var selind = document.querySelector('#' + e.id).options.selectedIndex;
    var val = document.querySelector('#' + e.id).options[selind].value;
    console.log('Значение селекта End '+val);
    return val;
}