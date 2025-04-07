import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Section from "../../components/shared/Section/Section";
import styles from "./ReikiSessions.module.css";
import CustomModal from "../../components/CustomModal/CustomModal";
import { t } from "i18next";
import { useLocation } from "react-router-dom";

export default function ReikiSessions() {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" });
        }, 100); // невелика затримка, щоб дочекатися повного рендеру
      }
    }
  }, [location]);

  return (
    <Section>
      <div className={styles.image_wrapper}>
        <motion.img
          srcSet="/images/MyStory/circle-left-1x.jpg 1x, /images/MyStory/circle-left-2x.jpg 2x"
          src="/images/MyStory/circle-left-1x.jpg 1x"
          className={styles.image_desktop}
          alt="circle"
          initial={{ opacity: 0, scale: 0.8, x: -50 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        />
        <motion.img
          srcSet="/images/ReikiSessions/reiki-sessions-1x.jpg 1x, /images/ReikiSessions/reiki-sessions-2x.jpg 2x"
          src="/images/ReikiSessions/reiki-sessions-1x.jpg"
          className={styles.image}
          alt="healing hand"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
        />

        <motion.img
          srcSet="/images/MyStory/circle-right-1x.jpg 1x, /images/MyStory/circle-right-2x.jpg 2x"
          src="/images/MyStory/circle-right-1x.jpg 1x"
          className={styles.image_desktop}
          alt="circle"
          initial={{ opacity: 0, scale: 0.8, x: 50 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
        />
      </div>

      <h2 id="individual" className={styles.title}>
        {t("reikiSessions.block1.title")}
      </h2>
      <p className={styles.text}>{t("reikiSessions.block1.text")}</p>

      <div className={styles.main_wrapper}>
        <div className={styles.wrapper}>
          <h3 className={styles.second_title}>
            {t("reikiSessions.block1.expect.title")}
          </h3>
          <ul className={styles.list}>
            <li className={styles.item}>
              <img src="/icons/MyStory/diamond.svg" alt="icon" />
              <p className={styles.second_text}>
                {t("reikiSessions.block1.expect.text1")}
              </p>
            </li>
            <li className={styles.item}>
              <img src="/icons/MyStory/diamond.svg" alt="icon" />
              <p className={styles.second_text}>
                {t("reikiSessions.block1.expect.text2")}
              </p>
            </li>
            <li className={styles.item}>
              <img src="/icons/MyStory/diamond.svg" alt="icon" />
              <p className={styles.second_text}>
                {t("reikiSessions.block1.expect.text3")}
              </p>
            </li>
          </ul>
        </div>
        <div className={styles.wrapper}>
          <h3 className={styles.second_title}>
            {t("reikiSessions.block1.benefits.title")}
          </h3>
          <ul className={styles.list}>
            <li className={styles.item}>
              <img src="/icons/MyStory/diamond.svg" alt="icon" />
              <p className={styles.second_text}>
                {t("reikiSessions.block1.benefits.text1")}
              </p>
            </li>
            <li className={styles.item}>
              <img src="/icons/MyStory/diamond.svg" alt="icon" />
              <p className={styles.second_text}>
                {t("reikiSessions.block1.benefits.text2")}
              </p>
            </li>
            <li className={styles.item}>
              <img src="/icons/MyStory/diamond.svg" alt="icon" />
              <p className={styles.second_text}>
                {t("reikiSessions.block1.benefits.text3")}
              </p>
            </li>
          </ul>
        </div>
        <div className={styles.wrapper}>
          <h3 className={styles.second_title}>
            {t("reikiSessions.block1.whoItsFor.title")}
          </h3>
          <ul className={styles.list}>
            <li className={styles.item}>
              <img src="/icons/MyStory/diamond.svg" alt="icon" />
              <p className={styles.second_text}>
                {t("reikiSessions.block1.whoItsFor.text1")}
              </p>
            </li>
            <li className={styles.item}>
              <img src="/icons/MyStory/diamond.svg" alt="icon" />
              <p className={styles.second_text}>
                {t("reikiSessions.block1.whoItsFor.text2")}
              </p>
            </li>
            <li className={styles.item}>
              <img src="/icons/MyStory/diamond.svg" alt="icon" />
              <p className={styles.second_text}>
                {t("reikiSessions.block1.whoItsFor.text3")}
              </p>
            </li>
          </ul>
        </div>

        <div>
          <div className={styles.wrapper}>
            <h3 className={styles.second_title}>
              {t("reikiSessions.block1.durationAndFormat.title")}
            </h3>
            <ul className={styles.list}>
              <li className={styles.item}>
                <img src="/icons/MyStory/diamond.svg" alt="icon" />
                <p className={styles.second_text}>
                  {t("reikiSessions.block1.durationAndFormat.text1")}
                </p>
              </li>
              <li className={styles.item}>
                <img src="/icons/MyStory/diamond.svg" alt="icon" />
                <p className={styles.second_text}>
                  {t("reikiSessions.block1.durationAndFormat.text2")}
                </p>
              </li>
            </ul>
          </div>
          <button
            onClick={() => setModalIsOpen(true)}
            className={styles.button}
          >
            {t("reikiSessions.block1.button")}
          </button>
        </div>
      </div>

      <img
        className={styles.icon_image}
        src="/images/ReikiSessions/first.svg"
        alt="hands around moon"
      />

      <div className={styles.main_wrapper}>
        <h2 id="group" className={styles.title}>
          {t("reikiSessions.block2.title")}
        </h2>
        <p className={styles.text}>{t("reikiSessions.block2.text")}</p>

        <div className={styles.wrapper}>
          <h3 className={styles.second_title}>
            {t("reikiSessions.block2.expect.title")}
          </h3>
          <ul className={styles.list}>
            <li className={styles.item}>
              <img src="/icons/MyStory/diamond.svg" alt="icon" />
              <p className={styles.second_text}>
                {t("reikiSessions.block2.expect.text1")}
              </p>
            </li>
            <li className={styles.item}>
              <img src="/icons/MyStory/diamond.svg" alt="icon" />
              <p className={styles.second_text}>
                {t("reikiSessions.block2.expect.text2")}
              </p>
            </li>
            <li className={styles.item}>
              <img src="/icons/MyStory/diamond.svg" alt="icon" />
              <p className={styles.second_text}>
                {t("reikiSessions.block2.expect.text3")}
              </p>
            </li>
          </ul>
        </div>

        <div className={styles.wrapper}>
          <h3 className={styles.second_title}>
            {t("reikiSessions.block2.benefits.title")}
          </h3>
          <ul className={styles.list}>
            <li className={styles.item}>
              <img src="/icons/MyStory/diamond.svg" alt="icon" />
              <p className={styles.second_text}>
                {t("reikiSessions.block2.benefits.text1")}
              </p>
            </li>
            <li className={styles.item}>
              <img src="/icons/MyStory/diamond.svg" alt="icon" />
              <p className={styles.second_text}>
                {t("reikiSessions.block2.benefits.text2")}
              </p>
            </li>
            <li className={styles.item}>
              <img src="/icons/MyStory/diamond.svg" alt="icon" />
              <p className={styles.second_text}>
                {t("reikiSessions.block2.benefits.text3")}
              </p>
            </li>
          </ul>
        </div>

        <div className={styles.wrapper}>
          <h3 className={styles.second_title}>
            {t("reikiSessions.block2.whoItsFor.title")}
          </h3>
          <ul className={styles.list}>
            <li className={styles.item}>
              <img src="/icons/MyStory/diamond.svg" alt="icon" />
              <p className={styles.second_text}>
                {t("reikiSessions.block2.whoItsFor.text1")}
              </p>
            </li>
            <li className={styles.item}>
              <img src="/icons/MyStory/diamond.svg" alt="icon" />
              <p className={styles.second_text}>
                {t("reikiSessions.block2.whoItsFor.text2")}
              </p>
            </li>
            <li className={styles.item}>
              <img src="/icons/MyStory/diamond.svg" alt="icon" />
              <p className={styles.second_text}>
                {t("reikiSessions.block2.whoItsFor.text3")}
              </p>
            </li>
          </ul>
        </div>

        <div>
          <div className={styles.wrapper}>
            <h3 className={styles.second_title}>
              {t("reikiSessions.block2.durationAndFormat.title")}
            </h3>
            <ul className={styles.list}>
              <li className={styles.item}>
                <img src="/icons/MyStory/diamond.svg" alt="icon" />
                <p className={styles.second_text}>
                  {t("reikiSessions.block2.durationAndFormat.text1")}
                </p>
              </li>
              <li className={styles.item}>
                <img src="/icons/MyStory/diamond.svg" alt="icon" />
                <p className={styles.second_text}>
                  {t("reikiSessions.block2.durationAndFormat.text2")}
                </p>
              </li>
            </ul>
          </div>

          <button
            onClick={() => setModalIsOpen(true)}
            className={styles.button}
          >
            {t("reikiSessions.block2.button")}
          </button>
        </div>
      </div>

      <img
        className={styles.icon_image}
        src="/images/ReikiSessions/second.svg"
        alt="hands around moon"
      />

      <h2 id="meditation" className={styles.title}>
        {t("reikiSessions.block3.title")}
      </h2>
      <p className={styles.text}>{t("reikiSessions.block3.text")}</p>

      <div className={styles.main_wrapper}>
        <div className={styles.wrapper}>
          <h3 className={styles.second_title}>
            {t("reikiSessions.block3.expect.title")}
          </h3>
          <ul className={styles.list}>
            <li className={styles.item}>
              <img src="/icons/MyStory/diamond.svg" alt="icon" />
              <p className={styles.second_text}>
                {t("reikiSessions.block3.expect.text1")}
              </p>
            </li>
            <li className={styles.item}>
              <img src="/icons/MyStory/diamond.svg" alt="icon" />
              <p className={styles.second_text}>
                {t("reikiSessions.block3.expect.text2")}
              </p>
            </li>
            <li className={styles.item}>
              <img src="/icons/MyStory/diamond.svg" alt="icon" />
              <p className={styles.second_text}>
                {t("reikiSessions.block3.expect.text3")}
              </p>
            </li>
          </ul>
        </div>

        <div className={styles.wrapper}>
          <h3 className={styles.second_title}>
            {t("reikiSessions.block3.benefits.title")}
          </h3>
          <ul className={styles.list}>
            <li className={styles.item}>
              <img src="/icons/MyStory/diamond.svg" alt="icon" />
              <p className={styles.second_text}>
                {t("reikiSessions.block3.benefits.text1")}
              </p>
            </li>
            <li className={styles.item}>
              <img src="/icons/MyStory/diamond.svg" alt="icon" />
              <p className={styles.second_text}>
                {t("reikiSessions.block3.benefits.text2")}
              </p>
            </li>
            <li className={styles.item}>
              <img src="/icons/MyStory/diamond.svg" alt="icon" />
              <p className={styles.second_text}>
                {t("reikiSessions.block3.benefits.text3")}
              </p>
            </li>
          </ul>
        </div>

        <div className={styles.wrapper}>
          <h3 className={styles.second_title}>
            {t("reikiSessions.block3.whoItsFor.title")}
          </h3>
          <ul className={styles.list}>
            <li className={styles.item}>
              <img src="/icons/MyStory/diamond.svg" alt="icon" />
              <p className={styles.second_text}>
                {t("reikiSessions.block3.whoItsFor.text1")}
              </p>
            </li>
            <li className={styles.item}>
              <img src="/icons/MyStory/diamond.svg" alt="icon" />
              <p className={styles.second_text}>
                {t("reikiSessions.block3.whoItsFor.text2")}
              </p>
            </li>
            <li className={styles.item}>
              <img src="/icons/MyStory/diamond.svg" alt="icon" />
              <p className={styles.second_text}>
                {t("reikiSessions.block3.whoItsFor.text3")}
              </p>
            </li>
          </ul>
        </div>

        <div>
          <div className={styles.wrapper}>
            <h3 className={styles.second_title}>
              {t("reikiSessions.block3.durationAndFormat.title")}
            </h3>
            <ul className={styles.list}>
              <li className={styles.item}>
                <img src="/icons/MyStory/diamond.svg" alt="icon" />
                <p className={styles.second_text}>
                  {t("reikiSessions.block3.durationAndFormat.text1")}
                </p>
              </li>
              <li className={styles.item}>
                <img src="/icons/MyStory/diamond.svg" alt="icon" />
                <p className={styles.second_text}>
                  {t("reikiSessions.block3.durationAndFormat.text2")}
                </p>
              </li>
            </ul>
          </div>
          <button
            onClick={() => setModalIsOpen(true)}
            className={styles.button}
          >
            {t("reikiSessions.block3.button")}
          </button>
        </div>
      </div>

      <img
        className={styles.icon_image}
        src="/images/ReikiSessions/third.svg"
        alt="hands and butterfly"
      />

      <h2 id="training" className={styles.title}>
        {t("reikiSessions.block4.title")}
      </h2>
      <p className={styles.text}>{t("reikiSessions.block4.text")}</p>

      <div className={styles.main_wrapper}>
        <div className={styles.wrapper}>
          <h3 className={styles.second_title}>
            {t("reikiSessions.block4.expect.title")}
          </h3>
          <ul className={styles.list}>
            <li className={styles.item}>
              <img src="/icons/MyStory/diamond.svg" alt="icon" />
              <p className={styles.second_text}>
                {t("reikiSessions.block4.expect.text1")}
              </p>
            </li>
            <li className={styles.item}>
              <img src="/icons/MyStory/diamond.svg" alt="icon" />
              <p className={styles.second_text}>
                {t("reikiSessions.block4.expect.text2")}
              </p>
            </li>
            <li className={styles.item}>
              <img src="/icons/MyStory/diamond.svg" alt="icon" />
              <p className={styles.second_text}>
                {t("reikiSessions.block4.expect.text3")}
              </p>
            </li>
          </ul>
        </div>

        <div className={styles.wrapper}>
          <h3 className={styles.second_title}>
            {t("reikiSessions.block4.benefits.title")}
          </h3>
          <ul className={styles.list}>
            <li className={styles.item}>
              <img src="/icons/MyStory/diamond.svg" alt="icon" />
              <p className={styles.second_text}>
                {t("reikiSessions.block4.benefits.text1")}
              </p>
            </li>
            <li className={styles.item}>
              <img src="/icons/MyStory/diamond.svg" alt="icon" />
              <p className={styles.second_text}>
                {t("reikiSessions.block4.benefits.text2")}
              </p>
            </li>
            <li className={styles.item}>
              <img src="/icons/MyStory/diamond.svg" alt="icon" />
              <p className={styles.second_text}>
                {t("reikiSessions.block4.benefits.text3")}
              </p>
            </li>
          </ul>
        </div>

        <div className={styles.wrapper}>
          <h3 className={styles.second_title}>
            {t("reikiSessions.block4.whoItsFor.title")}
          </h3>
          <ul className={styles.list}>
            <li className={styles.item}>
              <img src="/icons/MyStory/diamond.svg" alt="icon" />
              <p className={styles.second_text}>
                {t("reikiSessions.block4.whoItsFor.text1")}
              </p>
            </li>
            <li className={styles.item}>
              <img src="/icons/MyStory/diamond.svg" alt="icon" />
              <p className={styles.second_text}>
                {t("reikiSessions.block4.whoItsFor.text2")}
              </p>
            </li>
            <li className={styles.item}>
              <img src="/icons/MyStory/diamond.svg" alt="icon" />
              <p className={styles.second_text}>
                {t("reikiSessions.block4.whoItsFor.text3")}
              </p>
            </li>
          </ul>
        </div>

        <div>
          <div className={styles.wrapper}>
            <h3 className={styles.second_title}>
              {t("reikiSessions.block4.durationAndFormat.title")}
            </h3>
            <ul className={styles.list}>
              <li className={styles.item}>
                <img src="/icons/MyStory/diamond.svg" alt="icon" />
                <p className={styles.second_text}>
                  {t("reikiSessions.block4.durationAndFormat.text1")}
                </p>
              </li>
              <li className={styles.item}>
                <img src="/icons/MyStory/diamond.svg" alt="icon" />
                <p className={styles.second_text}>
                  {t("reikiSessions.block4.durationAndFormat.text2")}
                </p>
              </li>
            </ul>
          </div>

          <button
            onClick={() => setModalIsOpen(true)}
            className={styles.button}
          >
            {t("reikiSessions.block4.button")}
          </button>
        </div>
      </div>
      <CustomModal isOpen={modalIsOpen} onClose={() => setModalIsOpen(false)} />
    </Section>
  );
}
