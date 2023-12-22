const inputBox = document.getElementById("input-box");
const listCont = document.getElementById("list-container");

//task-list creation
function addTask(){
  if(inputBox.value === '')
  {
    alert('You must write something to add to list');
  }
  else
  {
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    listCont.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
  }
  inputBox.value='';
  saveData();
}
//keyboardInput
inputBox.addEventListener("keyup", (e)=>{
if(e.keyCode ===13) {
  addTask();
}
})
//list-editing
listCont.addEventListener("click", function(e){
  console.log(e);
  if(e.target.tagName ==='SPAN') {
    e.target.parentElement.remove();
    saveData();
  }
  else if(e.target.tagName==='LI'){
    e.target.classList.toggle("checked");
    saveData();
  }
},false)
//data saving
function saveData(){
  localStorage.setItem("data", listCont.innerHTML);
}
function showData(){
  listCont.innerHTML = localStorage.getItem("data");
}
showData();