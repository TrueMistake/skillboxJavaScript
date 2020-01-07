var editText = document.querySelector('.editor-on');
var save = document.querySelector('.save');
var cancel = document.querySelector('.cancel');
var text = document.querySelector('.editor-text');

editText.addEventListener('click', function () {
    text.setAttribute('contenteditable','true');
    save.disabled = false;
    cancel.disabled = false;
    editText.disabled = true;
});

save.addEventListener('click', function () {
    localStorage.setItem('myKey', text.textContent);
    save.disabled = true;
    cancel.disabled = true;
    editText.disabled = false;
});

cancel.addEventListener('click', function () {
    text.textContent = localStorage.getItem('myKey');
    text.setAttribute('contenteditable','false');
    save.disabled = true;
    cancel.disabled = true;
    editText.disabled = false;
});
window.onload = function() {
    if (localStorage.getItem('myKey')) {
        text.textContent = localStorage.getItem('myKey');
    }
};


