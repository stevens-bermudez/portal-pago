// useFormErrors.js
import { useState } from 'react';

const useFormErrors = () => {
  const [errors, setErrors] = useState({
    cardholder: '',
    cardnumber: '',
    cardmonth: '',
    cardyear: '',
    cardcvc: ''
  });

  const setError = (name, message) => {
    setErrors(prevErrors => ({
      ...prevErrors,
      [name]: message
    }));
  };

  const clearErrors = () => {
    setErrors({
      cardholder: '',
      cardnumber: '',
      cardmonth: '',
      cardyear: '',
      cardcvc: ''
    });
  };

  return { errors, setError, clearErrors };
};

export default useFormErrors;
