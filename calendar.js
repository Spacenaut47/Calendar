const date = new Date()
date.setDate(1)
console.log(date.getDay());
const monthDays = document.querySelector('.days')
const lastDay = new Date(date.getFullYear(),date.getMonth()+1,0).getDate()
const firstDayIndex = date.getDate()

console.log(lastDay);
const month = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",    
]

document.querySelector('.date h1').innerHTML = month[date.getMonth()]
document.querySelector('.date p').innerHTML = date.toDateString()

let days = ""

for(let i = 1;i <= lastDay;i++){
    days += `<div>${i}</div>`
    monthDays.innerHTML = days
}

for(let x = firstDayIndex; i > 0;x--)[
    
]