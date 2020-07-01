const subClose = document.querySelectorAll(".recipe-sub")

subClose.forEach((el) => {

    addEventListener("click", () => {
        el.classList.toggle("recipe-show")
        el.classList.toggle("recipe-hidden")
    })

})