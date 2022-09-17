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
    questionElement.text(currentQuiz.question) 
    questionAText.text(currentQuiz.a) 
    questionBText.text(currentQuiz.b)
    questionCText.text(currentQuiz.c)
    questionDText.text(currentQuiz.d)
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
        $(".container").html(`
            <h2>You answered ${score}/${quizzes.length} correctly</h2>
            <button onclick="location.reload()">Reload</button>
        `) 
    }
}

const questionRadios = $("input[type=radio]").splice(0, 4);

const questionElement = $("#question")
const questionAText = $("#a_text")
const questionBText = $("#b_text")
const questionCText = $("#c_text")
const questionDText = $("#d_text")

let quizCount = 0, score = 0

loadQuestion()
$("button").on("click", event =>  getUserAnswer())