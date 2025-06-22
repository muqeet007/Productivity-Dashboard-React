import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";
import deleteIcon from '../assets/trash-alt.png'; // adjust path as needed



const TaskItem = () => {
  const { task } = useContext(TaskContext);

  return (
    <>
      <div className="flex justify-between ">
        <span id="task-title" className="text-black text-lg font-tertiary">{task.title}</span>
        <div className="flex space-x-10">
        
          <button
            className="backdrop-blur-md bg-greeny border border-white/30 text-black px-4 py-2 rounded-xl shadow-md 
            hover:bg-white/20 hover:text-greeno transition cursor-pointer focus:outline-none focus:ring-2 focus:ring-white/40"
          >
                 <img src={deleteIcon} alt="Delete" className="w-6 h-6" />
          </button>
        </div>
      </div>

    </>
  );
};

export default TaskItem;
