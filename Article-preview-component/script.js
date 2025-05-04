let button = document.querySelector('#button')

let shareLinks = document.querySelector('#share-links')

button.addEventListener('click', () => {
    shareLinks.style.display = 'flex'
})

let backdrop = document.querySelector('#backdrop')


backdrop.addEventListener('click', () => {

    shareLinks.style.display = 'none'
})

console.log(button); // Turi rodyti elementą, ne null
console.log(shareLinks); // Turi rodyti elementą, ne null
console.log(backdrop); // Turi rodyti elementą, ne null
