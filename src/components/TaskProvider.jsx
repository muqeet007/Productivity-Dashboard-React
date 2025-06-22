import { useState } from "react";
import { TaskContext } from "../context/TaskContext";

const TaskProvider=({children})=>
{
    const [tasks,setTask]=useState([])
    return(
        <TaskContext.Provider value={{tasks,setTask}}>
            {children}
        </TaskContext.Provider>
    );

}

export default TaskProvider;