var tasks=[];

function addTask(){
    var taskInput = document.getElementById('todoInput');
    var taksValue= taskInput.value;
    //chacking if input is empty or not
    if(taksValue.trim() !==""){
        //add Task
tasks.push({
    text: taksValue,
    completed : false
})

taskInput.value="";
updateTodoList();
    }
}
function updateTodoList(){

const todoList = document.getElementById('todoList');
//clear existing data
todoList.innerText="";
tasks.forEach((task)=>{
    var listIteam = document.createElement('li');
listIteam.textContent=task.text;
listIteam.className = task.completed ? 'completed':""
listIteam.onclick = function(){
    toogleCompleted();
}
    todoList.appendChild(listIteam);
})
//function to calculate tods, completed
updateAggregrate()
}
function toogleCompleted(task)
{
    task.completed = !task.completed
updateTodoList();
}
function updateAggregrate(){
    var totalTasks = document.getElementById('totalTasks');
    var completedTasks = document.getElementById('completedTasks');
    var total=tasks.length;
    totalTasks.textContent = total;
    var completed = tasks.reduce((acc,task)=>{
        return task.completed ? acc+1 : acc
    },0)
     completedTasks.textContent=completed;
}
function filterTask(){
    var searchInput = document.getElementById('searchInput');
    var searchValue = searchInput.value.toLowerCase;
    tasks.filter((task)=>{
        return task.text.toLowerCase().includes(searchValue);
    })
    //update todolist with filter taks
    updateTodoListWithfilteredTasks(filterTask)
    {
        var todolist= document.getElementById('todolist');
todolist.innerHTML ="";
filterTask.forEach((task)=>{
    var listIteam= document.createElement('li');
    listIteam.textContent=task.text;
listIteam.className = task.completed ? 'completed':""
listIteam.onclick = function(){
    toogleCompleted(task);
}
    todolist.appendChild(listIteam);
})
    }
    updateAggregrate();
}