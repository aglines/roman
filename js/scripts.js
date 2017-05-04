// BACK END LOGIC
var outputArray = [];

var translation = function(arabicInput){
var i = 0;
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
      // console.log("column is ", j);
      if ( j === 0 ) {
        column = "ones";
        RomanHardcode(digits[i], column);
      }
      else if ( j === 1 ) {
        column = "tens";
        RomanHardcode(digits[i], column);
      }
      else if ( j === 2) {
        column = "hundreds";
        RomanHardcode(digits[i], column);
      }
      else {
        column = "thousands";
        RomanHardcode(digits[i], column);
      }

    } // COLUMN

}; // FOR LOOP DIGITS

}; //  ARABIC ARRAY LOOPs
 return outputArray ;

}; // FUNCTION


var RomanHardcode = function(digit, column){
  // console.log("col ", column, "digit ", digit);
  // change this line later

  switch (column){
    case ("ones"):
      console.log("column ", column);
      if (digit === "1") {
        outputArray.push("I");
      }
      if (digit === "2") {
        outputArray.push("II");
      }
      if (digit === "3") {
        outputArray.push("III");
      }
      if (digit === "4") {
        outputArray.push("IV");
      }
      if (digit === "5") {
        outputArray.push("V");
      }
      break;
    case ("tens"):
      console.log("column ", column);
      break;

}; // SWITCH


  return outputArray;
}; // ROMAN HARDCODE



// FRONT END LOGIC
$(document).ready(function(){
  $("form#userForm").submit(function(event) {
  event.preventDefault();
  var userNumber = $("#input").val();

  var output = translation(userNumber);
  $("#output").append(outputArray);
  });
});
