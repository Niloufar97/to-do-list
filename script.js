const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
let close;
//add a new task to the list
function addToList() {
  if (inputBox.value === "") {
    alert("You have to write something");
  } else {
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    listContainer.appendChild(li);
    close = document.createElement('img')    
    close.src = "images/delete.png";
    
    li.appendChild(close);

  }
  inputBox.value = "";
  saveData()
}
//add new task by pressing enter key
inputBox.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    document.getElementById("myBtn").click();
  }
});

//remove a task or mark it as done
listContainer.addEventListener('click', function (ev) {
  if (ev.target.tagName === 'LI') {
      ev.target.classList.toggle('checked');
      saveData()
  }
  else if(ev.target.tagName === "IMG"){
    ev.target.parentElement.remove();
    saveData()
  }  
}, false);

//use localstorage to save the tasks on the browser
function saveData(){
  localStorage.setItem("data",listContainer.innerHTML);
}

function showTask(){
  listContainer.innerHTML = localStorage.getItem("data");
}
showTask()