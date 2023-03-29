function addAppear(answerNumber, arrowNumber, questionNumber) {
  const questionElement = document.getElementById(answerNumber);
  const arrowElement = document.getElementById(arrowNumber);
  const boldElement = document.getElementById(questionNumber);
  if (questionElement.classList.contains("appear")) {
    questionElement.classList.remove("appear");
    arrowElement.classList.remove("upSideDown");
    boldElement.classList.remove("fontWeight");
  } else {
    questionElement.classList.add("appear");
    arrowElement.classList.add("upSideDown");
    boldElement.classList.add("fontWeight");
  }
  console.log("clicked question");
}
