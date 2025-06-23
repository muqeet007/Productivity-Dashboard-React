import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";
import { ThemeContext } from "../context/ThemeContext";
import TaskItem from "./Taskitem";

const TaskList = () => {
  const { tasks } = useContext(TaskContext);
  const { theme } = useContext(ThemeContext);

  return (
    <aside
      className={`h-189 w-120 flex flex-col p-4 mt-0 mr-0 transition-colors duration-500
        ${theme ? 'bg-gray-900' : 'bg-green-50'}`}
    >
      {/* Heading */}
      <div className="relative flex justify-between items-center h-20 mb-6">
        <div>
          <h2 className="">
            <span className={`text-2xl font-secondary ${theme ? 'text-white' : 'text-black'}`}>
              Tasks
            </span>
            <span className={`space-x-0.5 text-2xl font-secondary font-bold ${theme ? 'text-green-400' : 'text-greeno'}`}>
              &#45;List
            </span>
          </h2>
          <span className={`absolute bottom-0 left-0 w-full h-1 rounded-full ${theme ? 'bg-white' : 'bg-white'}`}></span>
        </div>
      </div>

      {/* Task items */}
      <div className="space-y-4 overflow-y-auto max-h-full">
        {tasks.map((item, index) => (
          <TaskItem
            key={item.id}  // always assign a unique key in mapped lists
            idx={index}
            title={item.name}
            id={item.id}
          />
        ))}
      </div>
    </aside>
  );
};

export default TaskList;
