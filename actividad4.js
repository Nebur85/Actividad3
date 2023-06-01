// actividad 4

// Crear una función para generar preguntas aleatorias
function generarPregunta(enunciado, opciones, respuestaCorrecta, explicacion) {
  return {
    enunciado: enunciado,
    opciones: opciones,
    respuestaCorrecta: respuestaCorrecta,
    explicacion: explicacion
  };
}

// Crear una función para generar una pregunta aleatoria de la trivia
function generarPreguntaAleatoria() {
  var preguntas = [
    generarPregunta(
      "¿Cuál es la capital de Argentina?",
      ["Rosario", "San Miguel de Tucumán", "Bangladesh", "La Plata"],
      3,
      "La respuesta correcta es La Plata, ya que es la capital de Argentina."
    ),
    generarPregunta(
      "¿En qué año Argentina obtuvo su segunda copa mundial?",
      ["1776", "1986", "1804", "1832"],
      1,
      "La respuesta correcta es 1986, se jugó en México dicho campeonato del mundo."
    ),
    generarPregunta(
      "¿Quién fue el último campeón de la Libertadores?",
      ["Flamengo", "Boca Juniors", "Colo Colo", "River Plate"],
      0,
      "El último campeón de la Copa Libertadores fue un equipo de Brasil, Flamengo."
    )
  ];

  // Generar un índice aleatorio para seleccionar una pregunta
  var indiceAleatorio = Math.floor(Math.random() * preguntas.length);
  return preguntas[indiceAleatorio];
}

// Solicitar la generación de la pregunta utilizando un prompt
var generarJsonPrompt = prompt("Presione enter para generar una pregunta aleatoria de la trivia.");

if (generarJsonPrompt !== null) {
  // Generar una pregunta aleatoria de la trivia
  var preguntaAleatoria = generarPreguntaAleatoria();

  // Convertir la pregunta a JSON
  var jsonPregunta = JSON.stringify(preguntaAleatoria, null, 2);

  // Mostrar el JSON utilizando document.write()
  document.write("<pre>" + jsonPregunta + "</pre>");
}


