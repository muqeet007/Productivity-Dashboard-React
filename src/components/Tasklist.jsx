import addIcon from "../assets/plus-circle.png";

import TaskItem from "./Taskitem";
const TaskList = () => {
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

       <div>
             <button
            className="backdrop-blur-md bg-greeny border border-white/30 text-black px-4 py-2 rounded-xl shadow-md 
            hover:bg-white/20 hover:text-greeno transition cursor-pointer focus:outline-none focus:ring-2 focus:ring-white/40"
          >
                 <img src={addIcon} alt="Add" className="w-6 h-6" />
          </button>
       </div>

      </div>

      {/* Task items will go here */}
     <div className="space-y-4 overflow-y-auto max-h-full">
        {/* Example Task */}
        <TaskItem />
      </div>
    </aside>
  );
};

export default TaskList;
