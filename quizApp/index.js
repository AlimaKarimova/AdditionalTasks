'use strict';
const DB = JSON.parse(localStorage.getItem('DataBase'));
const quizBox = document.querySelector('.quiz-box');

function addQuestion() {
    // quizBox.innerHTML = "";
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

    }
    //     quizBox.innerHTML += `
    //     <h4>${DB[i].text}</h4>
    //     <ul>
    //     <li>${DB[i].options[0]}</li>
    //     <li>${DB[i].options[1]}</li>
    //     <li>${DB[i].options[2]}</li>
    //     <li>${DB[i].options[3]}</li>
    // </ul>`
};
addQuestion();

// window.addEventListener('storage', event => {
//     console.log(event);
//   });