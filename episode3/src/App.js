import './App.css';
import {useState} from "react";

function App() {

  // toDoList is the initial state in our case equal to empty list, defined in useState([])
  const [toDoList, setToDoList] = useState([]);
  // newTask is the initial state in our case equal to empty string, defined in useState("")
  const [newTask, setNewTask] = useState("");

  // function handleChange, reads the input and set the value of newTask equal to that input it got.
  const handelChange = (event) => {
    setNewTask(event.target.value);
  }


    /*

  // we create a new list inside our addTask function, newTodoList equal to:  all the elements of toDoList & newTask value.
    const addTask = () => {
    const newTodoList = [...toDoList, newTask]
    setToDoList(newTodoList)


    setToDoList([...toDoList, newTask])  -> more profesional way 
      }
    */



      //  we use this way, using objects, in order to keep track of the task with id. So, if we have 2 similar tasks, we dont want to delete them both based on name of task. So we check the id
  const addTask = () => {

        const task = {
          id: toDoList.length === 0 ? 1 : toDoList[toDoList.length-1].id + 1,
          taskName: newTask
        };
  
        const newTodoList = [...toDoList, task]
        setToDoList(newTodoList)
      };
  
  


  const deleteTask = (id) => {
    setToDoList( toDoList.filter( (task) => task.id !== id ));
  }


  return (
    <div className="App">

      <div className="addTask">
      <input onChange = {handelChange}></input>
      <button onClick={addTask}>Add Button</button>
      </div>

      <div className="list">{toDoList.map( task => 
        { return <div>
          <h1>{task.taskName}</h1> 
          <button onClick = {() => deleteTask(task.id)}> X </button> // we use this way when we want to use the function  with parantheses: deleteTask('and give an argument')
                </div>})}
        </div>
    </div>
  );
}

export default App;
