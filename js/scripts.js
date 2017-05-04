// BACK END LOGIC

var translation = function(arabicInput){

// later:  check <4000
// later: check actual number input

// arabicNumber is a string
// split it into an array to loop over
arabicArray = arabicInput.split("");
// reverse array so we process ones first
arabicArray.reverse();
// for all elmts in  arabicArray,
arabicArray.forEach(function(oneThruNine)

// last index in array = "ones" *(always)
// next to last = tens, etc

// for Engnumbers 1-9,
// if 1 -> R1
  // and for R1 in ones column, R=>"I"
  // if R1 = is tens, Rout = "X", "C".

  // all hard corded





// return result;

}



// FRONT END LOGIC
$(document).ready(function(){
  $("form#userForm").submit(function(event) {
  event.preventDefault();
  var userNumber = $("#input").val();

  var output = translation(userNumber);

  $("#output").show();
  });
});
