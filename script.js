
let taskArr = [];

function handleAddTask() {
    let task = document.getElementById("task-name").value;
    let desc = document.getElementById("task-desc").value;
    let taskStatus = 'To Do';

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

    if (taskArr.length > 3) {

        document.getElementById('scrollmsg').innerHTML = 'Scroll Down For More!';
    }




}
function isClicked(button) {
    let card = button.closest('.card');
    let taskIndex = Array.from(card.parentNode.children).indexOf(card); // Get index based on card position
    let statusLabel = card.querySelector('.task-status');

    // Update task status in the array
    taskArr[taskIndex].taskStatus = "Done";

    // Update the UI
    statusLabel.textContent = "Done";
    statusLabel.style.backgroundColor = "green";
    statusLabel.style.color = "white";
}


function displayTasks() {

    let taskRow = document.getElementById('row-task');
    taskRow.innerHTML = "";

    taskArr.forEach((taskObj, index) => {

        let taskBody = `
        <div class="col">
            <div class="card" style="width: 18rem; height: 20rem" >
                <div class="card-body bg-black text-white">
                    <h5 class="card-title">Task : ${taskObj.taskName}</h5>
                    <p class="card-text">Description : ${taskObj.description}</p>
                    <span class="task-status">${taskObj.taskStatus}</span>
                    <div class="row">
                     <div class="col">
                        <button class="btn-markasdone" onclick="isClicked(this)">Mark as Done</button>
                        </div>
                         <div class="col">
                        <button class="btn-delete-task" onclick="deleteTask(${index})">Delete Task</button>
                        </div>
                        <audio src="audio/added-task.mp3" autoplay></audio>
                        
                    </div>
                </div>
            </div>
        </div>`;

        taskRow.innerHTML += taskBody;
    });


}

function deleteTask(index) {
    let taskRow = document.getElementById('row-task');
    taskRow.innerHTML = "";

    taskArr.splice(index, 1);
    displayTasks();

    let taskDeleted = `
     <audio src="audio/deleted.mp3" autoplay></audio>
    `;
    taskRow.innerHTML += taskDeleted;


}



