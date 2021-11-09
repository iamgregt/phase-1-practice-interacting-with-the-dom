
let counter = document.getElementById('counter')
let pauseButton = document.getElementById('pause')
let commentForm = document.getElementById('comment-form')
pauseButton.addEventListener('click', () =>
{
    pauseCount()
})

let countStart = setInterval(increaseCount, 1000)

function increaseCount (){
    counter.innerText++
}

 function decreaseCount (){
     counter.innerText--
 }

 function pauseCount (){
    if(pauseButton.innerText === "pause"){

    
        clearInterval(countStart)
       
    pauseButton.innerText = "restart"
    }else{
        pauseButton.innerText = "pause"
        countStart = setInterval(increaseCount, 1000, counter)
    }
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



commentForm.addEventListener('submit', (e) =>{
    
    console.log(e)
    e.preventDefault()
    let comment = e.target[0].value
   console.log(comment)
   let h5 = document.createElement('h5')

   let comments = document.querySelector('h3')
   let newComment = comments.appendChild(h5)
   newComment.innerText = comment
   console.log(comments.innerText)
   
})
