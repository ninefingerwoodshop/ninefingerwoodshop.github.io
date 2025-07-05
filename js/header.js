function toggleDropdown() {
  const dropdown = document.getElementById("dropdown");
  dropdown.classList.toggle("active");
}

// Close dropdown when clicking outside
document.addEventListener("click", function (event) {
  const dropdown = document.getElementById("dropdown");
  if (!dropdown.contains(event.target)) {
    dropdown.classList.remove("active");
  }
});

// Close dropdown with Escape key
document.addEventListener("keydown", function (event) {
  if (event.key === "Escape") {
    document.getElementById("dropdown").classList.remove("active");
  }
});
