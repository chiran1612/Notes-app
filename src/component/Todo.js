import React, { useEffect, useState }  from "react";

function Todo(){
    const[tasks,setTasks]=useState([]);
    const[currentTask,setCurrentTask]=useState("");

let handeladdevent=()=>{
    setTasks([...tasks,{task:currentTask,taskID:tasks.length+1}])
    setCurrentTask("")
}
let handleDelete = (taskID)=>{
    let narr=tasks.filter((taskObj)=>{
      return taskObj.taskID!==taskID;
    })
      setTasks([...narr])        
  }

return(
    <>
    <h1>Notes App</h1>
    <div class="A">
    <input  type="text" placeholder="Enter your task" value={currentTask} onChange={(e)=>setCurrentTask(e.target.value)}/>
    <button class="btn btn-primary" onClick={handeladdevent}>Add Task</button>
    </div>
    <ul>
               {tasks.map((taskObj)=>(
                    <li key={taskObj.taskID}>
                        <p>{taskObj.task}</p>
                        <button onClick={()=>handleDelete(taskObj.taskID)}  class="btn btn-danger" >Delete</button>
                    </li>
                ))} 
    </ul>
    </>
)
}
export default Todo;