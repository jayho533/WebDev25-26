/* Challenge 2: Create a function to serve as the event handler for the distance UI. Guidelines,
      1) Create variables and retrieve the information from the text inputs you created in Challenge 1.
      2) Perform the necessary calculations
      3) Display the results in the appropriate element
*/
function distance(){
   let x1 = parseFloat(document.getElementById("x1").value);
   let y1 = parseFloat(document.getElementById("y1").value);
   let x2 = parseFloat(document.getElementById("x2").value);
   let y2 = parseFloat(document.getElementById("y2").value);
 






}

/* Challenge 4: Create a function to serve as the event handler for the compound interest UI. Guidelines,
      1) Create variables and retrieve the information from the text inputs you created in Challenge 1.
      2) Perform the necessary calculations
      3) Display the results in the appropriate element
*/

function calculateCompoundInterest(){
 let P = parseFloat(document.getElementById("principalInput").value);
  let r = parseFloat(document.getElementById("rateInput").value) / 100; // Convert percentage to decimal
  let t = parseFloat(document.getElementById("timeInput").value); // Years
  let n = parseFloat(document.getElementById("compoundInput").value);
}

