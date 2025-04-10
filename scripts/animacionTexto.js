const offcanvas = document.getElementById("offcanvasNavbar");
const brand = document.querySelector(".transition-brand");

offcanvas.addEventListener("show.bs.offcanvas", () => {
  brand.classList.add("brand-shifted");
});

offcanvas.addEventListener("hide.bs.offcanvas", () => {
  brand.classList.remove("brand-shifted");
});
