import _ from 'lodash';
import './style.scss';

var targetDate = new Date("Sep 1, 2017 00:00:00").getTime();

var x = setInterval(function () {
    var currentDate = new Date().getTime();

    var remainingTime = targetDate - currentDate;

    var days = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
    var hours = Math.floor((remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);

    document.getElementById('timer-days').innerHTML = days;
    document.getElementById('timer-hours').innerHTML = hours;
    document.getElementById('timer-minutes').innerHTML = minutes;
    document.getElementById('timer-seconds').innerHTML = seconds;

}, 1000);