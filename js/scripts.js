// BACK END LOGIC

var translation = function(arabicInput){
var i = 0;
var outputArray = [];
var digits = ["1","2","3","4","5","6","7","8","9"];
// debugger

// later: check actual number input
// later:  check <4000

// split it into an array to loop over
arabicArray = arabicInput.split("");
// reverse array so we process ones first
arabicArray.reverse();

// for all elmts in user input "arabicArray"
for (var j = 0; j <= (arabicArray.length - 1) ; j++ ) {

// loop thru digits 1-9,
  for(var i = 0; i <= digits.length; i++) {
    // when digit lands on the user input digit,
    if (digits[i] === arabicArray[j]) {
      // see which column we're on
      console.log("column is ", j);
    }

}; // FOR LOOP DIGITS

}; //  ARABIC ARRAY LOOPs
// return result ;

}; // FUNCTION




// FRONT END LOGIC
$(document).ready(function(){
  $("form#userForm").submit(function(event) {
  event.preventDefault();
  var userNumber = $("#input").val();

  var output = translation(userNumber);

  $("#output").show();
  });
});
