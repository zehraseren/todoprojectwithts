import { todoType } from "./apptypes";

type propsType = {
  task: todoType;
  deleteTask(nameToDelete: string): void;
};

function TodoItem({ task, deleteTask }: propsType) {
  return (
    <div>
      <div>
        <p>{task.taskName}</p>
        <p>{task.workDay}</p>
        <button onClick={() => deleteTask(task.taskName)}>Sil</button>
      </div>
    </div>
  );
}

export default TodoItem;
