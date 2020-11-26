//Modal:

const btnCollectPoint = document.querySelector("#search-button")
const btnCloseModal = document.querySelector("#close-modal")
const modal = document.querySelector("#modal")

clickModal(btnCollectPoint)
clickModal(btnCloseModal)

// Função de padronização do evento de chamada:
function clickModal(btn) {
    btn.addEventListener("click", changeModal)
}
// Função de alteração de classe(Para aparecer ou desaparecer o modal):
function changeModal() {
    modal.classList.toggle("hidden")
}