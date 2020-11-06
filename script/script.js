'use strict';

const input = document.querySelector('.input'),
userText = document.querySelector('.user-text');

const changeP = () => {
  userText.textContent = input.value;
};

const throttle = (f, t) => {
  return function (args) {
    let previousCall = this.lastCall;
    this.lastCall = Date.now();
    if (previousCall === undefined || (this.lastCall - previousCall) > t) { 
      f(args);
    }
  };
};

input.addEventListener('input',throttle(changeP,300));



