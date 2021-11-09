window.addEventListener('DOMContentLoaded', () => {
    let counter = document.getElementById('counter')
    setInterval(increaseCount, 1000, counter)
    
})

function increaseCount (cnt){
    cnt.innerText++
}

 function decreaseCount (cnt){
     cnt.innerText--
 }

 function newLike (list) {
    let countNum = `${counter.innerText}` 
    if(document.getElementById(`${countNum}`)){
        const selectedLi = document.getElementById(`${countNum}`)
        selectedLi.dataset.likeCount = ++selectedLi.dataset.likeCount
        selectedLi.innerHTML = `${countNum} has been liked ${selectedLi.dataset.likeCount} time`

        console.log(selectedLi.dataset.likeCount)
    }else{
    let li = document.createElement('li')
     li.id = countNum
     li.innerHTML = `${countNum} has been liked 1 time`
     li.dataset.likeCount = 1
     list.appendChild(li)
    
    }
    
 }

let plus = document.getElementById('plus')
plus.addEventListener('click', (e) => 
{   console.log(e)
    increaseCount(counter)
})

let minus = document.getElementById('minus')
minus.addEventListener('click', (e) =>{
    console.log(e)
    decreaseCount(counter)
})

let heart = document.getElementById('heart')
let likes = document.querySelector('.likes')

heart.addEventListener('click', e => {
    console.log(e)
    newLike(likes)

})