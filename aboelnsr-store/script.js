const menuToggles = document.querySelectorAll(".menu-toggle");

menuToggles.forEach((button, index) => {
  const nav = button.parentElement.querySelector(".nav");

  if (!nav) {
    return;
  }

  const navId = nav.id || `site-nav-${index + 1}`;
  nav.id = navId;
  button.setAttribute("aria-controls", navId);
  button.setAttribute("aria-expanded", "false");

  button.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("open");
    button.setAttribute("aria-expanded", String(isOpen));
  });

  nav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      nav.classList.remove("open");
      button.setAttribute("aria-expanded", "false");
    });
  });
});

window.addEventListener("resize", () => {
  if (window.innerWidth > 760) {
    menuToggles.forEach((button) => {
      const nav = button.parentElement.querySelector(".nav");

      if (!nav) {
        return;
      }

      nav.classList.remove("open");
      button.setAttribute("aria-expanded", "false");
    });
  }
});

const contactForm = document.querySelector(".contact-form");

if (contactForm) {
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const submitButton = contactForm.querySelector("button[type='submit']");
    const originalLabel = submitButton.textContent;

    submitButton.textContent = "تم استلام طلبك";
    submitButton.disabled = true;

    const note = document.createElement("p");
    note.className = "form-note";
    note.textContent = "شكرًا لك. هذه نسخة تجريبية من الموقع ويمكن ربط النموذج لاحقًا بخدمة إرسال حقيقية.";
    contactForm.appendChild(note);

    window.setTimeout(() => {
      submitButton.textContent = originalLabel;
      submitButton.disabled = false;
      note.remove();
      contactForm.reset();
    }, 3500);
  });
}
