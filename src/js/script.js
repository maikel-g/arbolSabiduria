// script.js
export function mostrarInformacion(opcion) {
  // Define el contenido a mostrar para cada opción
  var contenido = "";
  switch (opcion) {
    case "atencion_medica":
      contenido = "<p>Información sobre atención médica especializada</p>";
      break;
    case "nutricion_geriatrica":
      contenido = "<p>Información sobre nutrición geriátrica</p>";
      break;
    case "terapia_ocupacional_fisica":
      contenido = "<p>Información sobre terapia ocupacional y física</p>";
      break;
    case "apoyo_psicologico_emocional":
      contenido = "<p>Información sobre apoyo psicológico y emocional</p>";
      break;
    default:
      contenido = "<p>Contenido no encontrado</p>";
  }

  // Actualiza el contenido del div con clase "contenido"
  document.querySelector(".contenido").innerHTML = contenido;
}
