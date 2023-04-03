function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
let colorGereratorId = null;

const startBtn = document.querySelector('button[data-start]');
const stopBtn = document.querySelector('button[data-stop]');

const btnGenerateColorClickHandler = () => {
  colorGereratorId = setInterval(() => {
    document.body.style.backgroundColor = getRandomHexColor();
    startBtn.disabled = true;
  }, 1000);
};

startBtn.addEventListener('click', btnGenerateColorClickHandler);
stopBtn.addEventListener('click', () => {
  clearInterval(colorGereratorId);
  startBtn.disabled = false;
});
