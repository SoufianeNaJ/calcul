
let display = document.querySelector('.display-area')
let hello = document.getElementById('hello')

hello.addEventListener('click',function(){
    display.innerHTML = ""
})
function addNumber(vl){
    display.innerHTML += vl
}
function deleTe(){
    let current = display.textContent
    display.textContent = current.substring(0,current.length - 1)
}
function result(){
    try {
        display.textContent = eval(display.textContent)
    } catch (error) {
        display.textContent = "error"
    }
}