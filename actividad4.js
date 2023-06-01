// Obtén una referencia al botón
var generarTriviaBtn = document.getElementById('generar-trivia-btn');

// Agrega un evento click al botón
generarTriviaBtn.addEventListener('click', function() {
  // Genera el JSON de la trivia
  var jsonTrivia = generarTriviaJSON();
  
  // Crea un elemento <pre> para mostrar el JSON formateado
  var jsonElement = document.createElement('pre');
  jsonElement.textContent = jsonTrivia;
  
  // Agrega el elemento al documento
  document.body.appendChild(jsonElement);
});

