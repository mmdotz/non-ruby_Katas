// Description:
//
// write me a function stringy that takes a size and returns a string of alternating '1s' and '0s'.
//
// the string should start with a 1.
//
// a string with size 6 should return :'101010'.
//
// with size 4 should return : '1010'.
//
// with size 12 should return : '101010101010'.
//
// The size will always be positive and will only use whole numbers.

// getting started, need to eval odd or even
function stringy(size) {
  if (size > 1) {
    console.log(("1").repeat(size));
  } else {
    console.log("1");
  }
}

stringy(3);

function numberIs(i) {
	if ((i % 2).zero?) {
		console.log("odd");
	} else {
		console.log("even");
	}
}

numberIs(3);
numberIs(4);
