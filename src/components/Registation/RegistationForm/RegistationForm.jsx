import { Field, Form, Formik } from "formik";
import { ErrorMessage } from "formik";
import styles from "./RegistationForm.module.css";
import { useTranslation } from "react-i18next";
import * as Yup from "yup";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { sendMessageToTelegram } from "../../utils/fetch/telegramApi";

const FeedbackSchema = Yup.object().shape({
  username: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  email: Yup.string().email("Must be a valid email!").required("Required"),
  phone: Yup.string()
    .matches(/^\+?[1-9]\d{1,14}$/, "Incorrect phone number")
    .required("Enter a phone number"),
  message: Yup.string()
    .min(3, "Too short")
    .max(256, "Too long")
    .required("Required"),
});

const initialValues = {
  username: "",
  email: "",
  phone: "",
  message: "",
};

export default function RegistationForm() {
  const { t } = useTranslation();

  async function handleSubmit(values, actions) {
    try {
      await sendMessageToTelegram(values);
      toast.success("Successfully sent! 🎉");
      actions.resetForm();
    } catch {
      toast.error("Error while sending! 😢");
    }
  }

  return (
    <>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={FeedbackSchema}
      >
        <Form className={styles.form}>
          <ul className={styles.list}>
            <li className={styles.item}>
              <Field
                type="text"
                name="username"
                placeholder={t("registration.placeholders.name")}
                className={styles.field}
              />
              <ErrorMessage
                className={styles.error}
                name="username"
                component="span"
              />
            </li>

            <li className={styles.item}>
              <Field
                type="email"
                name="email"
                placeholder={t("registration.placeholders.email")}
                className={styles.field}
              />
              <ErrorMessage
                className={styles.error}
                name="email"
                component="span"
              />
            </li>

            <li className={styles.item}>
              <Field
                type="number"
                name="phone"
                placeholder={t("registration.placeholders.phone")}
                className={styles.field}
              />
              <ErrorMessage
                className={styles.error}
                name="phone"
                component="span"
              />
            </li>

            <li className={styles.item}>
              <Field
                className={styles.textarea}
                as="textarea"
                name="message"
                placeholder={t("registration.placeholders.message")}
              />
              <ErrorMessage
                className={styles.error}
                name="message"
                component="span"
              />
            </li>
          </ul>
          <button type="submit" className={styles.button}>
            {t("registration.button")}
          </button>
        </Form>
      </Formik>
      <ToastContainer
        className={styles.notification}
        position="top-center"
        hideProgressBar={true}
        pauseOnHover={false}
        draggable={false}
        autoClose={3000}
      />
    </>
  );
}
