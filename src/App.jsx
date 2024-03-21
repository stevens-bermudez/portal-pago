// App.js
import React from 'react';
import './App.css';
import Formulario from './form.jsx';
import useFormErrors from './useFormErrors.jsx';
import useThankSection from './useThankSection.jsx';

function App() {
  const { errors, setError, clearErrors } = useFormErrors();
  const { thanksVisible, showThankSection, hideThankSection } = useThankSection();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    if (!validacion.test(cardholder)) {
      setError('cardholder', 'Only character type ABC allowed');
      newErrors.cardholder = 'Only character type ABC allowed';
    } else {
      setError('cardholder', '');
    }

    if (!/^\d{16}$/.test(cardnumber.replace(/\s/g, ''))) {
      setError('cardnumber', 'Please enter a valid 16-digit card number');
      newErrors.cardnumber = 'Please enter a valid 16-digit card number';
    } else {
      setError('cardnumber', '');
    }

    if (!/^\d{1,2}$/.test(cardmonth)) {
      setError('cardmonth', 'Please enter a valid month');
      newErrors.cardmonth = 'Please enter a valid month';
    } else {
      setError('cardmonth', '');
    }

    if (!/^\d{2}$/.test(cardyear)) {
      setError('cardyear', 'Please enter a valid year');
      newErrors.cardyear = 'Please enter a valid year';
    } else {
      setError('cardyear', '');
    }

    if (!/^\d{3}$/.test(cardcvc)) {
      setError('cardcvc', 'Please enter a valid cvc');
      newErrors.cardcvc = 'Please enter a valid CVC';
    } else {
      setError('cardcvc', '');
    }

    if (Object.keys(newErrors).length === 0) {
      console.log('Form submitted successfully');
      showThankSection();
    } else {
      hideThankSection();
    }
  };

  const handleReset = () => {
    clearErrors();
    hideThankSection();
  };

  return (
    <>
      <main className="container">
        <Formulario handleSubmit={handleSubmit} />
      </main>
      {thanksVisible && (
        <Agradecimiento handleReset={handleReset} />
      )}
    </>
  );
}

export default App;