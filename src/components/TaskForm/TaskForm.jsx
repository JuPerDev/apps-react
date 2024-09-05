export const TaskForm = ({
  inputValue,
  onInputChange,
  onSubmit,
  showToolTip,
}) => {
  return (
    <form
      onSubmit={onSubmit}
      className='d-flex justify-content-center align-items-center needs-validation'
      noValidate
    >
      <div className='position-relative'>
        <input
          type='text'
          className={`form-control ${showToolTip ? "is-invalid" : ""}`}
          value={inputValue}
          onChange={onInputChange}
          name='inputTask'
          required
        />
        {showToolTip && (
          <div className='invalid-tooltip'>Esta tarea ya fue ingresada!</div>
        )}
      </div>
      <div>
        <button type='submit' className='btn btn-primary'>
          Agregar Tarea
        </button>
      </div>
    </form>
  );
};
