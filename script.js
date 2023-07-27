// // This is to submit the page (look at activity 05)
// FormEl. on("submit", function (e) {
//     e.preventDefault()
//     console.log('Form Submitted')
// })

var timerEl = document.getElementById('countdownTimer')


function countdown() {
    var timeLeft = 60;
    var timeInterval = setInterval(function () {
        if (timeLeft > 1)
            timeInterval.textContent = 'Time' + timeLeft;
        timeLeft--;
        if (timerEl.textContent = '') {
            clearInterval(timeInterval);
            displayMessage();
        }
    }, 5000)
}

// function generateQuiz(questions, quizContainer, resultsContainer, submitButton) {

//     function showQuestions(questions, quizContainer) {
//         var output = [];
//         var answers;
//         for (var i=0; i<questions.length; i++){
//             answers = []
//             for(letter in questions[i].answers){
//                 answers.push(
//                     '<label>'
//                     + '<input type="radio" name="question'+i+'" value"'+letter+'">'
//                     + letter + ':'
//                     + questions[i].answers[letter]
//                     +'<label>'
//                 );
//             }
//             output.push(
//                 '<div class="question">'
//             )
//         }
//     }

//     function showResults(questions, quizContainer, resultsContainer) {

//     }

//     showQuestions(questions, quizContainer);

//     submitButton.onclick = function () {
//         showResults(questions, quizContainer, resultsContainer)
//     }
// }

// var theQuestions = [
//     {
//         question: "What is my favorite color?",
//         answers: {
//             a: 'red',
//             b: 'blue',
//             c: 'yellow',
//             d: 'none of the above',
//         },
//         correctAnswer: 'a'
//     }
// ]

//preventDefult = prevents submitting to the server

// jquery - 'boxy'

