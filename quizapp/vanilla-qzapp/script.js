// TODO: Reload the questions without reloading the page 
// TODO: Randomize the questions

const quizzes = [
    {
        question: "Which language runs in a web browser?",
        a: "Java",
        b: "C",
        c: "Python",
        d: "JavaScript",
        correct: "d",
    },
    {
        question: "What does CSS stand for?",
        a: "Central Style Sheets",
        b: "Cascading Style Sheets",
        c: "Cascading Simple Sheets",
        d: "Cars SUVs Sailboats",
        correct: "b",
    },
    {
        question: "What does HTML stand for?",
        a: "Hypertext Markup Language",
        b: "Hypertext Markdown Language",
        c: "Hyperloop Machine Language",
        d: "Helicopters Terminals Motorboats Lamborginis",
        correct: "a",
    },
    {
        question: "What year was JavaScript launched?",
        a: "1996",
        b: "1995",
        c: "1994",
        d: "none of the above",
        correct: "b",
    },
]

function deselectAllAnswers(){
    questionRadios.forEach(element => element.checked = false)
}

function loadQuestion(){
    deselectAllAnswers()
    const currentQuiz = quizzes[quizCount]
    questionElement.innerText = currentQuiz.question
    questionAText.innerText = currentQuiz.a
    questionBText.innerText = currentQuiz.b
    questionCText.innerText = currentQuiz.c
    questionDText.innerText = currentQuiz.d
}

function getUserAnswer(){
    // grab the user's answer
    user_answer = Array.from(questionRadios).find(element => element.checked == true)
    if (user_answer){
        // check if user answer correlates with the correct answer
        let status = quizzes[quizCount].correct === user_answer.id
        // if it does, score up the user
        if(status) score++
        // and move to the next question
        quizCount++
    }

    if (quizCount < quizzes.length){
        loadQuestion()
    }else{
        document.querySelector(".container").innerHTML = `
        <h2>You answered ${score}/${quizzes.length} correctly</h2>
        <button onclick="location.reload()">REload</button>
        `
    }
}

const questionRadios = document.querySelectorAll("input[type=radio]");

const questionElement = document.getElementById("question")
const questionAText = document.getElementById("a_text")
const questionBText = document.getElementById("b_text")
const questionCText = document.getElementById("c_text")
const questionDText = document.getElementById("d_text")

let quizCount = 0, score = 0

loadQuestion()

const submitButton = document.querySelector("button")
submitButton.addEventListener("click", event =>  getUserAnswer())