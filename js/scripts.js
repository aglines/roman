// BACK END LOGIC

var translation = function(arabicInput){

var outputArray = [];
var digits = ["1","2","3","4","5","6","7","8","9"];

// later:  check <4000
// later: check actual number input

// arabicInput is a string
// split it into an array to loop over
arabicArray = arabicInput.split("");
// reverse array so we process ones first
arabicArray.reverse();
// debugger
// for all elmts in user input "arabicArray",
// loop thru digits 1-9,
for(var i = 0; i <= digits.length; i++){
  if (digits[i] === arabicArray[0]) {
    console.log(digits[i]);
  }
}

  // what column are we in


    // do a hard-coded assignment
    // and for R1 in ones column, R=>"I"
    // if R1 = is tens, Rout = "X", "C".


};

// return result;




// FRONT END LOGIC
$(document).ready(function(){
  $("form#userForm").submit(function(event) {
  event.preventDefault();
  var userNumber = $("#input").val();

  var output = translation(userNumber);

  $("#output").show();
  });
});
