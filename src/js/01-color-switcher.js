
const startButton = document.getElementById('startButton');
const stopButton = document.getElementById('stopButton');

    let intervalId;

    function getRandomHexColor() {
        return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
      }

      function changeBackgroundColor() {
        const randomColor = getRandomHexColor();
        document.body.style.backgroundColor = randomColor;
      }
  
      function startChangingColor() {
        startButton.disabled = true;
        intervalId = setInterval(changeBackgroundColor, 1000);
      }
  
      function stopChangingColor() {
        startButton.disabled = false;
        clearInterval(intervalId);
      }
  
      startButton.addEventListener('click', startChangingColor);
      stopButton.addEventListener('click', stopChangingColor);