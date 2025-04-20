import { useEffect } from "react";
import { Field, Form, Formik } from "formik";
import Modal from "react-modal";
import { toast, ToastContainer } from "react-toastify";
import { useTranslation } from "react-i18next";
import * as Yup from "yup";
import { ErrorMessage } from "formik";
import styles from "./CustomModal.module.css";
import Icon from "../shared/Icon/Icon";
import { sendMessageToTelegram } from "../utils/fetch/telegramApi";

Modal.setAppElement("#modal");

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

export default function CustomModal({ isOpen, onClose }) {
  const { t } = useTranslation();
  //  мочим скрооол)
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

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
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="Registration Modal"
      className={styles.modal}
      overlayClassName={styles.overlay} // клас для бекдропу
    >
      <button className={styles.close_button} onClick={() => onClose()}>
        <Icon id={"icon-cross"} className={styles.icon_cross} />
      </button>

      <div className={styles.wrapper}>
        <div>
          <h2 className={styles.title}>Register for the Session</h2>
          <picture>
            {/* Десктоп */}
            <source
              srcSet="/images/Modal/Desktop/Modal-desktop-1x.jpg 1x, /images/Modal/Desktop/Modal-desktop-2x.jpg 2x"
              media="(min-width: 1440px)"
            />

            {/* Таблет */}
            <source
              srcSet="/images/Modal/Tablet/Modal-tablet-1x.jpg 1x, /images/Modal/Tablet/Modal-tablet-2x.jpg 2x"
              media="(min-width: 744px)"
            />

            <img
              className={styles.modal_image}
              src="/images/Modal/Tablet/Modal-tablet-1x.jpg"
              alt="Meditation"
            />
          </picture>
        </div>
        <div>
          <Formik
            initialValues={initialValues}
            validationSchema={FeedbackSchema}
            onSubmit={handleSubmit}
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
                    className={styles.message_error}
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
        </div>
      </div>
    </Modal>
  );
}
