import { useState } from "react";

export const useForm = () => {
  const [inputForm, setInputForm] = useState({
    username: "",
    email: "",
    password: "",
  });

  const onInputForm = ({ target }) => {
    const { name, value } = target;
    console.log(name, value);
    setInputForm({
      ...inputForm,
      [name]: value,
    });
  };

  return {
    ...inputForm,
    onInputForm,
  };
};
