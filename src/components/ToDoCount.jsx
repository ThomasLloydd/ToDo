import React from 'react';

const ToDoCount = ({ filteredTodos, status} ) => {


let pluralTask;

if (filteredTodos.length === 1){
    pluralTask = "task"
} else {
    pluralTask = "tasks"
}

let filteredTasks = filteredTodos.filter(task => task.completed === false);

let todoLength;

if (filteredTodos.length === 0){
    todoLength = "none";
} else {
    todoLength = filteredTodos.length;
}


if (status === 'completed'){
    return (
    <h2>You have completed {todoLength} of your tasks!</h2>
    )
} else {
return (
<h2>You have {filteredTasks.length} {pluralTask} to complete</h2>
)
}

}

export default ToDoCount;