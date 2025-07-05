document.querySelectorAll(".read-more-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    const content = btn.previousElementSibling;
    content.classList.toggle("expanded");
    btn.textContent = content.classList.contains("expanded")
      ? "Read Less"
      : "Read More";
  });
});
