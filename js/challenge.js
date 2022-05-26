const counter = document.getElementById('counter')
const minus = document.getElementById('minus')
const plus = document.getElementById('plus')
const heart = document.getElementById('heart')
const pause = document.getElementById('pause')
const commentForm = document.getElementById('comment-form')
const commentsList = document.getElementById('list')

let timer = setInterval( plusOne , 1000)

let listOfLikedNumbers = []
let likedTimes = []

function plusOne () {
    counter.textContent = parseInt(counter.textContent) + 1
}

pause.addEventListener('click' , ()=>{
    if (pause.textContent.trim() === 'pause') {
        pause.textContent = ' resume '
        clearInterval(timer)
        
        plus.disabled = true
        minus.disabled = true
        heart.disabled = true
        
    } else {
        pause.textContent = ' pause '
        clearInterval(timer)
        timer = setInterval( plusOne , 1000 )

        plus.disabled = false
        minus.disabled = false
        heart.disabled = false
    }
    
})

plus.addEventListener('click', ()=>{
    counter.textContent = parseInt(counter.textContent) + 1
})

minus.addEventListener('click', ()=>{
    counter.textContent = parseInt(counter.textContent) - 1
})

const likes = document.querySelector('.likes')

heart.addEventListener('click', ()=>{
    if (listOfLikedNumbers.includes(parseInt(counter.textContent))){
        let index = listOfLikedNumbers.indexOf(parseInt(counter.textContent))
        let li = likes.children[index]
        li.innerText = `${parseInt(counter.textContent)} has been liked ${likedTimes[index]+1} times.`
        likedTimes[index] = likedTimes[index] + 1
    } else {
        listOfLikedNumbers.push(parseInt(counter.textContent))
        likedTimes = [...likedTimes , 1]

        let li = document.createElement('li')
        li.innerText = `${parseInt(counter.textContent)} has been liked 1 times.`
        likes.append(li)
    }
})

let commentCounter = 0

commentForm.addEventListener('submit', (e)=>{
    e.preventDefault()
    
    if (commentCounter === 0) {
        let ol = document.createElement('ol')
        let li = document.createElement('li')
        li.innerText = commentForm.comment.value
        ol.append(li)
        commentsList.append(ol)

    } else {
        let ol = commentsList.querySelector('ol')
        let li = document.createElement('li')
        li.innerText = commentForm.comment.value
        ol.append(li)
    }
    commentCounter += 1

    commentForm.reset()
})