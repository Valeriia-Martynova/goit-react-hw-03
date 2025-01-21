import { Formik, Form, Field, ErrorMessage } from "formik";
import { nanoid } from "nanoid";
import * as Yup from "yup";
import c from "./ContactForm.module.css";
import { FaPen } from "react-icons/fa";

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  number: Yup.string()
    .matches(/^\d{3}-\d{2}-\d{2}$/, "Format xxx-xx-xx")
    .required("Required"),
});

const ContactForm = ({ onAddContact }) => {
  const handleSubmit = (values, { resetForm }) => {
    const newContact = { id: nanoid(), ...values };
    onAddContact(newContact);
    resetForm();
  };

  return (
    <Formik
      initialValues={{ name: "", number: "" }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form className={c.form}>
        <div className={c.inputContainer}>
          <label htmlFor="name">Name</label>
          <div className={c.inputWrapper}>
            <FaPen className={c.icon} />
            <Field type="text" id="name" name="name" placeholder="Name" />
          </div>
          <ErrorMessage className={c.error} name="name" component="span" />
        </div>
        <div className={c.inputContainer}>
          <label htmlFor="number">Number</label>
          <Field type="text" id="number" name="number" placeholder="Number" />
          <ErrorMessage className={c.error} name="number" component="span" />
        </div>

        <button type="submit" className={c.btnForm}>
          Add contact
        </button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
