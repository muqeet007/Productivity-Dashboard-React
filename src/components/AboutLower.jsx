import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const AboutLower = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={`w-full min-h-screen flex flex-col items-center justify-center p-6 transition-colors duration-500 ${theme ? 'bg-gray-900' : 'bg-white'}`}>
      <h1 className={`text-4xl font-bold mb-4 font-secondary transition-colors duration-500 ${theme ? 'text-green-400' : 'text-green-700'}`}>
        Productivity Dashboard
      </h1>

      <p className={`text-lg mb-6 font-extrabold transition-colors duration-500 ${theme ? 'text-green-200' : 'text-greeno'}`}>
        Your All-in-One Focus and Task Management Tool
      </p>

      <p className={`text-base mb-4 max-w-3xl text-center transition-colors duration-500 ${theme ? 'text-gray-300' : 'text-gray-600'}`}>
        Productivity Dashboard is a modern web application designed to help you stay organized,
        manage your time, and boost your productivity. Whether you're studying, coding, or working
        on personal projects, this dashboard brings together a customizable Pomodoro timer, a task
        manager, and a note editor — all in one seamless interface.
      </p>

      <h2 className={`text-2xl font-semibold mt-8 mb-4 transition-colors duration-500 ${theme ? 'text-green-300' : 'text-green-600'}`}>
        Key Features
      </h2>

      <ul className={`space-y-4 text-center list-none transition-colors duration-500 ${theme ? 'text-gray-200' : 'text-gray-700'}`}>
        <li><strong>Task Management:</strong> Add, edit, and delete tasks to structure your day.</li>
        <li><strong>Pomodoro Timer:</strong> Work in focused sprints with scheduled breaks for better productivity.</li>
        <li><strong>Note Editor:</strong> Jot down important ideas and notes alongside your tasks.</li>
        <li><strong>Visual Progress Tracking:</strong> See completed tasks and time logs to stay motivated.</li>
        <li><strong>Customizable Settings:</strong> Adjust timer lengths and theme preferences to suit your workflow.</li>
      </ul>

      <p className={`text-base mt-6 max-w-3xl text-center transition-colors duration-500 ${theme ? 'text-gray-300' : 'text-gray-600'}`}>
        With Productivity Dashboard, you can streamline your workflow, maintain focus, and
        accomplish more every day.
      </p>
    </div>
  );
};

export default AboutLower;
