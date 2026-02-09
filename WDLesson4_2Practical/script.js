// General Guideline
/*
function name(){
  // Step 1: Create variables for the information from the text inputs and the output element

  // Step 2: Complete the process
  //    a) Perform any calculations necessary
  //    b) Perform necessary decisions

  // Step 3: Display the output

}
*/

/* Challenge 2:  Create the function for Challenge 1 scenario */
function area(){
  let
}


/* Challenge 3:  Complete the function for Pets Challenge on pets.html.  
1) Review the HTML for the UI.  Remember dropdown boxes are just input.
2) You will need to write HTML as part of the output.  
   For example, output.innerHTML = `<input src="pic.png">` would place the image in the <div>*/
function pet(){
let a = document.getElementById("animal").value;
let e = document.getElementById("emotion").value;
let output = document.getElementById("output");
let filename ="";
if (a == "Bear" && e =="funny"){
  filename ="funnyBear.jpg";
}
if (a == "Bear" && e =="sad"){
  filename ="sadBear.jpg";
}
if (a == "cat" && e =="funny"){
  filename ="funnycat.jpg";
}
if (a == "cat" && e =="sad"){
  filename ="sadcat.jpg";
}
if (a == "Dog" && e =="funny"){
  filename ="funnyDogjpg";
}

if (a == "Dog" && e =="sad"){
  filename ="sadDogjpg";
}
output.innerHTML =`<img src ="${filename}">`;
}