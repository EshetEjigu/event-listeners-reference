"use strict"
window.onload = function (event) {
    let additionalForm = document.getElementById("additionForm")
    additionalForm.onsubmit = calculateSum

    let addressForm = document.getElementById("addressForm")
    addressForm.onsubmit = handleAddressSubmit

    let heart = document.getElementById("❤️")
    heart.onclick = flipHeart
    heart.onmouseover = flipHeart
    heart.onmouseout = flipHeart
}

function handleAddressSubmit(event) {
    event.preventDefault()

    let city = event.target.elements.city.value
    let state = event.target.elements.state.value
    let country = event.target.elements.country.value

    let address = `${city}, ${state}, ${country}`


    let resultDiv = document.getElementById("addressResult")
    resultDiv.innerHTML = `
        <h4>
            Address: <span class="display-result-red">${address}
        </h4>
    `
}

function calculateSum(event) {
    event.preventDefault()

    let x = event.target.elements.leftOperand.valueAsNumber
    let y = event.target.elements.rightOperand.valueAsNumber
    let sum = x + y

    let resultDiv = document.getElementById("additionResult")
    console.log(resultDiv)
    resultDiv.innerHTML = `<h4>${x} + ${y} = <span class="display-result-red">${sum}</h4>`
}


document.onkeydown = function (event) {
    console.log("showHelpBox()")
}


function flipHeart(event) {
    event.target.classList.toggle("flipped")
    console.log("Ghost should be flipped")
}






