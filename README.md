Roman numeral translator code will translate a list of letters into a numeric value

We decided that accepting "English number" input would be easier to detect
"legal" input than accepting letters and detecting "legal" Roman numeral input.

We could process English numbers in two ways:
1. "Whole Value".
  - We'd take the largest R (Roman numeral) less than our whole
value input, and assign that R to our output array.
  - Subtract that R from the total value, and repeat the process
  on the remainder, until we reach ones.

55 =>  50 => L
5 left over > V

  - Disadvantage:  we'd run into problems with 9s, having already
  processed that input, needing to retrace our steps in the array.

2. "Ones Tens Hundreds" - process English input "backwards",
starting from the ones column, then tens...
  - Advantage: 9s, a problem in R, can be hard-coded, so that we need
  not retrace our steps.



BEHAVIORAL SPECS

Input value:  any English number.
Output value: Roman numeral equivalent

PSEUDOCODE

outermost loop: must be a number
then: must be a number <= 3999
