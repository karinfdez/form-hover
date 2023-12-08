import React, { forwardRef } from "react";

const FormComponent = forwardRef(({ currentSection }, ref) => {
  return (
    <>
      <div className="form-container" ref={ref}>
        <div className="sticky-header">
          <h2>{currentSection}</h2>
        </div>
        <div className="">
          <section
            className="form-section"
            id="section1"
            data-section-name="Section 1"
          >
            <label>
              Name: <input type="text" />
            </label>
            <br />
            <label>
              Email: <input type="email" />
            </label>
            <label>
              Name2: <input type="text" />
            </label>
            <br />
            <label>
              Email2: <input type="email" />
            </label>
            <label>
              Name3: <input type="text" />
            </label>
            <label>
              Email3: <input type="email" />
            </label>
          </section>
          <section
            className="form-section"
            id="section2"
            data-section-name="Section 2"
          >
            <label>
              Name: <input type="text" />
            </label>
            <br />
            <label>
              Email: <input type="email" />
            </label>
            <label>
              Name2: <input type="text" />
            </label>
            <br />
            <label>
              Email2: <input type="email" />
            </label>
            <label>
              Name3: <input type="text" />
            </label>
            <label>
              Email3: <input type="email" />
            </label>
          </section>
          <section
            className="form-section"
            id="section3"
            data-section-name="Section 3"
          >
            <label>
              Name: <input type="text" />
            </label>
            <br />
            <label>
              Email: <input type="email" />
            </label>
            <label>
              Name2: <input type="text" />
            </label>
            <br />
            <label>
              Email2: <input type="email" />
            </label>
            <label>
              Name3: <input type="text" />
            </label>
            <label>
              Email3: <input type="email" />
            </label>
          </section>
          <section
            className="form-section"
            id="section4"
            data-section-name="Section 4"
          >
            <label>
              Name: <input type="text" />
            </label>
            <br />
            <label>
              Email: <input type="email" />
            </label>
            <label>
              Name2: <input type="text" />
            </label>
            <br />
            <label>
              Email2: <input type="email" />
            </label>
            <label>
              Name3: <input type="text" />
            </label>
            <label>
              Email3: <input type="email" />
            </label>
          </section>
        </div>
      </div>
    </>
  );
});

export default FormComponent;
