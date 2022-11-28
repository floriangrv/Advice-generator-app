const adviceId = document.querySelector(".advice-id");
const adviceText = document.querySelector(".advice-text");
const btn = document.querySelector("#advice-btn");

console.log(btn)

function getAdvice() {
    fetch('https://api.adviceslip.com/advice').then(response => {
        return response.json();
    }).then(adviceData => {
        const adviceIdd = adviceData.slip.id;
        const advice = adviceData.slip.advice;
        btn.classList.add("rotate-center")
        adviceId.textContent = adviceIdd;
        adviceText.textContent = advice;
    }).catch(error => {
        console.log(error);
    })
}

btn.addEventListener('click', () => {
    btn.classList.remove("rotate-center")
    getAdvice();
    
});

window.onload = () => {
    getAdvice();
}


