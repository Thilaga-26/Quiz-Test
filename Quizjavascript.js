const quizData = [
    {
        question: "1. Which is the most sensitive organ in our body?",
        a: "Eye",
        b: "Skin",
        c: "Nose",
        d: "Ear",
        correct: "b",
    },
    {
        question: "2. Giddha is the folk dance of?",
        a: "Karnataka",
        b: "Mumbai",
        c: "Punjab",
        d: "Rajasthan",
        correct: "c",
    },
    {
        question: "3. Brain of computer is",
        a: "CPU",
        b: "Monitor",
        c: "Keyboard",
        d: "Mouse",
        correct: "a",
    },
    {
        question: "4. Which country are the Giza Pyramids in?",
        a: "The Giza Pyramids are in Italy",
        b: "The Giza Pyramids are in France",
        c: "The Giza Pyramids are in Russia",
        d: "The Giza Pyramids are in Egypt",
        correct: "d",
    },
    {
        question: "5. Gir National Park in Gujarat is famous for?",
        a: "Tiger",
        b: "Lion",
        c: "Elephant",
        d: "Snake",
        correct: "b",
    },
    {
        question: "6. Which organ purify our blood?",
        a: "Lungs",
        b: "Heart",
        c: "Kidney",
        d: "Liver",
        correct: "c",
    },
    {
        question: "7. Which planet is nearest to Earth?",
        a: "Venus",
        b: "Jupiter",
        c: "Mars",
        d: "Neptune",
        correct: "a",
    },
    {
        question: "8. Saina Nehwal is associated with which sports?",
        a: "Tennis",
        b: "Hockey",
        c: "Cricket",
        d: "Badminton",
        correct: "d",
    },
    {
        question: "9. Who is the author of the book – Broken Wing?",
        a: "Kahlil Gibran",
        b: "Sarojini Naidu",
        c: "Sultana Gibran",
        d: "May Ziadeh",
        correct: "b",
    },
    {
        question: "10. Which is the smallest continent?",
        a: "Africa",
        b: "Japan",
        c: "Australia",
        d: "Singapore",
        correct: "c",
    }

];
const quiz= document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')
let currentQuiz = 0
let score = 0
loadQuiz()
function loadQuiz() {
    deselectAnswers()
    const currentQuizData = quizData[currentQuiz]
    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}
function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}
function getSelected() {
    let answer
    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })
    return answer
}
submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    if(answer) {
       if(answer === quizData[currentQuiz].correct) {
           score++
       }
       currentQuiz++
       if(currentQuiz < quizData.length) {
           loadQuiz()
       } else {
           quiz.innerHTML = `
           <h2> Out of ${quizData.length} , You have Answered ${score} correctly, Your Score is ${score}/${quizData.length} </h2>
           <h3>             Congratulations!!!Thank you for Participating...</h3>
           <button onclick="location.reload()">Reload the Pages, Try Again</button>
           `
       }
    }
})