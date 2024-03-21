// Formulario.js
import React from 'react';
import useForm from './useForm';
import useFormErrors from './useFormErrors';

const Formulario = ({ handleSubmit }) => {
  const initialState = {
    cardholder: '',
    cardnumber: '',
    cardmonth: '',
    cardyear: '',
    cardcvc: ''
  };

  const { values, handleChange, resetForm } = useForm(initialState);
  const { errors, setError, clearErrors } = useFormErrors();

  return (
    <section className="container__form">
      <form className="form" onSubmit={handleSubmit}>
        <label className="form__input" htmlFor="cardholder">Cardholder Name</label>
        <input 
          className="form__input_" 
          type="text" 
          name="cardholder" 
          maxLength="18" 
          placeholder="e.g. Jane Appleseed" 
          id="cardholder" 
          value={values.cardholder} 
          onChange={handleChange} 
        />
        {errors.cardholder && <div className="error_show">{errors.cardholder}</div>}
        
        <label className="form__input" htmlFor="cardnumber">Card Number</label>
        <input 
          className="form__input_" 
          type="text" 
          name="cardnumber" 
          maxLength="19" 
          placeholder="e.g. 1234 5678 9123 0000" 
          id="cardnumber" 
          value={values.cardnumber} 
          onChange={handleChange} 
        />
        {errors.cardnumber && <div className="error_show">{errors.cardnumber}</div>}
        
        <div className="form__date-cvc">
          <div className="form__date">
            <div className='input-container'>
              <label className="form__input" htmlFor="">Exp. Date (MM/YY)</label>
              <input 
                className="form__input_" 
                type="text" 
                name="cardmonth" 
                maxLength="2" 
                placeholder="MM" 
                id="cardmonth" 
                value={values.cardmonth} 
                onChange={handleChange} 
              />
              {errors.cardmonth && <div className="error__show_">{errors.cardmonth}</div>}
              <input 
                className="form__input_" 
                type="text" 
                name="cardyear" 
                maxLength="2" 
                placeholder="YY" 
                id="cardyear" 
                value={values.cardyear} 
                onChange={handleChange} 
              />
              {errors.cardyear && <div className="error_show_ ">{errors.cardyear}</div>}
            </div>
          </div>
          <div className="form__cvc">
            <label className="form__input" htmlFor="cardcvc">CVC</label>
            <input 
              className="form__input_" 
              type="text" 
              name="cardcvc" 
              maxLength="3" 
              placeholder="CVC" 
              id="cardcvc" 
              value={values.cardcvc} 
              onChange={handleChange} 
            />
            {errors.cardcvc && <div className="error_show">{errors.cardcvc}</div>}
          </div>
        </div>
        <button className="form__button" type="submit">Continue</button>
      </form>
    </section>
  );
}

export default Formulario;
