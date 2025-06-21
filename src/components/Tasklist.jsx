const TaskList = () => {
  return (
    <aside className="bg-greeny h-screen w-120 flex flex-col p-4">
      {/* Heading */}
      <div className="relative flex justify-center items-center h-20 mb-6">
        <h2 className="text-white text-xl font-semibold font-secondary">
          Tasks To Be Performed
        </h2>
        <span className="absolute bottom-0 left-0 w-full h-1 bg-white rounded-full"></span>
      </div>

      {/* Task items will go here */}
      <div className="space-y-4">
        {/* Example Task */}
        {/* <TaskItem /> */}
      </div>
    </aside>
  );
};

export default TaskList;
