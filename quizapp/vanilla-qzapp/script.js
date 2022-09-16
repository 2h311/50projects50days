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

const questionElement = document.getElementById("question")
questionElement.innerText = quizzes[0].question

const questionAText = document.getElementById("_a_text")
questionAText.innerText = quizzes[0].a

const questionBText = document.getElementById("_b_text")
questionBText.innerText = quizzes[0].b

const questionCText = document.getElementById("_c_text")
questionCText.innerText = quizzes[0].c

const questionDText = document.getElementById("_d_text")
questionDText.innerText = quizzes[0].d


const submitButton = document.querySelector("button")
submitButton.addEventListener("click", (e)=>{
    console.log("clciked")
})