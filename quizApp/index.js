'use strict';

const old = JSON.parse(localStorage.getItem('DataBase'));
const DB = JSON.parse(JSON.stringify(old));
const quizBox = document.querySelector('.quiz-box');
let suallar;


function addQuestion() {
    quizBox.innerHTML = "";
    for (let i in DB) {
        quizBox.innerHTML += ` 
        <div> 
        <h4>${DB[i].text}</h4>
        <ul>
        <li>${DB[i].options[0]}</li>
        <li>${DB[i].options[1]}</li>
        <li>${DB[i].options[2]}</li>
        <li>${DB[i].options[3]}</li>
        </div>  
    </ul>`
    };

    suallar = document.querySelectorAll('.quiz-box ul li');
    suallar.forEach(function (sual) {
        sual.classList.add('none-checked')
        sual.addEventListener('click', (e) => {
            e.target.classList.remove('none-checked')
            e.target.classList.add('checked');
        })
    })

};
addQuestion();