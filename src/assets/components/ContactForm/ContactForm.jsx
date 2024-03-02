import css from "./ContactForm.module.css";
import { useId } from "react";
import { nanoid } from "nanoid";
import * as Yup from "yup";
import { Formik, Field, ErrorMessage, Form } from "formik";

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Too Short!")
    .max(50, "Too long!")
    .required("Required!"),

  number: Yup.string()
    .min(3, "Too short")
    .max(10, "Too Long")
    .matches(
      /^[0-9]{3}-[0-9]{3}-[0-9]{2}$/,
      "Is not valid, valid number is: xxx-xxx-xx"
    )
    .required("Phone number is required"),
});

export default function ContactForm({ addContact }) {
  const forName = useId();
  const forPhone = useId();
  return (
    <Formik
      initialValues={{ name: "", number: "" }}
      validationSchema={validationSchema}
      onSubmit={(values, { setSubmitting, resetForm }) => {
        addContact(values);
        resetForm();
      }}
    >
      {({ isSubmitting }) => (
        <Form>
          <div>
            <label htmlFor="name">Name:</label>
            <Field type="text" id={forName} name="name" />
            <ErrorMessage name="name" component="div" />
          </div>
          <div>
            <label htmlFor="number">Number:</label>
            <Field type="text" id={forPhone} name="number" />
            <ErrorMessage name="number" component="div" />
          </div>
          <button type="submit" disabled={isSubmitting}>
            Submit
          </button>
        </Form>
      )}
    </Formik>
  );
}
