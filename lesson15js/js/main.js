'use strict';

let form = document.querySelector('#form');
let newQuestion = document.querySelector("#new-question");
let correct = document.querySelector("#correct");
let uncorrect = document.querySelector("#uncorrect");
let questions = document.querySelector(".questions");

form.addEventListener('submit', event => {
    event.preventDefault();
    questions.insertAdjacentHTML('beforeend', `
    <div class="container">
            <p class="question">${newQuestion.value}</p>
            <p class="correct-answer">Правильный ответ:${correct.value}</p>
            <p class="wrong-answer">Неправильный ответ:${uncorrect.value}</p>
        </div>
    `)
})