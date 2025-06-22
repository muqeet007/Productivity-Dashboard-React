import { TaskContext } from "../context/TaskContext";
import { useContext, useState } from "react";

const NoteEditor = () => {
  const [taskname, setTaskName] = useState("");
  const [taskdescription, setTaskDescription] = useState("");
  const { setTask } = useContext(TaskContext);

  const handleAddTask = (e) => {
    e.preventDefault();

    if (taskname.trim() === "" || taskdescription.trim() === "") return;

    const newTask = {
      id: crypto.randomUUID(),
      name: taskname,
      description: taskdescription
    };

    setTask((prevTasks) => [...prevTasks, newTask]);

    console.log(newTask);

    // Clear inputs
    setTaskName("");
    setTaskDescription("");
  };

  return (
    <div className="h-104 bg-green-50">
      <h3 className="text-center font-secondary font-bold text-2xl">Create New Task</h3>

      <div className="h-95">
        <form className="p-4 space-y-4">
          <div>
            <label className="block text-lg font-medium font-secondary text-gray-700">
              Task Title
            </label>
            <input
              value={taskname}
              onChange={(e) => setTaskName(e.target.value)}
              type="text"
              className="w-full p-2 border border-greeno rounded-md focus:border-greeno-300 transition duration-300 focus:outline-none"
              placeholder="Enter task title"
            />
          </div>

          <div>
            <label className="block text-lg font-medium text-gray-700 font-secondary">
              Task Description
            </label>
            <textarea
              value={taskdescription}
              onChange={(e) => setTaskDescription(e.target.value)}
              className="w-full p-2 border border-greeno rounded-md focus:border-greeno-300 transition duration-300 focus:outline-none"
              rows="4"
              placeholder="Enter task description"
            ></textarea>
          </div>

          <div className="flex justify-center space-x-4">
            <button
              className="text-tertiary backdrop-blur-md bg-greeny border border-white/30 text-black px-4 py-2 rounded-xl shadow-md hover:bg-white/20
                hover:text-greeno transition cursor-pointer focus:outline-none focus:ring-2 focus:ring-white/40"
              onClick={handleAddTask}
            >
              Add Task
            </button>

            <button
              type="button"
              className="text-tertiary backdrop-blur-md bg-greeny border border-white/30 text-black px-4 py-2 rounded-xl shadow-md hover:bg-white/20
                hover:text-greeno transition cursor-pointer focus:outline-none focus:ring-2 focus:ring-white/40"
              onClick={() => {
                setTaskName("");
                setTaskDescription("");
              }}
            >
              Discard Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default NoteEditor;
