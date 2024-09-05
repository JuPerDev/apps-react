import { useState } from "react";
import { useFormToDo } from "../hooks/useFormToDo";
import { TaskForm } from "./TaskForm/TaskForm";
import { TaskList } from "./TaskList/TaskList";

export const ListaTareas = () => {
  const {
    inputValue,
    taskList,
    showToolTip,
    onInputChange,
    onSubmit,
    deleteTask,
    completeTask,
  } = useFormToDo();

  return (
    <section className='container-md rounded bg-light d-flex flex-column justify-content-center align-items-center text-center p-2'>
      <h2 className='text-black-50'>TO DO LIST!</h2>
      <TaskForm
        inputValue={inputValue}
        onInputChange={onInputChange}
        onSubmit={onSubmit}
        showToolTip={showToolTip}
      />
      <TaskList
        taskList={taskList}
        deleteTask={deleteTask}
        completeTask={completeTask}
      />
    </section>
  );
};
