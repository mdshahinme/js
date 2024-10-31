function addText() {
  const inputField = document.getElementById("inputField");
  const output = document.getElementById("output");
  const text = inputField.value.trim();

  if (text) {
    const newParagraph = document.createElement("p");
    newParagraph.textContent = text;

    output.appendChild(newParagraph);

    inputField.value = "";
  }
}

function removeAll() {
  const output = document.getElementById("output");

  output.innerHTML = "";
}
