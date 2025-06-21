import Header from "./components/Header";
// import TaskItem from "./components/Taskitem";
import TaskList from "./components/Tasklist";
import Right from "./components/Right";

function App() {
  return (
    <>
      <Header />
      <div className="flex">
      <TaskList />
      <Right/>
      </div>
    </>
  );
}

export default App;