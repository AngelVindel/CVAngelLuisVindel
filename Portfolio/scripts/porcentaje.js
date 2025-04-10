window.addEventListener("load", () => {
  const bars = document.querySelectorAll(".progress-bar");
  bars.forEach((bar) => {
    const value = parseInt(bar.dataset.value);
    let width = 0;
    const valueLabel = bar.parentElement.nextElementSibling;

    const animate = setInterval(() => {
      if (width >= value) {
        clearInterval(animate);
      } else {
        width++;
        bar.style.width = width + "%";
        valueLabel.textContent = width + "%";
      }
    }, 0); // ajusta velocidad aquí
  });
});
