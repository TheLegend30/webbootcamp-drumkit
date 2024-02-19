const makeSound = function (buttonKey) {
  let instrument = "";
  switch (buttonKey) {
    case "w":
      instrument = "crash";
      break;
    case "a":
      instrument = "kick-bass";
      break;
    case "s":
      instrument = "snare";
      break;
    case "d":
      instrument = "tom-1";
      break;
    case "j":
      instrument = "tom-2";
      break;
    case "k":
      instrument = "tom-3";
      break;
    case "l":
      instrument = "tom-4";
      break;
    default:
      return;
  }
  let audio = new Audio("./sounds/" + instrument + ".mp3");
  audio.play();
};

const animateButton = function (buttonKey) {
  try {
    var activeButton = document.querySelector("." + buttonKey);
    activeButton.classList.add("pressed");
    setTimeout(() => activeButton.classList.remove("pressed"), 100);
  } catch {
    return;
  }
};

document.querySelectorAll(".drum").forEach((val) =>
  val.addEventListener("click", () => {
    makeSound(val.textContent);
    animateButton(val.textContent);
  })
);

document.addEventListener("keydown", (e) => {
  makeSound(e.key);
  animateButton(e.key);
});
