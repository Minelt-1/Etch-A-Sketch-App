const boardDiv = document.querySelector(".board");
const reset = document.querySelector(".reset");
let color = "black";

function board(Times) {

   boardDiv.style.display = "grid";
   boardDiv.style.gridTemplateColumns = `repeat(${Times}, 1fr)`;
   boardDiv.style.gridTemplateRows = `repeat(${Times}, 1fr)`;

   for (let i = 0; i < Times * Times; i++) {

   const newdiv = document.createElement("div");

      newdiv.style.border = ".1px solid silver"

      boardDiv.appendChild(newdiv);

   newdiv.addEventListener("mouseover", setclr)

   reset.addEventListener("click", () =>{
      newdiv.style.background = "transparent";
   })


}}

function funask(){

const ask = prompt("how Many cells do you want? enter an number from 1 to 100.")
if (isNaN(ask)) {
   alert("enter an valid number")
} else if (ask >= 1 && ask <= 100) {
   board(ask)

} else if (ask < 0 || ask === 0) {
   alert("please enter an positive number")
} else {
   alert("enter a number from 1 to 100")
}}

funask()


function setclr(){
   this.style.background = color;
}

function changeColor(choice){
   color = choice;
}
