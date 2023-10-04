function isPalindrome(word) {
  // Write your algorithm here
  const reversedWord = word.split('').reverse().join('')

  // const splitWord = word.split('')
  // const reversedWord = splitWord.reverse()
  // const finalWord = reversedWord.join('')

  // if(word === reversedWord){
  //   return true
  // }else{
  //   return false
  // }

  return word === reversedWord ? true : false;
  
}

/* 
  Add your pseudocode here
*/
//take the word, split it into an array to allow us to call the reverse method on it and store it in it's own variable, let's say splitWord
//take the splitWord and call the reverse method on it storing it in another variable let's say reversedWord
//take the reversedWord and join it back into a string and store it in a variable let's say finalWord.
//Write if statements to compare the word to the finalWord.
//Return true if the same and false if not.


/*
  Add written explanation of your solution here
*/

// So what I understand is that I should write a function that takes in a word and determines if that word would still be the same even if it was reversed. An example would be a word like mum or racecar.


// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("Expecting: true");
  console.log("=>", isPalindrome("mum"))

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));

  console.log("Expecting: true")
  console.log("=>", isPalindrome("abba"))
}

module.exports = isPalindrome;
