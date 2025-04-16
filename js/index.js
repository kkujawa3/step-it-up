"use strict";

// Array for storing steps goal
let userGoalArray = [];

function storeInput() {
    const stepGoal = document.getElementById('numberStepGoal').value;
    const numberValue = parseFloat(stepGoal);

    if(!isNaN(numberValue)) {
        userGoalArray.push(numberValue);
        displayInputs();
    } else {
        console.log("invalid number:");
    }
}

// Displays user steps goal
function displayInputs() {
    const outputGoal = document.getElementById('output');
    outputGoal.innerHTML = '';
    userGoalArray.forEach((num, index) => {
        const p = document.createElement('p');
        p.textContent = `User Step Goal ${index + 1}: ${num}`;
        outputGoal.appendChild(p);
    });

}

// Array for storing water intake goal
let userWaterArray = [];

function storeWater() {
    const waterGoalAmt = document.getElementById('ouncesWaterGoal').value;
    const waterValue = parseFloat(waterGoalAmt);

    if(!isNaN(waterValue)) {
        userWaterArray.push(waterValue);
        displayWater();
    } else {
        console.log("invalid water amount");
    }
}

// Displays user water goal
function displayWater() {
    const outputOunces = document.getElementById('outputWater');
    outputOunces.innerHTML = '';
    userWaterArray.forEach((num, index) => {
        const w = document.createElement('w');
        w.textContent = `User Water Goal ${index + 1}: ${num} ounces`;
        outputOunces.appendChild(w);
    }); 
}

