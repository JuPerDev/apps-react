import { useMemo, useState } from "react";

export const CalculosPesados = () => {
  const lista = [2, 2, 2, 2, 2];
  const [listaNumeros, setListaNumeros] = useState(lista);
  const [show, setShow] = useState(true);

  const calcular = useMemo(() => {
    console.log("Calculando");
    return listaNumeros.reduce((a, b) => a + b, 0);
  }, [listaNumeros]);

  // const calcular = () => {
  //  console.log("calculando");
  // return listaNumeros.reduce((a, b) => a + b, 0);
  //};

  return (
    <>
      <h1 className='text-white'>Calculo: </h1>
      <p className='text-white badge'>{calcular}</p>
      <button className='btn btn-success' onClick={() => setShow(!show)}>
        {show ? "show" : "hide"}
      </button>
      <button
        className='btn btn-success'
        onClick={() => setListaNumeros([...listaNumeros, 2])}
      >
        Agregar Número
      </button>
    </>
  );
};
