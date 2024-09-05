import { useState } from "react";
export const useCalculator = () => {
  const [resultado, setResultado] = useState(0);

  const suma = (valor1, valor2) => {
    setResultado(valor1 + valor2);
  };
  const resta = (valor1, valor2) => {
    setResultado(valor1 - valor2);
  };

  return { resultado, suma, resta };
};
