
'use strict';
let good = document.querySelector('.good'),
    data = document.querySelector('.data'),
    clock = document.querySelector('.clock'),
    newYear = document.querySelector('.new-year');

let arr = ['Понедельник','Вторник','Среда','Четверг','Пятница','Суббота','Воскресенье'];


let goodDay = function () {
  let a = new Date().getHours();
  let b = '';
  if (a >= 5 && a<11){
    b= 'Доброе утро!';
  }else if (a >= 11 && a < 16){
    b = 'Добрый день!';
  }else if (a >= 16 && a < 23){
    b = 'Добрый вечер!';
  }else if (a >= 0 && a < 5){
    b = 'Доброй ночи!';
  }
  return b ;

};


let getWeekDay = function (date) {
    date = new Date();
    let days = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
    let toDay = date.getDay();
    
    return days[toDay];
    
};


let nTime = function() {
    let t=new Date();
    let h=("0" + t.getHours()).slice(-2);
    let m=("0" + t.getMinutes()).slice(-2);
    let s=("0" + t.getSeconds()).slice(-2);
    let resultTime=h + ":" +m + ":" +s;
    return resultTime;
};

let newYearReport = function () {
  let newYear = new Date('01 january 2021');
  let dayNow = new Date();
  let timeRemaining = (newYear - dayNow) / 1000;
  let dayNewYear = Math.floor(timeRemaining / 60 / 60 / 24);
  return dayNewYear;
};



let updateClock = function () {
 let AmPm = new Date().getHours();
  let t;
  if (AmPm >= 0 && AmPm <= 12){
    t = 'AM';
  }else {
    t = 'PM';
  }
  good.textContent = goodDay();
  data.textContent = 'Сегодня: '+ getWeekDay();
  clock.textContent = 'Текущее время: ' +  nTime() + ` ${t}`;
  newYear.textContent = `До нового года осталось  ${newYearReport()} дней`;
};
setInterval(updateClock,1000);

