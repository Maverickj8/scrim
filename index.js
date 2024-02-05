let counter = document.querySelector('#counter')
let btn = document.querySelector('#increment')
let save =document.querySelector('#save-btn')
let prevCount = document.querySelector('#prev')

let count = 0


function newCount() {
    count += 1
    counter.innerText = count
}

function saveCount() {
    let previousSave = count + " - "
    prevCount.textContent += previousSave
    counter.innerText = 0
}
btn.addEventListener('click', newCount)
save.addEventListener('click', saveCount)