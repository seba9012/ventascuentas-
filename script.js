document.getElementById("btnCancelarFormulario").addEventListener("click", () => {
  const formulario = document.getElementById("formularioRegistro");
  formulario.classList.add("hidden"); // lo oculta
  formulario.classList.remove("formulario-animado"); // limpia la animación
});
