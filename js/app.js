const w = window,
  d = document;

const header = d.getElementById("header"),
  logo = d.getElementById("logo"),
  navbarToggler = d.getElementById("navbar-toggler"),
  navLink = d.querySelectorAll(".nav-link"),
  navbarNav = d.getElementById("navbarNav");

/* ajuste de logo al scrollear */
window.addEventListener("scroll", () => {
  let scroll = d.documentElement.scrollTop;
  if (w.matchMedia("(min-width: 1200px)").matches) {
    if (scroll != 0) {
      header.style.height = "50px";
      logo.style.width = "7rem";
    } else {
      header.style.height = "100px";
      setTimeout(() => {
        logo.style.width =
          "12rem"; /* agrego timer para mejorar la visual al cambiar de tamaño */
      }, 100);
    }
  } else {
    if (navbarToggler.ariaExpanded === "false") {
      if (scroll != 0) {
        header.style.height = "60px";
        logo.style.width = "7rem";
      } else {
        setTimeout(() => {
          logo.style.width =
            "12rem"; /* agrego timer para mejorar la visual al cambiar de tamaño */
        }, 150);
        header.style.height = "100px";
      }
    }
  }
});

/* ajuste de alto del header cuando despliego el menu al estar sticky */
navbarToggler.addEventListener("click", () => {
  if (navbarToggler.ariaExpanded === "true") {
    header.style.height = "auto";
  }
});

/* cierre del navbar cuando clikeo en link */
navLink.forEach((item) => {
  item.addEventListener("click", () => {
    if (navbarToggler.ariaExpanded === "true") {
      navbarNav.classList.remove("show");
    }
  });
});
