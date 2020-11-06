'use strict';

const input = document.querySelector('.input'),
userText = document.querySelector('.user-text');

const changeP = () => {
  userText.textContent = input.value;
};

// const throttle = (f, t) => {
//   return function (args) {
//     let previousCall = this.lastCall;
//     this.lastCall = Date.now();
//     if (previousCall === undefined || (this.lastCall - previousCall) > t) { 
//       f(args);
//     }
//   };
// };

const debounce = (f, t) => {
  return function (args) {
    let previousCall = this.lastCall;
    this.lastCall = Date.now();
    if (previousCall && ((this.lastCall - previousCall) <= t)) {
      clearTimeout(this.lastCallTimer);
    }
    this.lastCallTimer = setTimeout(() => f(args), t);
  };
};


input.addEventListener('input',debounce(changeP,300));



