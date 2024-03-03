// const clock  = document.querySelector('.timer')
const clock = document.getElementById('timer')

setInterval(function(){
    let date = new Date();
    clock.textContent = date.toLocaleTimeString();
},500)


