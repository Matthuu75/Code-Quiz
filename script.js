const questions = [
    {
        //question index 0
        question: "What color is the sun?",
        answers: [
            { text: "Yellow", correct: true },
            { text: "Blue", correct: false },
            { text: "Red", correct: false },
        ]
    },
    {
        //question index 1
        question: "What animal is taller than a hippo?",
        answers: [
            { text: "Mouse", correct: false },
            { text: "Giraffe", correct: true },
            { text: "Dog", correct: false },
        ]
    },
    {
        //question index 2
        question: "What color is lime?",
        answers: [
            { text: "Yellow", correct: false },
            { text: "Blue", correct: false },
            { text: "Green", correct: true },
        ]
    }
];

const questionEl = document.getElementById("question");
const answerBtns = document.getElementById("answer-btns");
const nextBtn = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

//when the quiz is started, reset score and reset questions
function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextBtn.innerHTML = "Next";
    showQuestion();
}

function showQuestion() {
    let currentQuestion = questions[currentQuestionIndex];
    let questionNum = currentQuestion + 1;
    questionEl.innerHTML = questionNum + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerBtns.appendChild(button);
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener("click", selectAnswer);
    })
}

function resetQuiz() {
    nextBtn.style.display = "none";
    while (answerBtns.firstChild) {
        answerBtns.removeChild(answerBtns.firstChild);
    }
}
function selectAnswer(e) {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if (isCorrect) {
        selectedBtn.classList.add("correct");
    } else {
        selectedBtn.classList.add("incorrect")
    }
    Array.from(answerBtns.children).forEach(button => {
        if (button.dataset.correct === "true") {
            button.classList.add("corect");
        }
        button.disabled = true;
    })
    nextBtn.style.display = "block";
}

startQuiz();

// var timerEl = document.getElementById('timer')
// var startQuiz = document.getElementById('#startQuiz')
// var remainingTime = document.getElementById('remainingTime')
// const button = document.querySelector("#button")

// //need to figure out how to get this timer to start on the start quiz button
// addEventListener("click", (e) => {
//     console.log("start timer")
//     countdown()
// });

// function countdown() {
//     // onclick EVENT
//     var timeLeft = 60;
//     var timeInterval = setInterval(function () {
//         if (timeLeft > 1) {
//             remainingTime.textContent = 'Time: ' + timeLeft;
//             timeLeft--;
//         } else {
//             clearInterval(timeInterval);
//             remainingTime.textContent = "Time's Up"
//         }
//     }, 1000);
// }

