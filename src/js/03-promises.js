import { Notify } from 'notiflix/build/notiflix-notify-aio';
function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const shouldResolve = Math.random() > 0.3;
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}
const inputValues = document.querySelectorAll('input');
const startButton = document.querySelector('button');

startButton.addEventListener('click', event => {
  event.preventDefault();

  let fDelay = inputValues[0].valueAsNumber || 0;
  let sDleay = inputValues[1].valueAsNumber || 0;
  let stepDelay = inputValues[2].valueAsNumber || 0;

  for (let i = 0; i < stepDelay; i++) {
    createPromise(i, fDelay)
      .then(({ position, delay }) =>
        Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`)
      )
      .catch(({ position, delay }) =>
        Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`)
      );
    fDelay += sDleay;
  }
});