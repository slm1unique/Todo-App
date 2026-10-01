const taskInput = document.getElementById("input-text");
const addButton = document.getElementById("add-task");
const listUl = document.getElementById("list-container");


addButton.addEventListener("click",() =>{

    if(taskInput.value.trim()==="") return;



    const taskLi = document.createElement("li");
    
    const deleteBtn = document.createElement("Button");
    deleteBtn.classList.add("btn-delete");
    deleteBtn.textContent = "DELETE";
    


 




    taskLi.textContent = taskInput.value.trim();
  
    taskLi.classList.add("task");
  taskLi.append(deleteBtn);  
    listUl.append(taskLi);

    taskInput.value="";
    taskInput.focus();
    saveData();
})

listUl.addEventListener("click",(e)=>{
    if(e.target.classList.contains("btn-delete")){
        e.target.parentElement.remove();
    }
    else if(e.target.tagName ==="LI"){
        e.target.classList.toggle("done");
    }
    saveData();
})







taskInput.addEventListener("keydown",(e)=>{
    if(e.key === "Enter") addButton.click();
})


function saveData(){
    localStorage.setItem("data",listUl.innerHTML)
}
function showTask(){
    listUl.innerHTML = localStorage.getItem("data");
}
showTask();