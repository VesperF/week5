// To get started:
// 1. add an event listener to the window object, listening for the "DOMContentLoaded" event
// 2. use an anonymous function as the listener

document.addEventListener('DOMContentLoaded',function(event) {
    // alert('the page is loaded!')
    let clickMeButton = document.querySelector('.click-me-button')
    clickMeButton.addEventListener('click',function(event){
        let outputElement = document.querySelector('.output')
        outputElement.insertAdjacentHTML('beforeend',`
        <p>It is clicked</p>
        `)
    })


    let nameInput = document.querySelector('#firstName')
    console.log(nameInput)
    nameInput.addEventListener('keyup', function(event){
        let greetElement = document.querySelector('#greet')
        greetElement.innerHTML = `Hi, ${nameInput.value}!`
    })
})