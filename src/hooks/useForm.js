import { useState } from "react";

export const useForm = (initialValue = {}) => {
  const [values, setValues] = useState(initialValue);
  const handleChange = (event) => {
    const { name, value } = event.target;
    setValues({
      ...values,
      [name]: value,
    });
  };
  return {
    ...values,
    values,
    setValues,
    handleChange,
  };
};
