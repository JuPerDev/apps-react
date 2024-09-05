import React, { useState } from "react";

export const useCounter = ({ valorInicial }) => {
  const [contador, setContador] = useState(valorInicial);

  const incrementar = (valor = 1) => {
    setContador(contador + valor);
  };

  const decrementar = (valor = 1) => {
    setContador(contador - valor);
  };

  const resetear = () => {
    setContador(valorInicial);
  };

  return {
    contador,
    incrementar,
    decrementar,
    resetear,
  };
};
