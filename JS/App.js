let btnDice=document.getElementById('btn-dice')
let imageDiceRandom=document.getElementsByClassName('img-dice')[0]

// function

    btnDice.addEventListener('click', ()=>{
    let randomImg=Math.floor(Math.random()*6+1)
    imageDiceRandom.src=`../image/${randomImg}.jpg`
    imageDiceRandom.classList.remove('d-none')
})