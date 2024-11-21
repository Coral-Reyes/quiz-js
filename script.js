// Custom set of questions about video games and technology
const Questions = [
    {
        question: "What is the name of the protagonist in the Halo series?",
        correct_answer: "Master Chief",
        incorrect_answers: ["Commander Shepard", "Gordon Freeman", "Lara Croft"]
    },
    {
        question: "Which company developed the PlayStation console?",
        correct_answer: "Sony",
        incorrect_answers: ["Microsoft", "Nintendo", "Sega"]
    },
    {
        question: "What was the first commercially successful video game?",
        correct_answer: "Pong",
        incorrect_answers: ["Tetris", "Pac-Man", "Space Invaders"]
    },
    {
        question: "In computing, what does 'CPU' stand for?",
        correct_answer: "Central Processing Unit",
        incorrect_answers: ["Central Programming Unit", "Control Processing Unit", "Computer Processing Unit"]
    },
    {
        question: "Which game is known for the quote, 'The cake is a lie'?",
        correct_answer: "Portal",
        incorrect_answers: ["Half-Life", "BioShock", "Mass Effect"]
    },
    {
        question: "Who is credited with inventing the World Wide Web?",
        correct_answer: "Tim Berners-Lee",
        incorrect_answers: ["Alan Turing", "Bill Gates", "Steve Jobs"]
    },
    {
        question: "What year was the Nintendo Entertainment System (NES) released in North America?",
        correct_answer: "1985",
        incorrect_answers: ["1983", "1987", "1990"]
    },
    {
        question: "Which open-world game features the fictional land of Hyrule?",
        correct_answer: "The Legend of Zelda",
        incorrect_answers: ["Skyrim", "The Witcher 3", "Red Dead Redemption 2"]
    },
    {
        question: "What does 'HTTP' stand for?",
        correct_answer: "Hypertext Transfer Protocol",
        incorrect_answers: ["Hyperlink Text Protocol", "Hyper Transfer Text Protocol", "High Text Transfer Protocol"]
    },
    {
        question: "What programming language is used for Android development?",
        correct_answer: "Java",
        incorrect_answers: ["Python", "C++", "Swift"]
    }
];

const ques = document.getElementById("ques");

let currQuestion = 0;
let score = 0;

function loadQues() {
    const opt = document.getElementById("opt");
    let currentQuestion = Questions[currQuestion].question;
    ques.innerText = currentQuestion;

    opt.innerHTML = ""; 
    const correctAnswer = Questions[currQuestion].correct_answer;
    const incorrectAnswers = Questions[currQuestion].incorrect_answers;
    const options = [correctAnswer, ...incorrectAnswers];
    options.sort(() => Math.random() - 0.5);

    options.forEach((option) => {
        const choicesDiv = document.createElement("div");
        const choice = document.createElement("input");
        const choiceLabel = document.createElement("label");
        choice.type = "radio";
        choice.name = "answer";
        choice.value = option;
        choiceLabel.textContent = option;
        choicesDiv.appendChild(choice);
        choicesDiv.appendChild(choiceLabel);
        opt.appendChild(choicesDiv);
    });
}

function loadScore() {
    const totalScore = document.getElementById("score");
    totalScore.innerHTML = `<h3>You scored ${score} out of ${Questions.length}</h3>`;
    totalScore.innerHTML += "<h4>Correct Answers:</h4>";
    Questions.forEach((el, index) => {
        totalScore.innerHTML += `<p>${index + 1}. ${el.correct_answer}</p>`;
    });
}

function nextQuestion() {
    if (currQuestion < Questions.length - 1) {
        currQuestion++;
        loadQues();
    } else {
        document.getElementById("opt").remove();
        document.getElementById("ques").remove();
        document.getElementById("btn").remove();
        loadScore();
    }
}

function checkAns() {
    const selectedAns = document.querySelector('input[name="answer"]:checked');
    if (!selectedAns) {
        alert("Please select an answer before submitting!");
        return;
    }

    if (selectedAns.value === Questions[currQuestion].correct_answer) {
        score++;
    }
    nextQuestion();
}

loadQues();
