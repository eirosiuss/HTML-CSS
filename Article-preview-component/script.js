let button = document.querySelector('#button')

let mobileButton = document.querySelector('.mobile-button')

let modalWrapper = document.querySelector('#modal-wrapper')

button.addEventListener('click', () => {
    modalWrapper.style.display = 'block'
})

let backdrop = document.querySelector('#backdrop')

backdrop.addEventListener('click', () => {
    modalWrapper.style.display = 'none'
})

mobileButton.addEventListener('click', () => {
    modalWrapper.style.display = 'none'
})