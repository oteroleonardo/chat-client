import React from "react";
import PropTypes from "prop-types";
import { Formik } from "formik";
import * as Yup from "yup";

export const Form = ({
  initialValues,
  validationSchema,
  handleSubmit,
  fields
}) => (
  <Formik
    initialValues={initialValues}
    validationSchema={Yup.object().shape(validationSchema)}
    onSubmit={handleSubmit}
    component={fields}
  />
);

export default Form;

Form.propTypes = {
  initialValues: PropTypes.shape({}).isRequired,
  validationSchema: PropTypes.shape({}).isRequired,
  handleSubmit: PropTypes.func.isRequired,
  fields: PropTypes.func.isRequired
};
