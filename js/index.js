"use strict";


const calendar = [];
const calendarEl = document.getElementById('calendar');

function addToCalendar() {
    const stepGoal = document.getElementById('stepsGoal').value;
    const waterGoal = document.getElementById('watersGoal').value;
    const completedSteps = document.getElementById('stepsDone').value;
    const ouncesOfWater = document.getElementById('waterIntake').value;

    const dayEntry = {
        stepGoal: parseInt(stepGoal),
        waterGoal: parseInt(waterGoal),
        completedSteps: parseInt(completedSteps),
        ouncesOfWater: parseInt(ouncesOfWater),
        date: new Date().toLocaleDateString()
    };

    calendar.push(dayEntry);
    alert("Goals added");
    updateCalendar();
}

function updateCalendar() {
    calendarEl.innerHTML = '';
    calendar.forEach(day => {
        const dayEl = document.createElement('div');
        dayEl.classList.add('day');
        dayEl.innerHTML = `<strong>Date:</strong> ${day.date}<br><strong>Steps Goal:</strong> ${day.stepGoal} - <strong>Completed Steps:</strong> ${day.completedSteps}<br>
        <strong>Water Goal:</strong> ${day.waterGoal}oz - <strong>Ounces of Water:</strong> ${day.ouncesOfWater}oz`;
        calendarEl.appendChild(dayEl);
    });
}

document.getElementById('reset-button').addEventListener('click', function(event) {
    calendarEl.innerHTML = '';
    stepsGoal.innerHTML = '';
    watersGoal.innerHTML = '';
    completedSteps.innerHTML = '';
    ouncesOfWater.innerHTML = '';
});
