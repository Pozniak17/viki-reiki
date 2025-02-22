import { useMediaQuery } from "react-responsive";
// import { motion, AnimatePresence } from "framer-motion";
import styles from "./Benefits.module.css";

export default function Benefits() {
  const isMobileScreen = useMediaQuery({ maxWidth: 743 });
  const isTabletScreen = useMediaQuery({ minWidth: 744, maxWidth: 1439 });
  const isDesktopScreen = useMediaQuery({ minWidth: 1440 });

  return (
    <section className={styles.benefits}>
      <h2 className={styles.title}>Key Benefits</h2>

      <div className={styles.wrapper}>
        {isMobileScreen && (
          <img
            src="/public/icons/Benefits/Mobile/Text-mobile.svg"
            alt="Text"
            className={styles.text_icon}
          />
        )}

        {isTabletScreen && (
          <img
            src="/public/icons/Benefits/Tablet/Text-tablet.svg"
            alt="Text"
            className={styles.text_icon}
          />
        )}

        {isDesktopScreen && (
          <img
            src="/public/icons/Benefits/Desktop/Text-desktop.svg"
            alt="Text"
            className={styles.text_icon}
          />
        )}

        <picture>
          {/* Десктоп */}
          <source
            srcSet="/images/Benefits/Desktop/Ellipse-desktop-1x.png 1x, /images/Benefits/Desktop/Ellipse-desktop-2x.png 2x"
            media="(min-width: 1440px)"
          />

          {/* Таблет */}
          <source
            srcSet="/images/Benefits/Tablet/Ellipse-tablet-1x.png 1x, /images/Benefits/Tablet/Ellipse-tablet-2x.png 2x"
            media="(min-width: 744px)"
          />
          {/* Мобільні */}
          <source
            srcSet="/images/Benefits/Mobile/Ellipse-mobile-1x.png 1x, /images/Benefits/Mobile/Ellipse-mobile-2x.png 2x"
            media="(max-width: 743px)"
          />
          {/* Дефолт*/}
          <img
            src="/images/Benefits/Mobile/Ellipse-mobile-1x.png"
            alt="Meditation"
            className={styles.meditation_image}
          />
        </picture>
      </div>
    </section>
  );
}

// export default function Benefits() {
//   const screenType = useMediaQuery({ maxWidth: 743 })
//     ? "Mobile"
//     : useMediaQuery({ minWidth: 744, maxWidth: 1439 })
//     ? "Tablet"
//     : "Desktop";

//   const imageSrc = `/public/icons/Benefits/${screenType}/Text-${screenType.toLowerCase()}.svg`;

//   return (
//     <section className={styles.benefits}>
//       <h2 className={styles.title}>Key Benefits</h2>

//       <div className={styles.wrapper}>
//         <img src={imageSrc} alt="Text" className={styles.text_icon} />
//       </div>
//     </section>
//   );
// }
