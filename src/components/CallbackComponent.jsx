import React, { useCallback, useState } from "react";

const ComponenteHijo = React.memo(({ manejador }) => {
  console.log("Me renderizo");
  return (
    <button className='btn btn-danger' onClick={manejador}>
      +1
    </button>
  );
});

export const CallbackComponent = () => {
  const [contador, setContador] = useState(0);

  const manejador = useCallback(() => {
    setContador((blabla) => blabla + 1);
  }, []);

  return (
    <>
      <h1>useCallBack!!</h1>
      <p className='badge'>Contador: {contador}</p>
      <ComponenteHijo manejador={manejador} />
    </>
  );
};
