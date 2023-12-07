import React, { forwardRef } from 'react';

const FormComponent = forwardRef(({ handleLeave }, ref) => {
  return (
    <div className="form-container" ref={ref}>
      <section className="form-section" id="section1">
        <h2>Section 1</h2>
        <label>
          Name:
          <input type="text" />
        </label>
        <br />
        <label>
          Email:
          <input type="email" />
        </label>
      </section>

      <section className="form-section" id="section2">
        <h2>Section 2</h2>
        <label>
          Address:
          <input type="text" />
        </label>
        <br />
        <label>
          Phone:
          <input type="tel" />
        </label>
      </section>

      <section className="form-section" id="section3">
        <h2>Section 3</h2>
        <label>
          Date of Birth:
          <input type="date" />
        </label>
        <br />
        <label>
          Gender:
          <select>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </label>
      </section>

      <section className="form-section" id="section4">
        <h2>Section 4</h2>
        <label>
          Name:
          <input type="text" />
        </label>
        <br />
        <label>
          Email:
          <input type="email" />
        </label>
      </section>

      <section className="form-section" id="section5">
        <h2>Section 5</h2>
        <label>
          Address:
          <input type="text" />
        </label>
        <br />
        <label>
          Phone:
          <input type="tel" />
        </label>
      </section>

      <section className="form-section" id="section6">
        <h2>Section 6</h2>
        <label>
          Date of Birth:
          <input type="date" />
        </label>
        <br />
        <label>
          Gender:
          <select>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </label>
      </section>
    </div>
  );
});

export default FormComponent;
