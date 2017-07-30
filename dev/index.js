import _ from 'lodash';
import './style.scss';

var targetDate = new Date("Sep 1, 2017 00:00:00").getTime();

function component() {
    var element = document.createElement('div');

    // Lodash, currently included via a script, is required for this line to work
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    element.classList.add('hello');

    return element;
}

document.body.appendChild(component());


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