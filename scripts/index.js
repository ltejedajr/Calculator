"use strict;"

// console.log("start index.js");

window.onload = init;

function init(){

// console.log("start init")

    const addBtn = document.getElementById("addBtn");
    addBtn.onclick = addBtnClicked;

    const subtractBtn = document.getElementById("subtractBtn");
    subtractBtn.onclick = subtractBtnClicked;

    const multiplyBtn = document.getElementById("multiplyBtn");
    multiplyBtn.onclick = multiplyBtnClicked;

    const divideBtn = document.getElementById("divideBtn");
    divideBtn.onclick = divideBtnClicked;

// console.log("end init")

}

function addBtnClicked(){

    // console.log("button clicked");

    const number1Field = document.getElementById("number1Field");
    const number2Field = document.getElementById("number2Field");

    let number1 = Number(number1Field.value);
    let number2 = Number(number2Field.value);

    let additionAnswer = number1 + number2;

    const answerField = document.getElementById("answerField"); 
    
    answerField.value = additionAnswer;


}

function subtractBtnClicked(){

    // console.log("button clicked");

    const number1Field = document.getElementById("number1Field");
    const number2Field = document.getElementById("number2Field");

    let number1 = Number(number1Field.value);
    let number2 = Number(number2Field.value);

    let subtractionAnswer = number1 - number2;

    const answerField = document.getElementById("answerField"); 
    
    answerField.value = subtractionAnswer;


}

function multiplyBtnClicked(){

    // console.log("button clicked");

    const number1Field = document.getElementById("number1Field");
    const number2Field = document.getElementById("number2Field");

    let number1 = Number(number1Field.value);
    let number2 = Number(number2Field.value);

    let multiplicationAnswer = number1 * number2;

    const answerField = document.getElementById("answerField"); 
    
    answerField.value = multiplicationAnswer;


}

function divideBtnClicked(){

    // console.log("button clicked");

    const number1Field = document.getElementById("number1Field");
    const number2Field = document.getElementById("number2Field");

    let number1 = Number(number1Field.value);
    let number2 = Number(number2Field.value);

    let divisionAnswer = number1 / number2;

    const answerField = document.getElementById("answerField"); 
    
    answerField.value = divisionAnswer;


}
