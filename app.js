const searchInput = document.getElementById("searchInput");
const promptCards = document.querySelectorAll(".prompt-card");

function filterPrompts(category) {
  promptCards.forEach(card => {
    if (category === "All" || card.dataset.category === category) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
}

searchInput.addEventListener("input", function () {
  const searchText = this.value.toLowerCase().trim();

  promptCards.forEach(card => {
    const cardText = card.innerText.toLowerCase();

    if (cardText.includes(searchText)) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
});

function copyPrompt(button) {
  const promptText = button.parentElement.querySelector(".prompt").innerText;

  navigator.clipboard.writeText(promptText)
    .then(() => {
      const oldText = button.innerText;
      button.innerText = "✅ Copied!";

      setTimeout(() => {
        button.innerText = oldText;
      }, 1500);
    })
    .catch(() => {
      alert("Prompt copy nahi ho paya. Please manually copy karein.");
    });
}
