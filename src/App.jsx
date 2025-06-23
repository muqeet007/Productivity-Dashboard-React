import Header from "./components/Header";
// import TaskItem from "./components/Taskitem";
import TaskList from "./components/Tasklist";
import Right from "./components/Right";
import AboutLower from "./components/AboutLower";

function App() {
  return (
    <div>
      <div className="h-1/2">
         <Header />
      <div className="flex items-stretch">
      <TaskList />
      <Right/>
      </div>
      </div>
    <AboutLower/>
    </div>

    
  );
}

export default App;



