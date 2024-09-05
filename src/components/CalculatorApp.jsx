import { useState } from "react";
import { useCalculator } from "../hooks/useCalculator";

export const CalculatorApp = () => {
  const { resultado, suma, resta } = useCalculator(0);

  const [value1, setValue1] = useState(0);
  const [value2, setValue2] = useState(0);

  const handleValue1Change = ({ target }) => {
    const intValue1 = parseInt(target.value);
    setValue1(intValue1);
  };
  const handleValue2Change = ({ target }) => {
    const intValue2 = parseInt(target.value);
    setValue2(intValue2);
  };

  return (
    <section className='container-md bg-light rounded d-flex flex-column align-items-center justify-content-center p-2 text-black-50 gap-1'>
      <h1>CALCULADORA</h1>
      <p>Creada solo como práctica de estados.</p>
      <div className='d-flex gap-2 input-group w-50'>
        <input
          type='number'
          placeholder='valor1'
          value={value1}
          onChange={handleValue1Change}
          className='form-control'
        />
        <input
          type='number'
          placeholder='valor2'
          value={value2}
          onChange={handleValue2Change}
          className='form-control'
        />
      </div>
      <div>
        <button
          className='btn btn-success'
          onClick={() => suma(value1, value2)}
        >
          Sumar
        </button>
        <button
          className='btn btn-danger'
          onClick={() => resta(value1, value2)}
        >
          Restar
        </button>
      </div>
      <span className='m-0 p-0'>
        Resultado{" "}
        {resultado > 0 ? (
          <p className='text-bg-success p-3 badge'>{resultado}</p>
        ) : resultado === 0 ? (
          <p className='text-bg-light p-3 badge'>{resultado}</p>
        ) : (
          <p className='text-bg-danger p-3 badge'>{resultado}</p>
        )}
      </span>
    </section>
  );
};
