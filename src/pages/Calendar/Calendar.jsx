import { useState } from "react";
import { useMediaQuery } from "react-responsive";
import Section from "../../components/shared/Section/Section";
import styles from "./Calendar.module.css";
import CustomModal from "../../components/CustomModal/CustomModal";

export default function Calendar() {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const isMobileScreen = useMediaQuery({ maxWidth: 743 });
  const isTabletScreen = useMediaQuery({ minWidth: 744, maxWidth: 1439 });
  const isDesktopScreen = useMediaQuery({ minWidth: 1440 });

  let calendarHeight;

  if (isMobileScreen || isTabletScreen) {
    calendarHeight = "500";
  } else if (isDesktopScreen) {
    calendarHeight = "600";
  }

  return (
    <div className={styles.calendar}>
      <Section>
        <div className={styles.main_wrapper}>
          <div>
            <h1 className={styles.title}>Event</h1>
            <h2 className={styles.second_title}>Schedule</h2>
          </div>

          <div className={styles.wrapper}>
            <p className={styles.text}>
              Here you will find upcoming meditations, Reiki group sessions, and
              training events. Choose a convenient time and join a space of
              harmony and healing.
            </p>
            <img src="/icons/Calendar/calendar.svg" alt="flower" />
          </div>
        </div>
        <button onClick={() => setModalIsOpen(true)} className={styles.button}>
          Book Session
        </button>
        <iframe
          src={`https://calendar.google.com/calendar/embed?height=${calendarHeight}&wkst=1&ctz=Europe%2FDublin&showPrint=0&src=Y29udGFjdHJlaWtpdml0YWxpdHlAZ21haWwuY29t&color=%23039BE5`}
          width={"100%"}
          height={calendarHeight}
        ></iframe>

        <CustomModal
          isOpen={modalIsOpen}
          onClose={() => setModalIsOpen(false)}
        />
      </Section>
    </div>
  );
}
