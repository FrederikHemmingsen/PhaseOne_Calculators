function showPane(index) {
  var frames = document.querySelectorAll("iframe");
  var buttons = document.querySelectorAll(".tab-buttons button");
  for (var i = 0; i < frames.length; i++) {
    frames[i].classList.remove("active");
    buttons[i].classList.remove("active");
  }
  frames[index].classList.add("active");
  buttons[index].classList.add("active");
}

function showInstructions() {
  var instructions = document.getElementById("instructions");
  if (instructions.style.display === "none") {
    instructions.style.display = "block";
  } else {
    instructions.style.display = "none";
  }
}