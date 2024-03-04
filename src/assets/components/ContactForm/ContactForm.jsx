import css from "./ContactForm.module.css";
import { useId } from "react";
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
      "Is not valid, valid number is: xxx-xx-xx"
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
      onSubmit={(values, { resetForm }) => {
        console.log(values);
        addContact(values);
        resetForm();
      }}
    >
      {({ isSubmitting }) => (
        <Form className={css.form}>
          <div className={css.inputGroup}>
            <label htmlFor="name" className={css.label}>
              Name:
            </label>
            <Field type="text" id={forName} name="name" className={css.input} />
            <ErrorMessage name="name" component="span" className={css.error} />
          </div>
          <div className={css.inputGroup}>
            <label htmlFor="number" className={css.label}>
              Number:
            </label>
            <Field
              type="text"
              id={forPhone}
              name="number"
              className={css.input}
            />
            <ErrorMessage name="number" component="div" />
          </div>
          <button type="submit" disabled={isSubmitting} className={css.button}>
            Submit
          </button>
        </Form>
      )}
    </Formik>
  );
}
