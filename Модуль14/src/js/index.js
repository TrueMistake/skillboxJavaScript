'use strict';
import Counter from "./button.js";

const cnt = new Counter(0);

let btn = document.querySelector('.btn');
btn.addEventListener('click', (e) => {
    cnt.inctement();
    e.target.innerHTML = ('Число кликов ' + cnt.getCounter());
});
