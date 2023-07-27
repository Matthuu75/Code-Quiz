// // This is to submit the page (look at activity 05)
// FormEl. on("submit", function (e) {
//     e.preventDefault()
//     console.log('Form Submitted')
// })


var timerEl = document.getElementById('timer')
var startQuiz = document.getElementById('#startQuiz')

function countdown() {
    // onclick EVENT
    var timeLeft = 60;
    var timeInterval = setInterval(function () {
        if (timeLeft > 1)
            timeInterval.textContent = timeLeft + ' seconds remaining';
            timeLeft--;
        if (timerEl.textContent = 'Timer: ') {
            clearInterval(timeInterval);
            displayMessage("Time's Up!")
        }
    }, 1000)
}