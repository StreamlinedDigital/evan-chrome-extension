var button = document.querySelector('#button')
var testArea = document.querySelector('#testing-js')

function handleButtonClick() {
  testArea.innerHTML = testArea.innerHTML + ' JS is Working'
}

button.addEventListener('click', handleButtonClick)
