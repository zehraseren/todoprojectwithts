import { ChangeEvent, FC, useState } from "react";
import "./App.css";
import { todoType } from "./apptypes";
import TodoItem from "./todoItem";

const App: FC = () => {
  const [task, setTask] = useState<string>("");
  const [workDay, setWorkDay] = useState<number>(0);
  const [todoList, setTodoList] = useState<todoType[]>([]);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.name === "task") {
      setTask(event.target.value);
    } else {
      setWorkDay(Number(event.target.value));
    }
  };
  const addNewTask = (): void => {
    const newTask = { taskName: task, workDay: workDay };
    setTodoList([...todoList, newTask]);
    setTask("");
    setWorkDay(0);
  };

  const deleteTask = (nameToDelete: string): void => {
    setTodoList(
      todoList.filter((task) => {
        return task.taskName !== nameToDelete;
      })
    );
  };

  return (
    <div>
      <div className="App">
        <input
          type="text"
          placeholder="Taskı giriniz."
          value={task}
          onChange={handleChange}
          name="task"
        />
        {}
        <input
          type="number"
          placeholder="Kaç günde tamamlamalısınız?"
          value={workDay}
          onChange={handleChange}
          name="workDay"
        />
        <button onClick={addNewTask}>Yeni Task Ekle</button>
      </div>
      <div>
        {todoList.map((task: todoType, index: number) => {
          return <TodoItem key={index} task={task} deleteTask={deleteTask} />;
        })}
      </div>
    </div>
  );
};

export default App;
