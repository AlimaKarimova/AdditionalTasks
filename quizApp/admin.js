'use strict';
const form = document.getElementById('form')
const newQuestion = document.getElementById('questionText');
const option1 = document.getElementById('option1');
const option2 = document.getElementById('option2');
const option3 = document.getElementById('option3');
const option4 = document.getElementById('option4');
const submitBtn = document.getElementById('submitBtn');



const QuestionsDB = [
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

addQuestion() {
    let obj={};
    obj.text=newQuestion.value;
    obj.options[0]=option1;
    obj.options[1]=option2;
    obj.options[2]=option3;
    obj.options[3]=option4;
    QuestionsDB.push(obj);

};
localStorage.setItem('DataBase', JSON.stringify(QuestionsDB));