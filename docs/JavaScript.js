var myQuestions = [
	{
		question: "SELECIONE A ALTERNATIVA CORRETA. O MANCHESTER CITY VENCEU SUA PRIMEIRA LIGA DOS CAMPEÕES DA EUROPA NO ANO DE: ",
		answers: {
			a: '2001 com Anselbey Arnold',
			b: 'Nunca Nem Vi',
			c: '2010 com Guardiola'
		},
		correctAnswer: 'b'
	},
	{
		question: "SELECIONE A ALTERNATIVA INCORRETA. DOS TÍTULOS ABAIXO O FC AJAX CONQUISTOU TODOS, EXCETO:",
		answers: {
			a: 'Liga dos Campeões da Europa',
			b: 'Campeonato Holandês',
			c: 'Mundial de Clubes FIFA',
			d: 'Copa da Holanda'
		},
		correctAnswer: 'c'
	},
	{
		question: "SELECIONE A ALTERNATIVA CORRETA. JOGADOR EUROPEU COM MAIS TÍTULOS DA HISTÓRIA",
		answers: {
			a: 'Ryan Giggs',
			b: 'Cristiano Ronaldo',
			c: 'Lionel Messi',
			d: 'Andres Iniesta'
		},
		correctAnswer: 'a'
	}
];

var quizContainer = document.getElementById('quiz');
var resultsContainer = document.getElementById('results');
var submitButton = document.getElementById('submit');

generateQuiz(myQuestions, quizContainer, resultsContainer, submitButton);

function generateQuiz(questions, quizContainer, resultsContainer, submitButton){

	function showQuestions(questions, quizContainer){
		
		var output = [];
		var answers; 

		
		for(var i=0; i<questions.length; i++){
			
			
			answers = [];

			
			for(letter in questions[i].answers){

				
				answers.push(
					'<label>'
						+ '<input type="radio" name="question'+i+'" value="'+letter+'">'
					
						+ questions[i].answers[letter]
					+ '</label>'
				);
			}

			
			output.push(
				'<div class="question">' + questions[i].question + '</div>'
				+ '<div class="answers">' + answers.join('') + '</div>'
			);
		}

		
		quizContainer.innerHTML = output.join('');
	}


	function showResults(questions, quizContainer, resultsContainer){
			
		
		var answerContainers = quizContainer.querySelectorAll('.answers');
		
		
		var userAnswer = '';
		var numCorrect = 0;
		
		
		for(var i=0; i<questions.length; i++){

			
			userAnswer = (answerContainers[i].querySelector('input[name=question'+i+']:checked')||{}).value;
			
			
			
			if(userAnswer===questions[i].correctAnswer){
				
				numCorrect++;
				
				
				answerContainers[i].style.color = 'lightgreen';
			}
			
			else{
				
				answerContainers[i].style.color = 'red';
			}
		}

			
			resultsContainer.innerHTML = numCorrect + ' de ' + questions.length;
		}

	
	showQuestions(questions, quizContainer);

	
	submitButton.onclick = function(){
		showResults(questions, quizContainer, resultsContainer);
	}
}
