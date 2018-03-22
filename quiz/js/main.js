document.addEventListener("DOMContentLoaded", function(event) {

    const quizContainer = document.getElementById('quiz');
    const quizBtn = document.getElementById("quizBtn");

    const myQuestions = [
        {
            question: "Who is Prime Minister of the United Kingdom?",
            answers: {
                a: "David Cameron",
                b: "Theresa May",
                c: "Winston Churchill",
                d: "Tony Blair"
            },
            correctAnswer: "b"
        },
        {
            question: "Who won the FA Cup in 1995?",
            answers: {
                a: "Manchester United",
                b: "Chelsea",
                c: "Everton",
                d: "Blackburn Rovers"
            },
            correctAnswer: "c"
        },
        {
            question: "What year were Everton FC established?",
            answers: {
                a: "1878",
                b: "1912",
                c: "1894",
                d: "1902"
            },
            correctAnswer: "a"
        },
        {
            question: "What is the capital of Italy",
            answers: {
                a: "Napoli",
                b: "Rome",
                c: "Milan",
                d: "Florence"
            },
            correctAnswer: "b"
        },
    ];

    const correctAnswers = [];

    function buildQuiz() {

        const output = [];

        myQuestions.forEach((currentQuestion, questionNumber) => {

                const answers = [];

                for(test in currentQuestion.correctAnswer) {
                    correctAnswers.push(currentQuestion.correctAnswer[test]);
                }

                for(letter in currentQuestion.answers) {

                    answers.push(
                        `<label>
                            <input class="radio" type="radio" name="question${questionNumber}" value="${letter}">
                            ${currentQuestion.answers[letter]}
                        </label><br/>`
                    );
                }

                output.push(
                    `<div class="question"><strong>${currentQuestion.question}</strong></div><br/>
                     <div class="answers"> ${answers.join('')} </div>`
                );
            }
        );

        document.getElementById('quiz').innerHTML = output.join('<br/>');

    }

    buildQuiz();

    quizBtn.addEventListener("click", function() {
        const els = document.querySelectorAll('input:checked');
        const selectedList = [];

        for(let i = 0; i< els.length; i++) {
            selectedList.push(els[i].value);
        }

        let totalCorrect = 0;
        let i = 0;

        selectedList.forEach((thing, index) => {

           if (thing === myQuestions[i].correctAnswer) {
               console.log("Correct");
               totalCorrect += 1;
           }

           i++;

        });

        var elem = document.createElement('div');

        document.body.appendChild(elem);

        elem.innerHTML = "You got " + totalCorrect + " answer(s) correct";

    });

});
