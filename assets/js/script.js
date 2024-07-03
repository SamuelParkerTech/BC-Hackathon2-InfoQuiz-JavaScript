const API_URL = "https://opentdb.com/api.php?amount=20&type=multiple";

// Event listeners for buttons that restart the quiz, submits your answer and goes to next question
document.getElementById("restart-quiz").addEventListener("click", e => restartsQuiz(e));
document.getElementById("submit-answer").addEventListener("click", e => submitsAnswer(e));
document.getElementById("next-question").addEventListener("click", e => getNextQuestion(e));

// async function getQuestion(e) {
//     const result = await fetch(`${API_URL}`)
//     const data = await result.json();
//     result.innerHTML = "";
//     showQuestion(data.results[0]);
// }