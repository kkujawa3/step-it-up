"use strict";

let userGoalArray = [];

function storeInput() {
    const stepGoal = document.getElementById('stepGoal').value;
    userGoalArray.push(stepGoal);
    displayInputs();
}

function displayInputs() {
    const stepGoalOutput = document.getElementById('displayStepGoal');
    stepGoalOutput.innerHTML = '';
    userGoalArray.forEach((input, index) => {
        const p = document.createElement('p');
        p.innerText = `Goal ${index + 1}: ${input}`;
        stepGoalOutput.appendChild(p);
    });

}

