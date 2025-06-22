import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";
import deleteIcon from '../assets/trash-alt.png'; // adjust path as needed



const TaskItem = ({idx,title,id}) => {
  const {setTask} = useContext(TaskContext);

  const handleDelete=(deleteId)=>
  {
    setTask((prevTasks) => prevTasks.filter((task) => task.id !== deleteId));
  }

  return (
    <>
      <div className="flex justify-between space-x-4">
        <span className="text-black text-lg font-tertiary space-lx-2">
          {idx+1})
        </span>
        <span id="task-title" className="text-black text-lg font-tertiary flex-1">{title}</span>
         <button
        className="flex-shrink-0 backdrop-blur-md bg-greeny border border-white/30 text-black p-2 rounded-xl shadow-md 
          hover:bg-white/20 hover:text-greeno transition cursor-pointer focus:outline-none focus:ring-2 focus:ring-white/40"
        
        onClick={()=>
          handleDelete(id)
        }
      >
        <img src={deleteIcon} alt="Delete" className="w-6 h-6" />
      </button>
      </div>

    </>
  );
};

export default TaskItem;
