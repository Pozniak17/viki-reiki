import { motion } from "framer-motion";
import styles from "./Hero.module.css";
import leaves from "../../../public/images/Hero/leaves.png";
import text from "../../../public/images/Hero/text.png";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <img src={text} alt="text" className={styles.hero_cirleText} />
      <div className={styles.hero_circle}>
        <motion.h1
          className={styles.hero_title}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          Reiki Master
        </motion.h1>
        <motion.h2
          className={styles.hero_text}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          Take the First Step Toward Your Health and Happiness
        </motion.h2>
        <motion.button
          className={styles.hero_button}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95, originX: 0.5, originY: 0.5 }}
        >
          <span>Start Your Journey</span>
        </motion.button>
        <img src={leaves} alt="leaves" className={styles.hero_imageLeaves} />
      </div>
    </section>
  );
}
