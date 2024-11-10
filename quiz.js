document.getElementById("quiz-form").addEventListener("submit", function (event) {
    event.preventDefault();

    const answers = {
        question1: "b", 
        question2: "b", 
        question3: "a",
        question4: "b", 
        question5: "b", 
        question6: "a",
    };

    const formData = new FormData(document.getElementById("quiz-form"));
    let score = 0;
    let results = "";
    let correctAnswers = 0;
    let incorrectAnswers = 0;

    for (let [question, answer] of formData.entries()) {
        if (answers[question] === answer) {
            score++;
            correctAnswers++;
        } else {
            incorrectAnswers++;
            results += `<p><strong>Resposta incorreta para ${question}. A resposta correta é: ${answers[question]}</strong></p>`;
        }
    }

    results += `
        <div style="font-size: 1.5rem;">
            <p><strong>Você acertou ${correctAnswers} de 6 perguntas!</strong></p>
            <p>Respostas erradas: ${incorrectAnswers}</p>
        </div>
    `;
    document.getElementById("quiz-result").innerHTML = results;
});
