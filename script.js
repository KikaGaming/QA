document.addEventListener("DOMContentLoaded", () => {
  const contactForm = document.querySelector("[data-contact-form]");
  if (!contactForm) return;

  const status = document.querySelector("[data-contact-status]");

  contactForm.addEventListener("submit", async (event) => {
    event.preventDefault();

    if (status) {
      status.textContent = "Envoi en cours...";
    }

    const data = new FormData(contactForm);

    const response = await fetch("https://formspree.io/f/mwvaydnb", {
      method: "POST",
      body: data,
      headers: { Accept: "application/json" }
    });

    if (response.ok) {
      if (status) status.textContent = "Message envoyé avec succès, merci !";
      contactForm.reset();
    } else {
      if (status) status.textContent = "Une erreur s'est produite, veuillez réessayer.";
    }
  });
});