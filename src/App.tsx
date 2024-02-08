import { ChangeEvent, FC, useState } from "react";
import "./App.css";
import { todoType } from "./apptypes";

const App: FC = () => {
  const [task, setTask] = useState<string>("");
  const [workDay, setWorkDay] = useState<number>(0);
  const [todoList, setTodoList] = useState<todoType[]>([]);

  console.log(todoList)

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.name === "task") {
      setTask(event.target.value);
    } else {
      setWorkDay(Number(event.target.value));
    }
  };

  const addNewTask = () => {
    const newTask = { taskName: task, workDay: workDay };
    setTodoList([...todoList, newTask]);
    setTask("");
    setWorkDay(0);
  };

  return (
    <div className="App">
      <input
        type="text"
        placeholder="Taskı giriniz."
        value={task}
        onChange={handleChange}
        name="task"
      />
      <input
        type="number"
        placeholder="Kaç günde tamamlamalısınız?"
        value={workDay}
        onChange={handleChange}
        name="workDay"
      />
      <button onClick={addNewTask}>Yeni Task Ekle</button>
    </div>
  );
};

export default App;
