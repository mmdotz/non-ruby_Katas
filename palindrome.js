// Ruby solution:
// def palindrome(string)
//   new_word = string.gsub(" ","").downcase
//   puts new_word.reverse == new_word
// end
//
// palindrome("Taco cat")
// palindrome("Michelle")
// palindrome("hiiH")
// palindrome("124")

function palidrome(string){
  //remove whitespace
  var newWord = string.replace(" ","");
  //split string to array, reverse chars, join chars
  function reverseString(newString){
    newString.split('').reverse('').join('');
  }
  var reversedWord = reverseString(newWord);
  if (reversedWord == newWord)
  console.log("It's a palidrome");
  else {
    console.log("This word does not reverse to itself.");
  }
}

palidrome("Michelle");
palidrome("tacocat");
