import React from "react";

import { Formik, Form, Field } from "formik";

import * as Yup from "yup";

const SignupSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, "Too Short!")

    .max(50, "Too Long!")

    .required("Required"),

  lastName: Yup.string()

    .min(2, "Too Short!")

    .max(50, "Too Long!")

    .required("Required"),

  email: Yup.string().email("Invalid email").required("Required"),
});

const FormikForm = () => (
  <div>
    <h1>Signup</h1>

    <Formik
      initialValues={{
        firstName: "",

        lastName: "",

        email: "",
      }}
      validationSchema={SignupSchema}
      onSubmit={(values) => {
        // same shape as initial values

        console.log(values);
      }}
    >
      {({ errors, touched }) => (
        <Form>
          <label htmlFor="firstName" className="sub-heading">
            F Name
          </label>
          <Field id="firstName" name="firstName" />

          {errors.firstName && touched.firstName ? (
            <div className="sub-heading">{errors.firstName}</div>
          ) : null}
          <label htmlFor="lastName" className="sub-heading">
            L Name
          </label>

          <Field id="lastName" name="lastName" />

          {errors.lastName && touched.lastName ? (
            <div className="sub-heading">{errors.lastName}</div>
          ) : null}
          <label htmlFor="email" className="sub-heading">
            Email
          </label>
          <Field id="email" name="email" type="email" />

          {errors.email && touched.email ? (
            <div className="sub-heading">{errors.email}</div>
          ) : null}

          <button type="submit">Submit</button>
        </Form>
      )}
    </Formik>
  </div>
);

export default FormikForm;
