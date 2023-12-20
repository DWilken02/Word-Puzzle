//Business Logic
function createPuzzle(userString) {
  const characterArray = userString.split("");
  const vowelsString = "aeiou";
  for (let index = 0; index < characterArray.length; index += 1) {
    if (vowelsString.includes(characterArray[index].toLowerCase())) {
      characterArray[index] = "-";
    }
  }
  return characterArray.join("");
}

//UI Logic
function handleFormSubmission(event) {
  event.preventDefault();
  const userInputString = document.getElementById("userInput").value;
  const puzzleStringResult = createPuzzle(userInputString);
  document.getElementById("userInput").value = "";
  document.getElementById("result").innerText = puzzleStringResult; 
}

window.addEventListener("load", function() {
  document.querySelector("form#puzzleForm").addEventListener("submit", handleFormSubmission);
})
