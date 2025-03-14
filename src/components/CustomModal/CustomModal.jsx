import { useEffect } from "react";
import { Field, Form, Formik } from "formik";
import Modal from "react-modal";
import styles from "./CustomModal.module.css";
import Icon from "../shared/Icon/Icon";

Modal.setAppElement("#modal");

const initialValues = {
  username: "",
  email: "",
  phone: "",
  message: "",
};

export default function CustomModal({ isOpen, onClose }) {
  //  мочим скрооол)
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  function handleSubmit(values, actions) {
    console.log(values);
    actions.resetForm();
  }
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="Registration Modal"
      className={styles.modal}
      overlayClassName={styles.overlay} // Додаємо клас для бекдропу
    >
      <button className={styles.close_button} onClick={() => onClose()}>
        <Icon id={"icon-cross"} className={styles.icon_cross} />
        {/* <img src={IconClose} alt="close button" /> */}
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
            onSubmit={handleSubmit}
            preventScroll
          >
            {({ handleSubmit }) => (
              <>
                <Form className={styles.form}>
                  <ul className={styles.list}>
                    <li className={styles.item}>
                      <Field
                        type="text"
                        name="username"
                        placeholder="Name"
                        className={styles.field}
                      />
                    </li>

                    <li className={styles.item}>
                      <Field
                        type="email"
                        name="email"
                        placeholder="Email"
                        className={styles.field}
                      />
                    </li>

                    <li className={styles.item}>
                      <Field
                        type="number"
                        name="phone"
                        placeholder="Phone"
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
        </div>
      </div>
    </Modal>
  );
}
