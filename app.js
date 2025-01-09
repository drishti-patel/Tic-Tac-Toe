let boxes=document.querySelectorAll(".box");
let resetbtn=document.querySelector("#reset-btn");
let newGameBtn=document.querySelector("#new-btn");
let msgContain=document.querySelector(".msg");
let msg=document.querySelector("#winmsg");
let turnO= true;   //playerX/playerO
const winpattern=[
[0,1,2],
[0,3,6],
[0,4,8],
[1,4,7],
[2,5,8],
[2,4,6],
[3,4,5],
[6,7,8],
];
const resetGame=()=>{
    turnO=true;
enableboxes();
msgContain.classList.add("hide");
}

boxes.forEach((box)=> {
    box.addEventListener("click",()=> {
if(turnO){               //player O
    box.innerText="O";
    box.style.color="green";
    turnO=false;
}
else{
    box.innerText="X";
    box.style.color="#953131";
    turnO=true;
}
box.disabled=true;
checkWinner();
if(count==9){
}
    })
});

const disableboxes=() =>{
    for(let box of boxes){
        box.disabled=true;
    }
}
const enableboxes=() =>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}
const showWinner= (winner)=>{
msg.innerText= "Congratulations, winner!!";
msgContain.classList.remove("hide");
disableboxes();
};
const checkWinner=()=>{
    for(let pattern of winpattern){
let p1=boxes[pattern[0]].innerText;
let p2=boxes[pattern[1]].innerText;
let p3=boxes[pattern[2]].innerText;

if(p1!=""&& p2!=""&& p3!=""){
    if(p1==p2&& p2==p3){
        showWinner(p1);
    }
}
    }
}
newGameBtn.addEventListener("click",resetGame);
resetbtn.addEventListener("click",resetGame);
