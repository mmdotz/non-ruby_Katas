// Ruby solution:

// def fizzbuzz(max)
//   max.times do |n|
//     if n % 15 == 0
//       puts "fizzbuzz"
//     elsif n % 5 == 0
//       puts "buzz"
//     elsif n % 3 == 0
//       puts "fizz"
//     else
//       puts n
//     end
//   end
// end


function fizzBuzz(max) {
  for (var i = 1; i < max; i++) {
    if (i % 15 === 0){
      console.log("fizzbuzz");
    } else if (i % 5 === 0) {
      console.log("buzz");
    } else if (i  % 3 === 0) {
      console.log("fizz");
    } else {
      console.log(i);
    }
  }
}

fizzBuzz(100);
