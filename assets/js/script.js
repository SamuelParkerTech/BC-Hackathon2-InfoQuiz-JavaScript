const API_URL = "https://opentdb.com/api.php?amount=20&type=multiple";

document.addEventListener("DOMContentLoaded", function() {

const _question = document.getElementById('question');

// Event listeners for buttons that restarts the quiz, submits your answer and goes to next question
document.getElementById("restart-quiz").addEventListener("click", e => restartsQuiz(e));
document.getElementById("submit-answer").addEventListener("click", e => submitsAnswer(e));
document.getElementById("next-question").addEventListener("click", e => getNextQuestion(e));

// async function displayQuestion
    
//     document.getElementById("question").innerHTML = result;
//     _question.show();
// }

// async function restartsQuiz(e) {
//     const result = await fetch(`${API_URL}`)
//     const data = await result.json();


// creating an object for the first question
var question1 = {
    question: "What is the capital city of France?",
    options: ["Rome", "Paris", "Madrid", "Berlin"],
    answer: "Paris"
};

var question2 = {
    question: "Who wrote the play "Romeo and Juliet?",
    options: ["Charles Dickens", "Mark Twain", "William Shakespeare","Jane Austen"],
    answer: "Willian Shakespeare"
};

var question3 = {
    question: "Which planet is known as the Red Planet?",
    options: ["Venus", "Mars", "Jupiter", "Saturn"],
    answer: "Mars"
};

var question4 = {
    question:"What is the largest ocean on Earth?",
    options: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"],
    answer: "Pacific Ocean"
};

var question5 = {
    question: "In which year did the Titanic sink?",
    options: ["1912", "1905", "1920", "1898"],
    answer: "1912"
};

var question6 = {
    question: "Who painted the Mona Lisa?",
    options: ["Vincent van Gogh", "Pablo Picasso", "Leonardo da Vinci", "Claude Monet"],
    answer: "Leonardo da Vinci"
};

var question7 = {
    question: "Which element has the chemical symbol 'O'?",
    options: ["Gold", "Silver", "Oxygen", "Hydrogen"],
    answer: "Oxygen"
};

var question8 = {
    question: "What is the smallest country in the world?",
    options: ["Monaco", "Vatican City", "San Marino", "Liechtenstein"],
    answer: "Vatican City"
};

var question9 = {
    question: "Who is the author of the Harry Potter series?",
    options: ["J.K. Rowling", "J.R.R. Tolkien", "George R.R. Martin", "C.S. Lewis"],
    answer: "J.K. Rowling"
};

var question10 = {
    question: "What is the boiling point of water at standard atmospheric pressure?",
    options: ["90°C", "100°C", "110°C", "120°C"],
    answer: "100°C"
};

document.getElementById("questions").innerHTML = question1.question;
document.getElementById("answerA").innerText = question1.options[0];
document.getElementById("answerB").innerText = question1.options[1];
document.getElementById("answerD").innerText = question1.options[2];
document.getElementById("answerC").innerText = question1.options[3];
