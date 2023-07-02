const btn = document.querySelector(".btn")
const body = document.querySelector("body")

const array = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","C","F"]

const randomColorCode =() =>{
    let hexCode = "#"
    for(let i = 0; i < 6 ; i++){
        hexCode += array[Math.floor(Math.random() * array.length)]
    }
    body.style.background = hexCode

    localStorage.setItem("colorCode", hexCode)
}

window.onload = ()=> {
    const saveColor = localStorage.getItem("colorCode")
    if(saveColor){
        body.style.background = saveColor
    }
}


btn.addEventListener("click", ()=>{
    randomColorCode()
    localStorage.setItem("colorCode", body.style.background)
})

