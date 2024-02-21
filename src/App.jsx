import React, { useState } from 'react';
import './App.css';

function App() {
  const [cardholder, setCardholder] = useState('');
  const [cardnumber, setCardnumber] = useState('');
  const [cardmonth, setCardmonth] = useState('');
  const [cardyear, setCardyear] = useState('');
  const [cardcvc, setCardcvc] = useState('');
  const [errors, setErrors] = useState({});
  const [thanksVisible, setThanksVisible] = useState(false);
  const [errorcardholder, setErrorcardholder] = useState('');
  const [errorcardnumber, setErrorcardnumber] = useState('');
  const [errorcardmonth, setErrorcardmonth] = useState('');
  const [errorcardyear, setErrorcardyear] = useState('');
  const [errorcardcvc, setErrorcardcvc] = useState('');
  const validacion = /^[A-Za-z]+$/;

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    if (!validacion.test(cardholder)) {
      setErrorcardholder('Only character type ABC allowed');
      newErrors.cardholder = 'Only character type ABC allowed';
    } else {
      setErrorcardholder('');
    }

    if (!/^\d{16}$/.test(cardnumber.replace(/\s/g, ''))) {
      setErrorcardnumber('Please enter a valid 16-digit card number');
      newErrors.cardnumber = 'Please enter a valid 16-digit card number';
    } else {
      setErrorcardnumber('');
    }

    if (!/^\d{1,2}$/.test(cardmonth)) {
      setErrorcardmonth('Please enter a valid month');
      newErrors.cardmonth = 'Please enter a valid month';
    } else {
      setErrorcardmonth('');
    }

    if (!/^\d{2}$/.test(cardyear)) {
      setErrorcardyear('Please enter a valid year');
      newErrors.cardyear = 'Please enter a valid year';
    } else {
      setErrorcardyear('');
    }

    if (!/^\d{3}$/.test(cardcvc)) {
      setErrorcardcvc('Please enter a valid cvc');
      newErrors.cardcvc = 'Please enter a valid CVC';
    } else {
      setErrorcardcvc('');
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      console.log('Form submitted successfully');
      setThanksVisible(true);
    } else {
      setThanksVisible(false);
    }
  };

  const handleReset = () => {
    setCardholder('');
    setCardnumber('');
    setCardmonth('');
    setCardyear('');
    setCardcvc('');
    setErrors({});
    setThanksVisible(false);
  };

  return (
    <>
      <main className="container">
        <section className="back__container">
          <div className="card">
            <img className="card_logo" src="/images/card-logo.svg" alt="logo" />
            <p className="card_number">{cardnumber || '0000 0000 0000 0000'}</p>
            <div className="card__details">
              <p className="card__details_name">{cardholder || 'Cardholder Name'}</p>
              <p className="card__details_date">{cardmonth || '00'}/{cardyear || '00'}</p>
            </div>
          </div>
          <div className="card-back">
            <p className="card-back__cvc">{cardcvc || '000'}</p>
          </div>
        </section>

        <section className="container__form">
          <form className="form" onSubmit={handleSubmit}>
            <label className="form__input" htmlFor="cardholder">Cardholder Name</label>
            <input className="form__input_" type="text" name="cardholder" maxLength="18" placeholder="e.g. Jane Appleseed" id="cardholder" value={cardholder} onChange={(e) => setCardholder(e.target.value)} />
            {errorcardholder && <div className="error_show">{errorcardholder}</div>}
          
            <label className="form__input" htmlFor="cardnumber">Card Number</label>
            <input className="form__input_" type="text" name="cardnumber" maxLength="19" placeholder="e.g. 1234 5678 9123 0000" id="cardnumber" value={cardnumber} onChange={(e) => setCardnumber(e.target.value)} />
            {errorcardnumber && <div className="error_show">{errorcardnumber}</div>}
            <div className="form__date-cvc">
              <div className="form__date">
              <div className='input-container'>
                <label className="form__input" htmlFor="">Exp. Date (MM/YY)</label>
                <input className="form__input_" type="text" name="cardmonth" maxLength="2" placeholder="MM" id="cardmonth" value={cardmonth} onChange={(e) => setCardmonth(e.target.value)} />
                {errorcardmonth && <div className="error__show_">{errorcardmonth}</div>}
                <input className="form__input_" type="text" name="cardyear" maxLength="2" placeholder="YY" id="cardyear" value={cardyear} onChange={(e) => setCardyear(e.target.value)} />
                {errorcardyear && <div className="error_show_ ">{errorcardyear}</div>}
                </div>
              </div>
              <div className="form__cvc">
                <label className="form__input" htmlFor="cardcvc">CVC</label>
                <input className="form__input_" type="text" name="cardcvc" maxLength="3" placeholder="CVC" id="cardcvc" value={cardcvc} onChange={(e) => setCardcvc(e.target.value)} />
                {errorcardcvc && <div className="error_show">{errorcardcvc}</div>}
              </div>
            </div>
            <button className="form__button" type="submit">Continue</button>
          </form>
        </section>
      </main>

      {thanksVisible && (
        <section className="thanks-section">
          <img className="thanks-section_img" src="/images/thanks-img.png" alt="Thanks" />
          <h2 className="thanks-section_title">Thank you for your submission!</h2>
          <p className="thanks-section_text">Your information has been successfully submitted.</p>
          <button className="thanks-section_button" onClick={handleReset}>Submit another response</button>
        </section>
      )}
    </>
  );
}

export default App;