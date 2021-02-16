"use strict";

//Output of the Date in the footer
const dateTimeFormat = new Intl.DateTimeFormat('de', {
    day: '2-digit', month: '2-digit', year: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit'
})
const setDateAndTime = element => {
    let date = new Date()
    let [{value: day}, , {value: month}, , {value: year}, , {value: hour}, , {value: minute}, , {value: second}] = dateTimeFormat.formatToParts(date)
    element.textContent = `${day}/${month}/${year} ${hour}:${minute}:${second}`;
}
const timer = document.querySelector('.time');
setDateAndTime(timer);
setInterval(() => {
    (setDateAndTime(timer))
}, 1000);
