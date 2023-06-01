
var generarTriviaBtn = document.getElementById('generar-trivia-btn');


generarTriviaBtn.addEventListener('click', function() {
  var jsonTrivia = generarTriviaJSON();
  
  var jsonElement = document.createElement('pre');
  jsonElement.textContent = jsonTrivia;
  
  document.body.appendChild(jsonElement);
});

