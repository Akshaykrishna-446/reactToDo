import './App.css';
import { useState } from "react";
function App() {
  const [ToDos, setToDos] = useState([])
  const [ToDo, setToDo] = useState("")

  const deleteToDo = (idToDelete) => {
    setToDos(ToDos.filter((obj) => obj.id !== idToDelete));
  };

  return (
    <div className="app">
      <div className="mainHeading">
        <h1>ToDo List</h1>
      </div>
      <div className="subHeading">
        <br />
        <h2>Whoop, it's hiiiii 🌝 ☕ </h2>
      </div>
      <div className="input">
        <input value={ToDo} onChange={(event) => setToDo(event.target.value)} type="text" placeholder="🖊️ Add item..." />
        <i onClick={() => setToDos([...ToDos, { id: Date.now(), text: ToDo, status: false }])} className="fas fa-plus"></i>
      </div>
      <div className="todos">
        {ToDos.map((obj) => {
          return (
            <div className="todo">
              <div className="left">
                <input onChange={(e) => {
                  setToDos(ToDos.filter(obj2 => {
                    if (obj2.id === obj.id) {
                      obj2.status = e.target.checked
                    }
                    return obj2
                  }))
                }} value={obj.status} type="checkbox" name="" id="" />
                <p>{obj.text}</p>
              </div>
              <div className="right">
                <i onClick={() => deleteToDo(obj.id)} className="fas fa-times"></i>
              </div>
            </div>
          )
        })}

        {ToDos.map((obj) => {
          if (obj.status) {
            return (<h1> completed task : {obj.text}</h1>)

          }
          return null
        })}
      </div>




    </div>

  );
}

export default App;
