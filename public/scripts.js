const subClose = document.querySelectorAll(".recipe-sub")

subClose.forEach((el) => {

    addEventListener("click", () => {
        el.classList.toggle("recipe-show")
        el.classList.toggle("recipe-hidden")
    })

})

function addInput() {
    const inputs = document.querySelector(".inputs");
    const fieldContainer = document.querySelectorAll(".input-wrapper");
  
    // Realiza um clone do último ingrediente adicionado
    const newField = fieldContainer[fieldContainer.length - 1].cloneNode(true);
  
    // Não adiciona um novo input se o último tem um valor vazio
    if (newField.children[0].value == "") return false;
  
    // Deixa o valor do input vazio
    newField.children[0].value = "";
    inputs.appendChild(newField);
}

document
    .querySelector(".add-input")
    .addEventListener("click", addInput);