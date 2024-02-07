import { } from 'react'
import './App.css'

function App() {

  return (
    <>
        <main className="container">
          <section className="back__container">
            <div className="card">
              <img className="card_logo" src="/images/card-logo.svg" alt="logo" />
              <p className="card_number"> 0000 0000 0000 0000</p>
              <div className="card__details">
                <p className="card__details_name">Jane Appleseed</p>
                <p className="card__details_date">00/00</p>
              </div>
            </div>
            <div className="card-back">
              <p className="card-back__cvc">000</p>
            </div>
          </section>

          <section className="container__form">
            <form className="form" action="">
              <label className="form__input" htmlFor="cardholder">Cardholder Name</label>
              <input className="form__input_" type="text" name="cardholder" maxLength="18" placeholder="e.g. Jane Appleseed" id="cardholder" pattern='[A-Za-z\s]+' autoComplete="off" />
              <div className="form__input-cardholder--error error">only character type ABC</div>
              <label className="form__input" htmlFor="cardnumber">Card Number</label>
              <input className="form__input_" type="text" name="cardnumber" maxLength="19" placeholder="e.g. 1234 5678 9123 0000" id="cardnumber" pattern='[0-9\s]+' autoComplete="off" />
              <div className="form__input-cardnumber--error error">only character type Number</div>
              <div className="form__date-cvc">
                <label className="form__input" htmlFor="">Exp. Date (MM/YY)</label>
                <label className="form__input" htmlFor="">CVC</label>
                <div className="form__date">
                  <input className="form__input_" type="text" name="cardmonth" maxLength="2" placeholder="MM" id="cardmonth" pattern='[0-9\]+' />
                  <input className="form__input_" type="text" name="cardyear" maxLength="2" placeholder="YY" id="cardyear" pattern='[0-9\]+' />
                </div>
                <input className="form__input_" type="text" maxLength="3" name="cardcvc" placeholder="e.g 123" id="cardcvc" pattern='[A-Za-z0-9\s]+' />
                <div className="form__error-container">
                  <div className="form__input-mm-error error">only character type date</div>
                  <div className="form__input-yy-error error">only character type date</div>
                </div>
                <div className="form__input-cvc--error error">only character type ABC 123</div>
              </div>
              <input type="submit" value="confirm" className="form_submit" id="form_submit" />
            </form>
          </section>

          <section className="thanks-section">
            <img className="thanks-section_img" src="/images/icon-complete.svg" alt="complete icon" />
            <h1 className="thanks-section_title">Thank you!</h1>
            <p className="thanks-section_text"> We ve added your card details </p>
            <button className="thanks-section_button">Continue</button>
          </section>
        </main>
    </>
  )
}

export default App
