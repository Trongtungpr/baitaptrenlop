import logo from './logo.svg';
import './App.css';
import TaskItem from './component/TodoItem/todoitem';


function App() {
  return (
    <div className="App">
      <TaskItem taskName="Task 1"/>
      <TaskItem taskName="Task 2"/>
      <TaskItem/>
    </div>
  );
}

export default App;
