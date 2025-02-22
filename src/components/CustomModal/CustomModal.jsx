import Modal from "react-modal";
import styles from "./CustomModal.module.css";
import IconClose from "../../../public/icons/Modal/cross.svg";

export default function CustomModal({ isOpen, onClose, children }) {
  return (
    <Modal
      isOpen={isOpen}
      overlayClassName={styles.modal_overlay}
      className={styles.modal_content}
      closeTimeoutMS={300}
      shouldCloseOnOverlayClick={true}
      ariaHideApp={false}
      onRequestClose={onClose}
    >
      <button className={styles.close_button} onClick={() => onClose()}>
        <img src={IconClose} alt="close" />
      </button>
      {children}
    </Modal>
  );
}
