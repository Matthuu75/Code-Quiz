// // This is to submit the page (look at activity 05)
// FormEl. on("submit", function (e) {
//     e.preventDefault()
//     console.log('Form Submitted')
// })


var timerEl = document.getElementById('timer')
var startQuiz = document.getElementById('#startQuiz')
var remainingTime = document.getElementById('remainingTime')
const button = document.querySelector("#button")

//need to figure out how to get this timer to start on the start quiz button
addEventListener("click", (e) => {
    console.log("start timer")
    countdown()
});

function countdown() {
    // onclick EVENT
    var timeLeft = 60;
    var timeInterval = setInterval(function () {
        if (timeLeft > 1) {
            remainingTime.textContent = 'Time: ' + timeLeft;
            timeLeft--;
        } else {
            clearInterval(timeInterval);
            remainingTime.textContent = "Time's Up"
        }
    }, 1000);
} 