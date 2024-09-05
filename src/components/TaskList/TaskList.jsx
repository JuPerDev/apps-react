export const TaskList = ({ taskList, deleteTask, completeTask }) => {
  return (
    <table className='table table-striped'>
      <thead>
        <tr>
          <th scope='col'>#</th>
          <th scope='col'>Tarea</th>
          <th scope='col'>Progreso</th>
          <th scope='col'>Acciones</th>
        </tr>
      </thead>
      <tbody>
        {taskList.map((elements, index) => (
          <tr className='align-middle' key={elements.id}>
            <th scope='row'>{elements.id}</th>
            <td>{elements.taskName}</td>
            <td>{elements.progress}</td>
            <td>
              <button
                className='btn btn-outline-success btn-sm'
                onClick={() => completeTask(index)}
              >
                Completar
              </button>
              <button
                className='btn btn-outline-danger  btn-sm'
                onClick={() => deleteTask(elements.id)}
              >
                Eliminar
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
