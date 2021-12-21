'use strict';

/***********************************************************************************/
/* *********************************** DONNEES *************************************/
/***********************************************************************************/
let startBtn;
let billboard;
let count = 10;
let countDown;
let rocket;
/***********************************************************************************/
/* ********************************** FONCTIONS ************************************/
/***********************************************************************************/





function scheduleTakeOff() {
    setTimeout(function() {
        updateImage('rocket3.gif');
        rocket.classList.add('tookOff');
    }, 10000);
}

function updateImage(fileName) {
    rocket.src = 'images/' + fileName;
}

function displayCountDown() {
    billboard.textContent = count;
    count--;
    if (count < 0) {
        clearInterval(countDown);
    }
}

function onClickStartButton(){
    startBtn.removeEventListener('click', onClickStartButton);
    startBtn.classList.add('disabled');

    // display the countdown
    displayCountDown();
    countDown = setInterval(displayCountDown, 1000);

    //changmt img
    updateImage('rocket2.gif');



    scheduleTakeOff();

}


/************************************************************************************/
/* ******************************** CODE PRINCIPAL **********************************/
/************************************************************************************/



function main(){
    rocket = document.getElementById('rocket');
    startBtn = document.querySelector("#firing-button");
    billboard = document.querySelector("#billboard span");


    startBtn.addEventListener("click", onClickStartButton);

}
document.addEventListener("DOMContentLoaded", main);