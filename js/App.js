let numOfAdvice = document.querySelector(".num-advice");
let content = document.querySelector(".advice");

fetch("https://api.adviceslip.com/advice")
.then((content)=>{
    return content.json();
})
.then((result)=>{
    numOfAdvice.textContent = `ADVICE #${result.slip.id}`
    content.textContent = `"${result.slip.advice}"`
})