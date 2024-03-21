import React from 'react';

function Agradecimiento({ handleReset }) {
  return (
    <section className="thanks-section">
      <img className="thanks-section_img" src="/images/icon-complete.svg" alt="Thanks" />
      <h2 className="thanks-section_title">Thank you for your submission!</h2>
      <p className="thanks-section_text">Your information has been successfully submitted.</p>
      <button className="thanks-section_button" onClick={handleReset}>Continue</button>
    </section>
  );
}

export default Agradecimiento;
