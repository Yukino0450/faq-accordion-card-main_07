function addAppear(answerNumber, arrowNumber) {
  const questionElement = document.getElementById(answerNumber);
  const arrowElement = document.getElementById(arrowNumber);
  if (questionElement.classList.contains("appear")) {
    questionElement.classList.remove("appear");
    arrowElement.classList.remove("upSideDown");
  } else {
    questionElement.classList.add("appear");
    arrowElement.classList.add("upSideDown");
  }
  console.log("clicked question");
}
