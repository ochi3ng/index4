let addToDoButton=document.getElementById("addToDo");
let toDocontainer=document.getElementById("toDocontainer");
let inputfield=document.getElementById("inputfield");

addToDoButton.addEventListener("click",function(){
    var paragraph=document.createElement("p");
    console.log(inputfield.Value)
    paragraph.innerText=inputfield.Value;
    toDocontainer.appendChild(paragraph);
})