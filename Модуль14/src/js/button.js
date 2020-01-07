'use strict';

import '../css/style.css';

export default class Counter {

    constructor(n) {
        this.counter = n;
    }
    getCounter() {
        return this.counter;
    }

    inctement() {
        this.counter++;
    }
}