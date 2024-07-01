var numberText = document.getElementById ("number");
var number = 0;
var shouldcountup = true;
var shouldcount = true;
var targetnumber = Math.floor(Math.random () * 30);
var statusW = document.getElementById ("status");

document.getElementById ("targetNumber").innerHTML = targetnumber;

var interval = setInterval (function () {
    if (number < 30 && shouldcountup && shouldcount) {
        numberText.innerHTML = number++;
        if (number==30) {
            shouldcountup=false;
        }
    } else if (!shouldcountup && shouldcount) {
        numberText.innerHTML = number--;
        if (number==0) {
            shouldcountup=true;
        }
    } 
}, 200)

function stop () {
    shouldcount=false;
    
    if (parseFloat(numberText.innerHTML) == targetnumber) {
        statusW.innerHTML = "You win!"
    } else {
        statusW.innerHTML = "You lose!"
    }
}

function restart () {
    statusW.innerHTML="";
    
    number=0;
    numberText.innerHTML=number;

    targetnumber = Math.floor(Math.random () * 30);
    document.getElementById ("targetNumber").innerHTML = targetnumber;

    shouldcount=true;
    shouldcountup=true;
}

document.addEventListener('keypress', function(event) {
    if (event.code === 'Space') {
        stop();
    } else if (event.code === "KeyR") {
        restart();
    }
});
