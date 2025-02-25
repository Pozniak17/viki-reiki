import ReactPlayer from "react-player/youtube";
import { useTranslation } from "react-i18next";
import styles from "./Video.module.css";
import preview from "../../../public/images/Video/preview.jpg";
import Section from "../shared/Section/Section";
import Title from "../shared/Title/Title";
import iconPlay from "../../../public/icons/Video/playIcon.svg";

export default function Video() {
  const { t } = useTranslation();
  return (
    <Section>
      <Title>{t("video.title")}</Title>
      <div className={styles.video_player}>
        <ReactPlayer
          className={styles["react-player"]}
          url="https://www.youtube.com/watch?v=LXb3EKWsInQ"
          controls
          width="100%"
          height="100%"
          light={preview}
          playIcon={<img src={iconPlay} className={styles.icon} />}
        />
      </div>
    </Section>
  );
}
