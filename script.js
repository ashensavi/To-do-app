
let taskArr=[];

function handleAddTask() {
    let task = document.getElementById("task-name").value;
    let desc = document.getElementById("task-desc").value;
    let taskStatus = "To Do";

    let taskObj = {
        taskName: task,
        description: desc,
        taskStatus: taskStatus
    };
    
    taskArr.push(taskObj);
    displayTasks();

    console.log(taskArr);
    
    if (task === "") {
        alert('Please Enter a Task Name!');
        return;
    }
    

   
  
}
function displayTasks(){

    let taskRow = document.getElementById('row-task');
    taskRow.innerHTML = "";

    taskArr.forEach((taskObj, index) =>{
 
    let taskBody = `
        <div class="col">
            <div class="card" style="width: 25rem;">
                <div class="card-body bg-black text-white">
                    <h5 class="card-title">${taskObj.taskName}</h5>
                    <p class="card-text">${taskObj.description}</p>
                    <span class="task-status" style="background-color: #ffc107;">${taskObj.taskStatus}</span>
                    <div class="row">
                     <div class="col">
                        <button class="btn-markasdone btn btn-success" onclick="isClicked(this)">Mark as Done</button>
                        </div>
                         <div class="col">
                        <button class="btn-delete-task btn btn-danger" onclick="deleteTask(${index})">Delete Task</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>`;

    taskRow.innerHTML += taskBody;
});


}

function deleteTask(index) {
    taskArr.splice(index, 1);
    displayTasks(); 
}
   



function isClicked(button) {

    let statusLabel = button.closest('.card-body').querySelector('.task-status');
    
  
    statusLabel.textContent = "Done";
    

    statusLabel.style.backgroundColor = "green";
    statusLabel.style.color = "white";
}

function deleteTask(index) {
    taskArr.splice(index, 1);
    displayTasks();
}


