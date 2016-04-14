// # Problem Statement
// # Given a sentence containing multiple words, find the frequency of a given
//  # word in that sentence.
//
// # Construct a method named 'find_frequency' which accepts two arguments
// # 'sentence' and 'word', both of which are String objects.
// #
// # Example: The method, given 'Ruby is The best language in the World' and
// # 'the', should return 2 (comparison should be case-insensitive)
// Ruby:
//
// def find_frequency(sentence, word)
//   word = word.downcase
//   sentence.downcase.split.count(word)
// end
//
// puts find_frequency('Ruby is The best language in the World', 'the')

function findFrequency(sentence, word){
  var regexWord = new RegExp(word, 'gi');
  console.log(regexWord);
  var found = (sentence.match(regexWord) || []).length;
  console.log(found);
}

findFrequency("Ruby is The best language in the World", "the");
