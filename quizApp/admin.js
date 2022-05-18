'use strict';
const form = document.getElementById('form')
const newQuestion = document.getElementById('questionText');
const option1 = document.getElementById('option1');
const option2 = document.getElementById('option2');
const option3 = document.getElementById('option3');
const option4 = document.getElementById('option4');
const option5 = document.getElementById('option5');
const submitBtn = document.getElementById('submitBtn');

let obj = {};

function addNewQuestion(e) {
    e.preventDefault();
    obj.text = newQuestion.value;
    obj.options = [];
    obj.options[0] = option1.value;
    obj.options[1] = option2.value;
    obj.options[2] = option3.value;
    obj.options[3] = option4.value;
    obj.correctAnswer = option5.value;
    QuestionsDB.push(obj);
}

const QuestionsDB = [{
        text: "İlde neçə ay var?",
        options: ['5', '10', '15', '12'],
        correctAnswer: '12'
    },
    {
        text: "Nece qite var?",
        options: ['5', '6', '4', '10'],
        correctAnswer: '4'
    },
    {
        text: "İlde neçə ay var?",
        options: ['5', '10', '15', '12'],
        correctAnswer: '12'
    },
    {
        text: "Nece qite var?",
        options: ['5', '6', '4', '10'],
        correctAnswer: '4'
    },
    {
        text: "İlde neçə ay var?",
        options: ['5', '10', '15', '12'],
        correctAnswer: '12'
    },
    {
        text: "Nece qite var?",
        options: ['5', '6', '4', '10'],
        correctAnswer: '4'
    }
];


form.addEventListener('submit', addNewQuestion);

localStorage.setItem('DataBase', JSON.stringify(QuestionsDB));