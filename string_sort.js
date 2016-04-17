// # Problem Statement
// # Create a method named 'sort_string' which accepts a String
// # and rearranges all the words in ascending order, by length.
// # Assume a single space to separate the words.
//
// # Example: Given a string "Sort words in a sentence", it should return "a in Sort words sentence".
//
// Ruby solution:
// def sort_string(string)
//   string.split.sort_by(&:length)
// end
//
// print sort_string("Sort words in a sentence")

function sort_string(string){
  var stringArray = string.toLowerCase().split(' '); //lowercased array of strings separated by commas
  var sortedArray = stringArray.sort(function(a,b){
    return (a.length - b.length);
  });
  console.log(sortedArray);
}

sort_string("Ruby is the best language in the world.");
