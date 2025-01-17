import { Formik, Form, Field } from "formik";
import { nanoid } from "nanoid";
import * as Yup from "yup";
import { useId } from "react";
import c from "./ContactForm.module.css";

const ContactForm = ({ onAddContact }) => {
  const nameId = useId();
  const numberId = useId();
  const handleSubmit = (values, { resetForm }) => {
    const newContact = { id: nanoid(), ...values };
    onAddContact(newContact);
    resetForm();
  };

  return (
    <Formik initialValues={{ name: "", number: "" }} onSubmit={handleSubmit}>
      <Form className={c.form}>
        <label htmlFor={nameId}>Name</label>
        <Field type="text" id={nameId} name="name" placeholder="Name" />

        <label htmlFor={numberId}>Number</label>
        <Field type="text" id={numberId} name="number" placeholder="Name" />

        <button type="submit" className={c.btnForm}>
          Add contact
        </button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
