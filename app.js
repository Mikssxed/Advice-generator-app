const adviceId = document.querySelector('h1');
const advice = document.querySelector('p');
const button = document.querySelector('button')

const getAdvice = () => {
    fetch('https://api.adviceslip.com/advice', {cache: "no-store"}).then(response => {
    return response.json();
  }).then(showAdvice => {
    const adviceObj = showAdvice.slip;
    advice.innerHTML = `"${adviceObj.advice}"`;
    adviceId.innerHTML = `advice #${adviceObj.id}`
  })
}

window.onload = () => {
    getAdvice();
}

button.addEventListener('click', getAdvice)
