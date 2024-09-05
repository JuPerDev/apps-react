import { useState } from "react";

export const useFormToDo = () => {
  const [inputValue, setInputValue] = useState("");
  const [taskList, setTaskList] = useState([]);
  const [showToolTip, setShowToolTip] = useState(false);

  // --- MANEJO DE LO INGRESADO EN EL INPUT ---
  const onInputChange = ({ target }) => {
    const { value } = target;
    setInputValue(value);
    // Se establece el ToolTip en false para que no se muestre cuando ingresamos algo en el input
    setShowToolTip(false);
  };

  // --- MANEJO DEL ENVÍO DEL FORMULARIO ---
  const onSubmit = (event) => {
    event.preventDefault();
    // Comprobamos que cuando se envíe el formulario la palabra que se haya ingresado no este ya ingresada

    // Preparamos el objeto que insertaremos
    const newTask = {
      id: taskList.length + 1,
      taskName: inputValue,
      progress: "En progreso 〽️",
    };

    // Comprobamos si el objeto que tratamos de insertar ya esta en la lista
    const taskExists = taskList.some(
      (task) => task.taskName === newTask.taskName
    );

    if (taskExists) {
      setShowToolTip(true);
      return;
    }

    setTaskList((elements) => [newTask, ...elements]);
    // Restablecemos el input value
    setInputValue("");
  };

  const deleteTask = (taskID) => {
    setTaskList(taskList.filter((task) => task.id !== taskID));
  };

  const completeTask = (taskID) => {
    setTaskList((prevTask) => {
      prevTask[taskID].progress = "Completado! ✅";
      return [...prevTask];
    });
  };

  // RETORNAMOS LOS ESTADOS Y FUNCIONES NECESARIAS
  return {
    inputValue,
    taskList,
    showToolTip,
    onInputChange,
    onSubmit,
    deleteTask,
    completeTask,
  };
};
