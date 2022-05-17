'use strict';
window.addEventListener('DOMContentLoaded', () => {

    let quizDB = {
        question: 'Inside which HTML element do we put the JavaScript?',
        options: ['js', 'script', 'scripting', 'javascript'],
        correctAnswer: 2

    };

    const question = document.getElementById('addQuestion');
    const box = document.querySelector('.quizes-box');

    question.addEventListener('click', createNewQuiz);



    function createNewQuiz() {
        let list = document.createElement('div');
        list.classList.add('.quiz-box')
        list.innerHTML += `
        <div class="quiz-title"><h3 class="quiz-text">${quizDB.question}</h3>
        <span class="bin" ><i class="fa-solid fa-circle-minus"></i></span></div>
        <ol>   
        <li>${quizDB.options[0]}</li>
        <li>dfdf</li>
        <li>dsfdf</li>
        <li>vdfsfd</li>
        </ol>`

        let variants = list.querySelectorAll('ol li');
        variants.forEach(function (elem, index) {
            elem.textContent = quizDB.options[index];

        })

        box.append(list);
        document.querySelectorAll('.bin i').forEach((item, i) => {
            item.addEventListener('click', (e) => {
                list.remove();
            })
        })
    }


































})