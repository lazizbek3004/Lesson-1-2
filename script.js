// first .lines
let how = document.querySelector('.lines')
let left = document.querySelector('.leftSide')
let ex = document.querySelector('.ex')
let all = document.querySelectorAll('.inner')

how.addEventListener('click', ()=>{
    left.style.display = 'flex';
    rightSide.style.display = 'none'

})
ex.addEventListener('click', ()=>{
    left.style.display = 'none';
})


let til = document.querySelector('.language');
let tillar = document.querySelector('.tillar')

til.addEventListener('click', ()=>{
    if(tillar.style.display === 'none'){
        tillar.style.display = 'flex'
    }else{
        tillar.style.display = 'none'
    }

 
})

let search = document.querySelector('.search')
let rightSide = document.querySelector('.rightSide')

search.addEventListener('click', ()=>{
    rightSide.style.display = 'flex'
    left.style.display = 'none'

})


let right = document.querySelector('.right')
right.addEventListener('click', ()=>{
    rightSide.style.display = 'none'

})











