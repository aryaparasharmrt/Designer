document.addEventListener("DOMContentLoaded", function() {

  const galleryImages.forEach((image) => {
      image.addEventListener("click", () => {
        constoverlay = document.createElement("div");
        overlay.classname= "overlay";
        document.body.appendChild(overlay);

        const overlayImage = document.createElement("ima");
        overlayImage.src = image.src;
        overlayImage.className = "overlay-image";
        overlay.appendChild(overlayImage);

        overlay.addEventListener("click", () => {
          overlay.remove();
        })
      })
    })

    const contactForm = document.getElementById("contact-form");

    if (contactForm) {
      contactForm.addEventListener("submit", function (event) {
        event.preventDefault();
        alert("Form submitted!");
      })
    }                 
})
