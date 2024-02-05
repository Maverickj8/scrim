let counter = document.querySelector('#counter')
let btn = document.querySelector('#increment')
let count = 0


function newCount() {
    count = count + 1
    counter.innerText =count
}
btn.addEventListener('click', newCount)