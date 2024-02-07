import { ChangeEvent, FC, useState } from "react";
import "./App.css";

const App: FC = () => {
  const [task, setTask] = useState<string>("");
  const [workDay, setWorkDay] = useState<number>(0);
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.name === "task") {
      setTask(event.target.value);
    } else {
      setWorkDay(Number(event.target.value));
    }
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
      <button>Yeni Task Ekle</button>
    </div>
  );
};

export default App;
