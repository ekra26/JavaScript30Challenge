//variables to link to html
const secondHand = document.querySelector('.second')
const minuteHand = document.querySelector('.minute')
const hourHand = document.querySelector('.hour')

//function that moves our clock hands//
function setDate() {
    const now = new Date();
    
    //seconds//
    const seconds = now.getSeconds();
    const secondsDegrees = ((seconds/60) * 360)+ 90; //converts seconds into degrees//
    secondHand.style.transform =`rotate(${secondsDegrees}deg)`;
    
    //minutes//
    const minutes = now.getMinutes();
    const minutesDegrees = ((minutes/60) * 360)+ 90; //converts minutes into degrees//
    minuteHand.style.transform =`rotate(${minutesDegrees}deg)`;

    //hours
    const hour = now.getHours();
    const hourDegrees = ((hour/12) * 360)+ 90; //converts hour into degrees//
    hourHand.style.transform =`rotate(${hourDegrees}deg)`;

}

setInterval(setDate,1000);