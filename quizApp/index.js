const startBox=document.querySelector('.start-box');
const mainBox =document.querySelector('.main-box');
mainBox.classList.add('hide')
const QuestionsDB = [{
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

function addQuestion() {
    for (let i in QuestionsDB) {
        const quizBox = document.createElement('div');
        quizBox.classList.add('quiz-box', 'container')
        quizBox.innerHTML = "";
        quizBox.innerHTML += ` 
        <h4>${QuestionsDB[i].text}</h4>
        <ul>
        <li><input type="radio" name="" id="">${QuestionsDB[i].options[0]}</li>
        <li><input type="radio" name="" id="">${QuestionsDB[i].options[1]}</li>
        <li><input type="radio" name="" id="">${QuestionsDB[i].options[2]}</li>
        <li><input type="radio" name="" id="">${QuestionsDB[i].options[3]}</li>
        <button type="button" class="btn" >Back</button>
        <button type="button" class="btn" >Next</button>
    </ul>`

       mainBox.append(quizBox);
       
    };
};
addQuestion();
function startQuiz(){
    startBox.classList.add('hide');
    mainBox.classList.remove('hide');
}
