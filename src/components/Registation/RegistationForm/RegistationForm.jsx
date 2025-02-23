import { Field, Form, Formik } from "formik";
import styles from "./RegistationForm.module.css";

const initialValues = {
  username: "",
  email: "",
  phone: "",
  message: "",
};

export default function RegistationForm() {
  function handleSubmit(values, actions) {
    console.log(values);
    actions.resetForm();
  }

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      {({ handleSubmit }) => (
        <>
          <Form className={styles.form}>
            <ul className={styles.list}>
              <li className={styles.item}>
                <Field
                  type="text"
                  name="username"
                  placeholder="Name*"
                  className={styles.field}
                />
              </li>

              <li className={styles.item}>
                <Field
                  type="email"
                  name="email"
                  placeholder="Email*"
                  className={styles.field}
                />
              </li>

              <li className={styles.item}>
                <Field
                  type="number"
                  name="phone"
                  placeholder="Phone*"
                  className={styles.field}
                />
              </li>

              <li className={styles.item}>
                <Field
                  className={styles.textarea}
                  as="textarea"
                  name="message"
                  placeholder="Message"
                ></Field>
              </li>
            </ul>
          </Form>
          {/* Кнопка поза формою, але прив’язана до handleSubmit */}
          <button
            type="button"
            onClick={handleSubmit}
            className={styles.button}
          >
            Submit
          </button>
        </>
      )}
    </Formik>
  );
}
