// BACK END LOGIC
var outputArray = [];
var column = "";
var translation = function(arabicInput){
outputArray=[];
var i = 0;
var digits = ["1","2","3","4","5","6","7","8","9"];
var result = "";
var tempNum = parseInt(arabicInput);
  if ( tempNum <4000) {
// later: check actual number input
// split it into an array to loop over
arabicArray = arabicInput.split("");
// reverse array so we process ones first
arabicArray.reverse();
// for all elmts in user input "arabicArray"
for (var j = 0; j <= (arabicArray.length - 1) ; j++ ) {
 // debugger
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
outputArray.reverse();
 return outputArray ;
} // IF
 else {
  var invalidInput = "Please enter a number less than 4000.";
  return invalidInput;
}
};



var RomanHardcode = function(digit, column){
  // console.log("col ", column, "digit ", digit);
  // change this line later

  switch (column){
    case ("ones"):
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
      if (digit === "6") {
        outputArray.push("VI");
      }
      if (digit === "7") {
        outputArray.push("VII");
      }
      if (digit === "8") {
        outputArray.push("VIII");
      }
      if (digit === "9") {
        outputArray.push("IX");
      }
      break;
    case ("tens"):
      if (digit === "1") {
        outputArray.push("X");
      }
      if (digit === "2") {
        outputArray.push("XX");
      }
      if (digit === "3") {
        outputArray.push("XXX");
      }
      if (digit === "4") {
        outputArray.push("XL");
      }
      if (digit === "5") {
        outputArray.push("L");
      }
      if (digit === "6") {
        outputArray.push("LX");
      }
      if (digit === "7") {
        outputArray.push("LXX");
      }
      if (digit === "8") {
        outputArray.push("LXXX");
      }
      if (digit === "9") {
        outputArray.push("XC");
      }
      break;
    case ("hundreds"):
      if (digit === "1") {
        outputArray.push("C");
      }
      if (digit === "2") {
        outputArray.push("CC");
      }
      if (digit === "3") {
        outputArray.push("CCC");
      }
      if (digit === "4") {
        outputArray.push("CD");
      }
      if (digit === "5") {
        outputArray.push("D");
      }
      if (digit === "6") {
        outputArray.push("DC");
      }
      if (digit === "7") {
        outputArray.push("DCC");
      }
      if (digit === "8") {
        outputArray.push("DCCC");
      }
      if (digit === "9") {
        outputArray.push("CM");
      }
      break;
      default:
      outputArray.push("M");
}; // SWITCH
  return outputArray;
}; // ROMAN HARDCODE


//////////////////////////////////////////////////
// FRONT END LOGIC
$(document).ready(function(){
  $("form#userForm").submit(function(event) {
  event.preventDefault();
  var userNumber = $("#input").val();

  var output = translation(userNumber);
  // $("#output").clear;
  $("#output").append(output, " -- ");
  });
});
