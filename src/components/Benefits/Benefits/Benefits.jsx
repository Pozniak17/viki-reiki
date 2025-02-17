import { useMediaQuery } from "react-responsive";
import { motion, AnimatePresence } from "framer-motion";
import BenefitsMobile from "../BenefitsMobile/BenefitsMobile";
import BenefitsTablet from "../BenefitsTablet/BenefitsTablet";
import BenefitsDesktop from "../BenefitsDesktop/BenefitsDesktop";
import styles from "./Benefits.module.css";

export default function Benefits() {
  const isMobileScreen = useMediaQuery({ maxWidth: 743 });
  const isTabletScreen = useMediaQuery({ minWidth: 744, maxWidth: 1439 });
  // const isDesktopScreen = useMediaQuery({ minWidth: 1440 });

  const BenefitsComponent = isMobileScreen
    ? BenefitsMobile
    : isTabletScreen
    ? BenefitsTablet
    : BenefitsDesktop;

  return (
    <section className={styles.benefits}>
      <h2 className={styles.title}>Key Benefits</h2>
      <AnimatePresence mode="wait">
        <motion.div
          key={BenefitsComponent.name} // Унікальний ключ для анімації
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
        >
          <BenefitsComponent />
        </motion.div>
      </AnimatePresence>
    </section>
  );
}
