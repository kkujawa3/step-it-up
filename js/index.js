"use strict";

let goals = {
    steps: 0,
    water: 0
};

// Array for storing set goals
let userGoalArray = [];

function setGoals() {
    const stepGoal = parseInt(document.getElementById('stepsGoal').value);
    const waterGoal = parseInt(document.getElementById('waterGoal').vlalue);
    alert("Goals set!");
    updateCalendar();
}    

function addEntry() {
    const date = document.getElementById('entryDate').value;
    const steps = document.getElementById('stepsDone').value;
    const water = document.getElementById('waterIntake').value;

    if(!date || isNaN(steps) || isNaN(water)) {
        alert("Please fill in all fields");
        return;
    }

    const entryIndex = entries.findIndex(e => e.date === date);
    const newEntry = {date, steps, water};

    if(entryIndex !== -1) {
        entries[entryIndex] = newEntry;
    } else {
        entries.push(newEntry);
    }

    updateCalendar();
}

function updateCalendar() {
    const calendars = document.getElementById('calendar');
    calendars.innerHTML = '';
}
