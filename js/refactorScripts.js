//first solution was pretty repetitive

function createPuzzle(userString) {
  const characterArray = userString.split("");
  for (let index = 0; index < characterArray.length; index += 1) {
    if (characterArray[index] == "a" || characterArray[index] == "A") {
      characterArray[index] = "-";
    } else if (characterArray[index] == "e" || characterArray[index] == "E") {
      characterArray[index] = "-";
    } else if (characterArray[index] == "i" || characterArray[index] == "I") {
      characterArray[index] = "-";
    } else if (characterArray[index] == "o" || characterArray[index] == "O") {
      characterArray[index] = "-";
    } else if (characterArray[index] == "u" || characterArray[index] == "U") {
      characterArray[index] = "-";
    }
  }
  return characterArray.join("");
}

//second solution using 1 giant if statement

function createPuzzle(userString) {
  const characterArray = userString.split("");
  for (let index = 0; index < characterArray.length; index += 1) {
    if (characterArray[index] == "a" || characterArray[index] == "A" || characterArray[index] == "e" || characterArray[index] == "E" || characterArray[index] == "i" || characterArray[index] == "I" || characterArray[index] == "o" || characterArray[index] == "O" || characterArray[index] == "u" || characterArray[index] == "U") {
      characterArray[index] = "-";
    }
  }
  return characterArray.join("");
}

//Third solution create vowelsArray and check if a character is in there

function createPuzzle(userString) {
  const characterArray = userString.split("");
  const vowelsArray = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
  for (let index = 0; index < characterArray.length; index += 1) {
    if (vowelsArray.includes(characterArray[index])) {
      characterArray[index] = "-";
    }
  }
  return characterArray.join("");
}

//Fourth Solution makes all characters lower case then checks if they are in the vowels array

function createPuzzle(userString) {
  const characterArray = userString.split("");
  const vowelsArray = ["a", "e", "i", "o", "u"];
  for (let index = 0; index < characterArray.length; index += 1) {
    if (vowelsArray.includes(characterArray[index].toLowerCase())) {
      characterArray[index] = "-";
    }
  }
  return characterArray.join("");
}

//Fifth solution using string instead of array for vowels

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