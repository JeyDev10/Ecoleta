// Função para popular campo de estados

function populateUfs() {
    const urlUF = "https://servicodados.ibge.gov.br/api/v1/localidades/estados"
    const ufSelect = document.querySelector("select[name=uf]")

    fetch(urlUF)
        .then(function(res) { return res.json() })
        .then(states => {
            for (const state of states) {
                ufSelect.insertAdjacentHTML('beforeend', `<option value="${state.id}">${state.nome}</option>`)

            }


        })
}

// Função para popular o campo de cidades de acordo com o UF selecionado.

function getCities(event) {
    const citySelect = document.querySelector("select[name=city]")
    const inputStateSelect = document.querySelector("input[name=state]")

    citySelect.innerHTML = '<option value="">Selecione uma cidade</option>'
    citySelect.disabled = true
    const stateValue = event.target.value
    const stateIndex = event.target.selectedIndex
    inputStateSelect.value = event.target.options[stateIndex].text

    const urlCities = `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${stateValue}/municipios`

    fetch(urlCities)
        .then((res) => { return res.json() })
        .then(cities => {

            if (cities.length > 0) {
                citySelect.disabled = false
            }

            for (let i = 0; i < cities.length; i++) {
                citySelect.innerHTML += `<option value="${cities[i].nome}">${cities[i].nome}</option>`
            }

        })
}

populateUfs()

document
    .querySelector("select[name=uf]")
    .addEventListener("change", getCities)


//Funcionalidades para ítens de coleta:
const itemsColeta = document.querySelectorAll(".items-group li")
const collectedItems = document.querySelector("input[name=items]")

for (let item of itemsColeta) {

    item.addEventListener("click", handleSelectedItem)
}

var strdItems = [];

function handleSelectedItem(event) {
    const itemLi = event.target
    itemLi.classList.toggle("item-selected")

    const itemId = event.target.dataset.id

    const alreadySelected = strdItems.findIndex(item => {
        let testId = item == itemId
        return testId

    })

    if (alreadySelected >= 0) {
        strdItems = strdItems.filter(item => {
            let testIndex = item != itemId
            return testIndex
        })

    } else {
        strdItems.push(itemId)
    }

    collectedItems.value = strdItems
}