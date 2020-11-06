'use strict';

const btnStart = document.querySelector('.start'),
btnStop = document.querySelector('.stop'),
btnReset = document.querySelector('.reset'),
train = document.querySelector('.img'),
buttons = document.querySelector('.buttons');
console.log('buttons: ', buttons);

let count =0;
let trainAnimate;

let trainInterval;
const step = () => {
  trainAnimate = requestAnimationFrame(step);
  count++;
  train.style.left = count*2 + 'px';
  if(count === 650){
    cancelAnimationFrame(trainAnimate);
  }
};


buttons.addEventListener('click', (e) => {
  count++;
  let target = e.target;
  if(target.classList.contains('start')){
    trainAnimate = requestAnimationFrame(step);
    btnStart.classList.remove('start');
    btnStart.textContent = 'Stop'; 
  }else if (target.classList.contains('stop')){
    cancelAnimationFrame(trainAnimate);
    btnStart.classList.add('start');
    btnStart.textContent = 'Start'; 
  }else if (target.classList.contains('reset')){
     cancelAnimationFrame(trainAnimate);
   if(count>0){
     train.style.left = 0;
     count = 0;
     btnStart.classList.add('start');
    btnStart.textContent = 'Start'; 
   }
  }
});

