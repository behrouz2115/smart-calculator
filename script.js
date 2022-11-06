const displayBox = document.querySelector(".display")
function showDisplay (event){
    const x = event.target.innerText
    if (displayBox.innerHTML==0){
        return displayBox.innerHTML=x;
    }
    return displayBox.innerHTML += x;
}
function calculate(){
    let reslt = displayBox.innerText;
    displayBox.innerText = (eval(reslt))
}
function allClear (){
    displayBox.innerText= 0;

}
function clearLast (){
    let text = displayBox.innerText;
    if (text.length ===1 ){
        displayBox.innerText=0;
    }
    else{
        displayBox.innerText= text.substring (0,text.length-1)
    }
}
document.querySelector(".clear-last").addEventListener("click", clearLast)
document.querySelector(".all-clear").addEventListener("click", allClear)
document.querySelector (".calculate").addEventListener("click",calculate)
let list = document.querySelectorAll(".show-display")

list.forEach(item => {
    item.addEventListener("click" , showDisplay)
})
