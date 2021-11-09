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
     let li = document.createElement('li')
     list.appendChild(li)
     let countNum = `${counter.innerText}`
     let numOfLikes = document.querySelectorAll('li')
     let arrayOfLikes = Array.from(numOfLikes)
     let spanTry = document.getElementsByTagName('span')
     let spanArray = Array.from(spanTry)
     let filterSpan = spanArray.filter(i => {
         return i.innerText == `${counter.innerText}`
    })
         console.log(counter.innerText)
         console.log(arrayOfLikes)
         console.log(countNum)
     li.innerHTML = `${countNum} has been liked <span> ${filterSpan.length} </span> times`
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