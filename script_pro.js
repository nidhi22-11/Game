let boxes=document.querySelectorAll(".box");
let resetbtn= document.querySelector("#reset-btn");
let winner=document.querySelector("#winwin");
let newbtn=document.querySelector("#new-btn");
let hide=document.querySelector(".hide1");
let hide2=document.querySelector(".hide2");
let turnO=true;
 
const winpatterns=[
    [0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]

 ]

 boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        console.log("box was clicked");
      if(turnO)  {
        box.innerText="0";
        turnO=false;
      }
      else{
        box.innerText="X";
        turnO=true;
      }
      box.disabled=true;

   checkwinner ();
      
    });
 });
 const checkwinner = ()=>{
  for(let pattern of winpatterns )
  { 

      let pos1val=boxes[pattern[0]].innerText ;
      let pos2val=boxes[pattern[1]].innerText ;
      let pos3val=boxes[pattern[2]].innerText ;

      if( pos1val!="" && pos2val!="" && pos3val !=""){
         if(pos1val===pos2val && pos2val===pos3val){
             winner.innerText=(pos1val);
           console.log(winner);
           disabledBoxes();
          hide2.classList.remove("hide2");
          hide.classList.remove("hide1");
         }
      }
  }
 };


 const disabledBoxes=()=>{
        for(let val of boxes){
           val.disabled=true;
        }
 };

 const enableBoxes=()=>{
        for(let val of boxes){
           val.disabled=false;
        }
 };



 resetbtn.addEventListener("click",()=>{
  console.log("reset btn is clicked");

  reset();
 });

  newbtn.addEventListener("click",()=>{
  console.log("new btn is clicked");

  reset();
 });
 

const reset=()=>{
    turnO=true;
    for(let ele of boxes){
      ele.innerText="";
    }
      enableBoxes();
        hide2.classList.add("hide2");
        hide.classList.add("hide1");
  };