import { TaskContext } from "../context/TaskContext";
import { ThemeContext } from "../context/ThemeContext";
import { useContext, useState } from "react";

const NoteEditor = () => {
  const [taskname, setTaskName] = useState("");
  const [taskdescription, setTaskDescription] = useState("");
  const { setTask } = useContext(TaskContext);
  const { theme } = useContext(ThemeContext);

  const handleAddTask = (e) => {
    e.preventDefault();
    if (taskname.trim() === "" || taskdescription.trim() === "") return;

    const newTask = {
      id: crypto.randomUUID(),
      name: taskname,
      description: taskdescription,
    };

    setTask((prevTasks) => [...prevTasks, newTask]);
    setTaskName("");
    setTaskDescription("");
  };

  return (
    <div className={`h-104 p-6 transition-colors duration-500 ${theme ? 'bg-gray-900' : 'bg-green-50'}`}>
      <h3 className={`text-center font-secondary font-bold text-2xl mb-4 transition-colors duration-500 ${theme ? 'text-white' : 'text-black'}`}>
        Create New Task
      </h3>

      <form className="space-y-4">
        {/* Task Title */}
        <div>
          <label className={`block text-lg font-medium font-secondary transition-colors duration-500 ${theme ? 'text-gray-300' : 'text-gray-700'}`}>
            Task Title
          </label>
          <input
            value={taskname}
            onChange={(e) => setTaskName(e.target.value)}
            type="text"
            className={`w-full p-2 border rounded-md focus:outline-none focus:ring-2 transition-all duration-300 
              ${theme 
                ? 'bg-gray-800 text-white border-gray-600 focus:border-white focus:ring-white placeholder-gray-400' 
                : 'border-greeno text-black focus:border-greeno focus:ring-greeno placeholder-gray-500'}`}
            placeholder="Enter task title"
          />
        </div>

        {/* Task Description */}
        <div>
          <label className={`block text-lg font-medium font-secondary transition-colors duration-500 ${theme ? 'text-gray-300' : 'text-gray-700'}`}>
            Task Description
          </label>
          <textarea
            value={taskdescription}
            onChange={(e) => setTaskDescription(e.target.value)}
            className={`w-full p-2 border rounded-md focus:outline-none focus:ring-2 transition-all duration-300 
              ${theme 
                ? 'bg-gray-800 text-white border-gray-600 focus:border-white focus:ring-white placeholder-gray-400' 
                : 'border-greeno text-black focus:border-greeno focus:ring-greeno placeholder-gray-500'}`}
            rows="4"
            placeholder="Enter task description"
          ></textarea>
        </div>

        {/* Action Buttons */}
        <div className="flex justify-center space-x-4">
          <button
            onClick={handleAddTask}
            className={`backdrop-blur-md border px-4 py-2 rounded-xl shadow-md transition-colors duration-500 cursor-pointer focus:outline-none focus:ring-2 
              ${theme 
                ? 'bg-gray-700 text-white hover:bg-gray-600 focus:ring-white' 
                : 'bg-greeny text-black hover:bg-white/20 hover:text-greeno border-white/30 focus:ring-greeno'}`}
          >
            Add Task
          </button>

          <button
            type="button"
            onClick={() => {
              setTaskName("");
              setTaskDescription("");
            }}
            className={`backdrop-blur-md border px-4 py-2 rounded-xl shadow-md transition-colors duration-500 cursor-pointer focus:outline-none focus:ring-2 
              ${theme 
                ? 'bg-gray-700 text-white hover:bg-gray-600 focus:ring-white' 
                : 'bg-greeny text-black hover:bg-white/20 hover:text-greeno border-white/30 focus:ring-greeno'}`}
          >
            Discard Changes
          </button>
        </div>
      </form>
    </div>
  );
};

export default NoteEditor;
