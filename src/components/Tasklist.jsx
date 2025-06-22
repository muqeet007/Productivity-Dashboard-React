import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";
import TaskItem from "./Taskitem";

const TaskList = () => {

  const {tasks}=useContext(TaskContext)
  return (
    <aside className="h-188 w-120 flex flex-col p-4  bg-green-50 mt-1 mr-0.75">
      {/* Heading */}
      <div className="relative flex justify-between items-center h-20 mb-6">
       <div>
         <h2 className=''>
          <span className="text-black text-2xl font-secondary ">
            Tasks 
          </span>
          
          <span className="space-x-0.5 text-greeno text-2xl text-bold font-secondary  ">
            &#45;List
          </span>
          
        </h2>
        <span className="absolute bottom-0 left-0 w-full h-1 bg-white rounded-full"></span>
       </div>
      </div>

      {/* Task items will go here */}
     <div className="space-y-4 overflow-y-auto max-h-full">
        {/* Example Task */}
       { tasks.map((item, index) => {
          return <TaskItem idx={index} title={item.name} id={item.id} />})}
      </div>
    </aside>
  );
};

export default TaskList;
