import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css';
import TaskProvider from './components/TaskProvider.jsx';
import ThemeProvider from './components/ThemeProvider.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider>
      <TaskProvider>
      <App />
    </TaskProvider>
    </ThemeProvider>
  </React.StrictMode>,
)
