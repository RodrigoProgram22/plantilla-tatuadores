window.addEventListener("load", () => {
  const progress = document.getElementById("progress");
  requestAnimationFrame(update);
});
function update() {
  progress.style.width = `${
    (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100
  }%`;
  requestAnimationFrame(update);
}
window.addEventListener("scroll", function () {
  var nav = document.querySelector("nav");
  nav.classList.remove("bg-transparent");
  nav.classList.toggle("fondo-dark", window.scrollY > 0);
});
