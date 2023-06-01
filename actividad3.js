// actividad 3

let act3 = {
    preguntas: [
      {
        enunciado: "¿Cuál es la capital de Argentina?",
        opciones: ["Rosario", "San miguel de Tucuman", "Bangladesh", "La plata"],
        respuestaCorrecta: 3,
        explicacion: "La respuesta correcta es La plata, ya que es la capital de Argentina."
      },
      {
        enunciado: "¿En qué año Argentina obtuvo su segunda copa mundial?",
        opciones: ["1776", "1986", "1804", "1832"],
        respuestaCorrecta: 1,
        explicacion: "La respuesta correcta es 1986, Se juego en mexico dicho campeonato del mundo"
      },
      {
        enunciado: "Quién fue el último campeón de la libertadores?",
        opciones: ["Flamengo", "Boca", "Colo Colo", "River Plate"],
        respuestaCorrecta: 0,
        explicacion: "El último campeón de la copa liberatores había sido un equipo de Brasil."
      }
    ]
  };

  let json3 = JSON.stringify(act3);

// actividad 4

// Obtén una referencia al botón
var generarJsonBtn = document.getElementById('generar-json-btn');

// Agrega un evento click al botón
generarJsonBtn.addEventListener('click', function() {
  // Solicita la entrada del usuario utilizando un prompt
  var cantidadPreguntas = prompt('Ingrese la cantidad de preguntas para la trivia:');
  cantidadPreguntas = parseInt(cantidadPreguntas); // Convierte la entrada a un número entero
  
  // Crea un objeto con las preguntas y respuestas generadas
  var trivia = {
    preguntas: []
  };
  
  for (var i = 0; i < cantidadPreguntas; i++) {
    var enunciado = prompt('Ingrese el enunciado de la pregunta ' + (i + 1) + ':');
    
    var opciones = [];
    for (var j = 0; j < 4; j++) {
      var opcion = prompt('Ingrese la opción ' + (j + 1) + ' de la pregunta ' + (i + 1) + ':');
      opciones.push(opcion);
    }
    
    var respuestaCorrecta = parseInt(prompt('Ingrese el número de la opción correcta (1-4) de la pregunta ' + (i + 1) + ':'));
    respuestaCorrecta--; // Resta 1 para obtener el índice correcto en el array
    
    var explicacion = prompt('Ingrese la explicación de la pregunta ' + (i + 1) + ':');
    
    var pregunta = {
      enunciado: enunciado,
      opciones: opciones,
      respuestaCorrecta: respuestaCorrecta,
      explicacion: explicacion
    };
    
    trivia.preguntas.push(pregunta);
  }
  
  // Convierte el objeto a JSON
  var jsonTrivia = JSON.stringify(trivia);
  
  // Crea un elemento <pre> para mostrar el JSON formateado
  var jsonElement = document.createElement('pre');
  jsonElement.textContent = jsonTrivia;
  
  // Agrega el elemento al documento
  document.body.appendChild(jsonElement);
});

  
