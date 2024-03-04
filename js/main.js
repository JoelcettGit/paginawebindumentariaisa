
window.addEventListener('load', ( )=> {
  document.querySelector('.loader').style.display = 'none';
})

const abrir = document.querySelector(".click-aqui");
const cerrar = document.querySelector(".cerrar");
const mascota_dialogo = document.querySelector(".dialogo-mascota");
const punta_dialogo = document.querySelector(".punta-dialogo");
const mensajes = [
  "¡No olvides seguirnos en nuestras redes!",
  "¡Somos los mejores!",
  "¡No te pierdas nuestras prendas exclusivas!",
  "¡Gracias por estar aquí!",
  "Sí, YO TAMBIÉN QUIERO TODOO",
  "¡La mejor calidad, siempre!",
];

function transicionar() {
  abrir.style.opacity = "0";
  cerrar.style.opacity = "1";
  cerrar.style.cursor = "pointer";
}

function chatear() {
  transicionar();
  mascota_dialogo.style.opacity = "1";
  punta_dialogo.style.opacity = "1";

  const mensajeAleatorio = mensajes[Math.floor(Math.random() * mensajes.length)];
  document.querySelector(".dialogo").textContent = mensajeAleatorio;
}

function cerrarChat() {
  abrir.style.opacity = "1";
  cerrar.style.opacity = "0";
  cerrar.style.cursor = "default";
  mascota_dialogo.style.opacity = "0";
  punta_dialogo.style.opacity = "0";
}

// Configurar el temporizador para mostrar el mensaje después de 10 segundos
const tiempoEspera = 4 * 60 * 1000; // 10 segundos en milisegundos
setTimeout(chatear, tiempoEspera);

// Función para dar la bienvenida y cerrar después de un tiempo
function darBienvenidaYCerrar() {
    abrir.style.opacity = "0";
    cerrar.style.opacity = "1";
    cerrar.style.cursor = "pointer";
    mascota_dialogo.style.opacity = "1";
    punta_dialogo.style.opacity = "1";

    // Mostrar un mensaje de bienvenida (puedes personalizarlo)
    document.querySelector(".dialogo").textContent = "¡Hola, soy Palmerin, gracias por estar aquí!";

    // Configurar el temporizador para cerrar después de 10 segundos (ajusta según sea necesario)
    setTimeout(cerrarChat, 7000); // 10 segundos en milisegundos
}

// Llamar a la función de bienvenida y cierre al cargar la página
darBienvenidaYCerrar();
