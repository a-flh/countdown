let totalSeconds;
let interval;

function countDown() {
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;

  countdownDisplay.textContent = `${minutes} : ${
    seconds < 10 ? "0" + seconds : seconds
  }`;

  if (totalSeconds > 0) {
    totalSeconds--;
  } else {
    countdownDisplay.textContent = "C'est terminé !";
    clearInterval(interval);
  }
}

form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (isNaN(choice.value)) {
    alert("Veuillez sélectionner un chiffre");
  } else {
    totalSeconds = choice.value * 60;
    choice.value = "";
    clearInterval(interval);
    interval = setInterval(countDown, 1000);
  }
});
