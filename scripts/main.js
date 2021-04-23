const timerText = document.getElementById("timer-text");
let count = 0;

setInterval(function (){
	count +=1;
    timerText.textContent = count;
}, 1000)

//////////////////////////////////////////////////////////////////

const returnValue = document.getElementById('output-text');
var form = document.getElementById('form')
let total = 0;

form.addEventListener('submit', function(event){
    event.preventDefault //prevents the form from autosubmitting
    var valueOne = document.getElementById('value1');
    var valueTwo = document.getElementById('value2');    
    total = valueOne + valueTwo;

    //document.getElementById('output-text').textContent = total;
    returnValue.textContent = total;
})
