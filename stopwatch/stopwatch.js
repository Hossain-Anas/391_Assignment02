// let [seconds, minutes, hours] = [0, 0, 0];
// let timer = document.getElementById("timer");
// let timerInterval = null;

// function stopwatch(){
//     seconds++;
//     if(seconds == 60){
//         seconds = 0;
//         minutes++;
//         if(minutes == 60){
//             minutes = 0;
//             hours++;
//         }
//     }
//     if(hours == 24){
//         hours = 0;
//     }
//     let h = hours < 10 ? "0" + hours : hours;
//     let m = minutes < 10 ? "0" + minutes : minutes;
//     let s = seconds < 10 ? "0" + seconds : seconds;
//     timer.innerHTML = h + ":" + m + ":" + s;
// }

// function watchStart(){
//     if(timerInterval != null){
//         clearInterval(timerInterval);
//     }
//     timerInterval = setInterval(stopwatch, 1000);
// }

// function watchStop(){
//     clearInterval(timerInterval);
// }

// function watchReset(){
//     clearInterval(timerInterval);
//     [seconds, minutes, hours] = [0, 0, 0];
//     timer.innerHTML = "00:00:00";
// }

let seconds = 0;
let timer = document.getElementById("timer");
let timerInterval = null;

function updateDisplay() {
    timer.innerHTML = seconds;
}

function stopwatch() {
    if (seconds < 30) {
        seconds++;
        if (seconds % 3 === 0 || seconds === 0) {
            updateDisplay();
        }
        if (seconds === 30) {
            updateDisplay();
            clearInterval(timerInterval);
            timerInterval = null; // Mark as stopped
            // Do NOT reset seconds here!
        }
    }
}

function watchStart() {
    if (timerInterval == null && seconds < 30) {
        timerInterval = setInterval(stopwatch, 1000);
    }
    // If timer stopped at 30, reset to 0 and start again
    if (seconds === 30) {
        seconds = 0;
        updateDisplay();
        timerInterval = setInterval(stopwatch, 1000);
    }
}

function watchPause() {
    clearInterval(timerInterval);
    timerInterval = null;
}

function watchReset() {
    clearInterval(timerInterval);
    timerInterval = null;
    seconds = 0;
    updateDisplay();
}

// Initialize display
updateDisplay();
