import './App.css';
import { TaskContextProvider } from './context/TaskContext';
import { TaskRouter } from './routes/TaskRouter';

function App() {
  return (
    <TaskContextProvider>
      <TaskRouter />
    </TaskContextProvider>
  )
}

export default App;
