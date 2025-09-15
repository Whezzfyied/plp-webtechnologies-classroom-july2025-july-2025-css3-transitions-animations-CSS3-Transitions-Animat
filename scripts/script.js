 // === Functions with parameters and return values ===
function toggleVisibility(elem, state) {
  if (!elem) return false;
  elem.style.display = state ? "block" : "none";
  return state;
}

// === Modal Logic ===
const modal = document.getElementById("modal");
const openBtn = document.getElementById("openModal");
const closeBtn = document.getElementById("closeModal");

// Open modal
openBtn.addEventListener("click", () => {
  const isOpen = toggleVisibility(modal, true);
  console.log("Modal opened:", isOpen);
});

// Close modal
closeBtn.addEventListener("click", () => {
  const isClosed = toggleVisibility(modal, false);
  console.log("Modal closed:", !isClosed);
});

// Close modal by clicking outside content
window.addEventListener("click", (event) => {
  if (event.target === modal) {
    toggleVisibility(modal, false);
  }
});
