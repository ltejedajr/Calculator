"use strict;"

console.log("start index.js");

window.onload = init;

function init(){

console.log("start init")

    const addBtn = document.getElementById("addBtn");
    addBtn.onclick = addBtnClicked;
    
console.log("end init")

}

function addBtnClicked(){

    console.log("button clicked");

    const number1Field = document.getElementById("number1Field");
    const number2Field = document.getElementById("number2Field");

    let number1 = Number(number1Field.value);
    let number2 = Number(number2Field.value);

    let answer = number1 + number2;

    const answerField = document.getElementById("answerField"); 
    
    answerField.value = answer;


}

function init(){

    console.log("start init")
    
        const subtractBtn = document.getElementById("subtractBtn");
        subtractBtn.onclick = subtractBtnClicked;
        
    console.log("end init")
    
    }

function subtractBtnClicked(){

    console.log("button clicked");

    const number1Field = document.getElementById("number1Field");
    const number2Field = document.getElementById("number2Field");

    let number1 = Number(number1Field.value);
    let number2 = Number(number2Field.value);

    let answer = number1 - number2;

    const answerField = document.getElementById("answerField"); 
    
    answerField.value = answer;


}