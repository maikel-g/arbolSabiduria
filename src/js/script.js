/* ((d) => {
  const $form = d.querySelector("#contact-form"),
    $loader = d.querySelector(".contact-form-loader"),
    $response = d.querySelector(".contact-form-response");

  $form.addEventListener("submit", (e) => {
    e.preventDefault();
    $loader.classList.remove("none");

    // Crear un nuevo objeto FormData
    const formData = new FormData($form);

    // Obtener el valor del campo de nombre por su nombre
    for (const [key, value] of formData.entries()) {
      console.log(`${key}: ${value}`);
    }

    // Realizar la solicitud Fetch con los datos del formulario
    fetch("https://formsubmit.co/ajax/maikelgomezmurillo@gmail.com", {
      method: "POST",
      body: formData,
    })
      .then((res) => (res.ok ? res.json() : Promise.reject(res)))
      .then((json) => {
        console.log(json);
        location.hash = "#gracias";
        $form.reset();
      })
      .catch((err) => {
        console.log(err);
        let message =
          err.statusText || "Ocurrió un error al enviar, intenta nuevamente";
        $response.querySelector(
          "h3"
        ).innerHTML = `Error ${err.status}: ${message}`;
      })
      .finally(() => {
        $loader.classList.add("none");
        setTimeout(() => {
          location.hash = "#close";
        }, 2000);
      });
  });
})(document);
 */
