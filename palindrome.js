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
  //downcase word, remove whitespace
  var newWord = string.replace(" ","").toLowerCase();
  console.log(newWord);
  //split string to array, reverse chars, join chars
  var reversedWord = function reverseString(str){
    return str.split('').reverse('').join('');
  };
  console.log(reversedWord(newWord));
  if (reversedWord == newWord){
  console.log("It's a palidrome");
} else {
    console.log("This word does not reverse to itself.");
  }
}

palidrome("Michelle D");
palidrome("tacoCat");
