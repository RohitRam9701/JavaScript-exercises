const caesar = function(word, shift) {
  let alphabet = [["A","a"],["B","b"],["C","c"],["D","d"],["E","e"],["F","f"],["G","g"],["H","h"],["I","i"],["J","j"],["K","k"],["L","l"],["M","m"],["N","n"],["O","o"],["P","p"],["Q","q"],["R","r"],["S","s"],["T","t"],["U","u"],["V","v"],["W","w"],["X","x"],["Y","y"],["Z","z"]];
  let cypher = [["A","a"],["B","b"],["C","c"],["D","d"],["E","e"],["F","f"],["G","g"],["H","h"],["I","i"],["J","j"],["K","k"],["L","l"],["M","m"],["N","n"],["O","o"],["P","p"],["Q","q"],["R","r"],["S","s"],["T","t"],["U","u"],["V","v"],["W","w"],["X","x"],["Y","y"],["Z","z"]];
  

  let newWord = [];

  if (shift > 0) {
    //if positive number, shift and push
    for (i = 0; i < shift; i++) {
      //cypher.unshift(cypher.pop());
      cypher.push(cypher.shift());
    }
  } else {
    //if negative number, turns to positive, pop and unshift
    for (i = 0; i < Math.abs(shift); i++) {
      cypher.unshift(cypher.pop());
      //cypher.push(cypher.shift());
    }
  }
  
  console.log("alphabet : " + alphabet);
  console.log("cypherla : " + cypher);

  for (j = 0; j < word.length; j++) {
    let char1 = word.charAt(j);
    console.log(char1);
    for (k = 0; k < alphabet.length; k++) {
      //let char2 = alphabet[k];
      if (char1 === alphabet[k][0]) {
        newWord.push(cypher[k][0]);
        break;
      } else if (char1 === alphabet[k][1]) {
        newWord.push(cypher[k][1]);  
        break;
      } else if (char1 === ',' || char1 === ' ' | char1 === '!') {
        newWord.push(char1);
        break;
      }
    }
  }

  console.log(newWord);
  let lastWord = newWord.join(""); //join array elements to a string without any separator ""
  console.log(lastWord);
  return lastWord;
  // console.log(lastWord.replace(/,/g, ""));
}

module.exports = caesar
