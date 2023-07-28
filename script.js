// // This is to submit the page (look at activity 05)
// FormEl. on("submit", function (e) {
//     e.preventDefault()
//     console.log('Form Submitted')
// })

const questions = [
    {
        //question index 0
        question: "What color is the sun?",
        answers: [
            { text: "Yellow", correct: true },
            { text: "Blue", correct: false },
            { text: "Red", correct: false }
        ]
    },
    {
        //question index 1
        question: "What animal is taller than a hippo?",
        answers: [
            { text: "Mouse", correct: false },
            { text: "Giraffe", correct: true },
            { text: "Dog", correct: false }
        ]
    },
    {
        //question index 2
        question: "What color is lime?",
        answers: [
            { text: "Yellow", correct: false },
            { text: "Blue", correct: false },
            { text: "Green", correct: true }
        ]
    }
];

const questionEl = document.getElementById("question");
const answerBtn = document.getElementById("answer-btn");
const nextBtn = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextBtn.innerHTML = "Next";
    showQuestion();
}

function showQuestion() {
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestion = 1;
    questionEl.innerHTML = questions + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerBtn.appendChild(button);
    })
}
startQuiz();

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

