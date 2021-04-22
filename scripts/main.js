const timerText = document.getElementById("timer-text");

let count = 0;

setInterval(function (){
	count +=1;
    timerText.textContent = count;
}, 1000)