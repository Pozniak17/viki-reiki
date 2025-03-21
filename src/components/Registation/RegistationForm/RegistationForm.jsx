import { Field, Form, Formik } from "formik";
import styles from "./RegistationForm.module.css";
import { useTranslation } from "react-i18next";

const initialValues = {
  username: "",
  email: "",
  phone: "",
  message: "",
};

export default function RegistationForm() {
  const { t } = useTranslation();
  function handleSubmit(values, actions) {
    console.log(values);
    actions.resetForm();
  }

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      <Form className={styles.form}>
        <ul className={styles.list}>
          <li className={styles.item}>
            <Field
              type="text"
              name="username"
              placeholder={t("registration.placeholders.name")}
              className={styles.field}
            />
          </li>

          <li className={styles.item}>
            <Field
              type="email"
              name="email"
              placeholder={t("registration.placeholders.email")}
              className={styles.field}
            />
          </li>

          <li className={styles.item}>
            <Field
              type="number"
              name="phone"
              placeholder={t("registration.placeholders.phone")}
              className={styles.field}
            />
          </li>

          <li className={styles.item}>
            <Field
              className={styles.textarea}
              as="textarea"
              name="message"
              placeholder={t("registration.placeholders.message")}
            ></Field>
          </li>
        </ul>
        <button type="submit" onClick={handleSubmit} className={styles.button}>
          {t("registration.button")}
        </button>
      </Form>
    </Formik>
  );
}
