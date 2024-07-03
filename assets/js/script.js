// Event listeners for buttons that restarts the quiz, submits your answer and goes to next question
document.getElementById("restart-quiz").addEventListener("click", e => restartsQuiz(e));
document.getElementById("submit-answer").addEventListener("click", e => submitsAnswer(e));
document.getElementById("next-question").addEventListener("click", e => getNextQuestion(e));

// creating an Array of Questions

const questions = [
    {
        question: "What is the capital city of France?",
        options: ["Rome", "Paris", "Madrid", "Berlin"],
        answer: "Paris"
    },

    {
        question: 'Who wrote the play "Romeo and Juliet?',
        options: ["Charles Dickens", "Mark Twain", "William Shakespeare", "Jane Austen"],
        answer: "Willian Shakespeare"
    },

 {
        question: "Which planet is known as the Red Planet?",
        options: ["Venus", "Mars", "Jupiter", "Saturn"],
        answer: "Mars"
    },

{
        question: "What is the largest ocean on Earth?",
        options: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"],
        answer: "Pacific Ocean"
    },
 {
        question: "In which year did the Titanic sink?",
        options: ["1912", "1905", "1920", "1898"],
        answer: "1912"
    },
 {
        question: "Who painted the Mona Lisa?",
        options: ["Vincent van Gogh", "Pablo Picasso", "Leonardo da Vinci", "Claude Monet"],
        answer: "Leonardo da Vinci"
    },

{
        question: "Which element has the chemical symbol 'O'?",
        options: ["Gold", "Silver", "Oxygen", "Hydrogen"],
        answer: "Oxygen"
    },

 {
        question: "What is the smallest country in the world?",
        options: ["Monaco", "Vatican City", "San Marino", "Liechtenstein"],
        answer: "Vatican City"
    },

 {
        question: "Who is the author of the Harry Potter series?",
        options: ["J.K. Rowling", "J.R.R. Tolkien", "George R.R. Martin", "C.S. Lewis"],
        answer: "J.K. Rowling"
    },

 {
        question: "What is the boiling point of water at standard atmospheric pressure?",
        options: ["90°C", "100°C", "110°C", "120°C"],
        answer: "100°C"
    },
];

let currentQuestionIndex = 0;
let score = 0;

// Function to display current question and options
function displayQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    document.getElementById("question").innerText = currentQuestion.question;
    document.getElementById("answerA").innerHTML = `<div class="card border-1">
    <img src="assets/images/A.png" class="card-img-top" alt="Answer A">
    <div class="card-body">
        <p class="card-text">${currentQuestion.options[0]}</p>
    </div>
</div>`;
document.getElementById("answerB").innerHTML = `<div class="card border-1">
<img src="assets/images/B.png" class="card-img-top" alt="Answer B">
<div class="card-body">
    <p class="card-text">${currentQuestion.options[1]}</p>
</div>
</div>`;
document.getElementById("answerC").innerHTML = `<div class="card border-1">
<img src="assets/images/C.png" class="card-img-top" alt="Answer C">
<div class="card-body">
    <p class="card-text">${currentQuestion.options[2]}</p>
</div>
</div>`;
document.getElementById("answerD").innerHTML = `<div class="card border-1">
<img src="assets/images/D.png" class="card-img-top" alt="Answer D">
<div class="card-body">
    <p class="card-text">${currentQuestion.options[3]}</p>
</div>
</div>`;
}


// Initialize quiz
displayQuestion();
