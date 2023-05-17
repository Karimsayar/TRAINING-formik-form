import React from "react";
import { useFormik } from "formik"; // Import useFormik from the formik library

function App() {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validate: (values) => {
      const errors = {};

      if (!values.email) {
        errors.email = "Field required";
      } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
      ) {
        errors.email = "Username should be an email";
      }

      if (!values.password) {
        errors.password = "Field required";
      }

      return errors;
    },
    onSubmit: (values) => {
      alert("Login Successful"); // Display "Login Successful" in an alert box
    },
  });

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <div>
          <label htmlFor="emailField">Email:</label>
          <input
            id="emailField"
            name="email"
            type="email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
          />
          {formik.touched.email && formik.errors.email ? (
            <div id="emailError">{formik.errors.email}</div>
          ) : null}
        </div>

        <div>
          <label htmlFor="pswField">Password:</label>
          <input
            id="pswField"
            name="password"
            type="password"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
          />
          {formik.touched.password && formik.errors.password ? (
            <div id="pswError">{formik.errors.password}</div>
          ) : null}
        </div>

        <button id="submitBtn" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}

export default App;
