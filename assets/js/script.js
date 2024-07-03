const API_URL = "https://opentdb.com/api.php?amount=20&type=multiple";

document.addEventListener("DOMContentLoaded", function() {

const _question = document.getElementById('question');

// Event listeners for buttons that restarts the quiz, submits your answer and goes to next question
document.getElementById("restart-quiz").addEventListener("click", e => restartsQuiz(e));
document.getElementById("submit-answer").addEventListener("click", e => submitsAnswer(e));
document.getElementById("next-question").addEventListener("click", e => getNextQuestion(e));

// function displayQuestion(data) {

    
//     document.getElementById("question").innerHTML = result;
//     _question.show();
// }

// async function restartsQuiz(e) {
//     const result = await fetch(`${API_URL}`)
//     const data = await result.json();
