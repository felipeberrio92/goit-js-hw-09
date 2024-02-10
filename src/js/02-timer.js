import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';


const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    checkDates(selectedDates[0].getTime());
  },
};

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(ms / day); 
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor(((ms % day) % hour) / minute);
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

function checkDates(date) {
  if (date > Date.now()) {
    startButton.removeAttribute('disabled');
  } else {
    Notify.failure('Please select a date in the future');
    startButton.setAttribute('disabled', '');
  }
}

function addLeadingZero(value) {
  if (value < 10) {
    return value.toString().padStart(2, '0');
  }
  return value.toString();
}

flatpickr('#datetime-picker', options);

const startButton = document.querySelector('button');
const dateInput = document.querySelector('input');
const timePrint = document.getElementsByClassName('value');

startButton.setAttribute('disabled', '');

startButton.addEventListener('click', () => {
  let setTimeCounter = new Date(dateInput.value).getTime();
  startButton.setAttribute('disabled', '');
  dateInput.setAttribute('disabled', '');
  setInterval(() => {
    let newTime = setTimeCounter - Date.now();
    let { days, hours, minutes, seconds } = convertMs(newTime);

    timePrint[0].innerText = addLeadingZero(days);
    timePrint[1].innerText = addLeadingZero(hours);
    timePrint[2].innerText = addLeadingZero(minutes);
    timePrint[3].innerText = addLeadingZero(seconds);
  }, 1000);
});
  