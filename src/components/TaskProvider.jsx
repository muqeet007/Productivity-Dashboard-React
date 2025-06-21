import { useState } from "react";
import { TaskContext } from "../context/TaskContext";

const TaskProvider=({children})=>
{
    const [task,setTask]=useState(
        {
            id: '334',     // Unique task ID (Date.now() or UUID)
            title: 'sccc',           // Task title
            notes: 'string',           // Optional notes/details
            completed: 'boolean',      // Done or not
            createdAt: 'string',       // Timestamp (ISO or readable format)
            updatedAt: 'string'        // Updated timestamp
    })
    return(
        <TaskContext.Provider value={{task,setTask}}>
            {children}
        </TaskContext.Provider>
    );

}

export default TaskProvider;