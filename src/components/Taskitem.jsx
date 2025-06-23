import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";
import { ThemeContext } from "../context/ThemeContext";
import deleteIcon from '../assets/trash-alt.png'; // adjust path as needed

const TaskItem = ({ idx, title, id }) => {
  const { setTask } = useContext(TaskContext);
  const { theme } = useContext(ThemeContext);

  const handleDelete = (deleteId) => {
    setTask((prevTasks) => prevTasks.filter((task) => task.id !== deleteId));
  };

  return (
    <div className={`flex justify-between items-center space-x-4 p-2 rounded-lg transition-colors duration-500 
      ${theme ? 'bg-gray-800' : 'bg-green-50'}`}>
      
      <span className={`text-lg font-tertiary ${theme ? 'text-gray-200' : 'text-black'}`}>
        {idx + 1})
      </span>

      <span id="task-title" className={`flex-1 text-lg font-tertiary transition-colors duration-500 ${theme ? 'text-white' : 'text-black'}`}>
        {title}
      </span>

      <button
      onClick={() => handleDelete(id)}
      className={`flex-shrink-0 backdrop-blur-md border p-2 rounded-xl shadow-md transition-colors duration-500 cursor-pointer focus:outline-none focus:ring-2 
        ${theme 
          ? 'bg-gray-700 text-white border-gray-600 hover:bg-gray-600 focus:ring-white' 
          : 'bg-greeny text-black border-white/30 hover:bg-white/20 hover:text-greeno focus:ring-white/40'}`}
    >
      <img src={deleteIcon} alt="Delete" className="w-6 h-6" />
    </button>

    </div>
  );
};

export default TaskItem;
