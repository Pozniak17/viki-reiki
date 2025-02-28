import ReactPlayer from "react-player/youtube";
import { useTranslation } from "react-i18next";
import styles from "./Video.module.css";
// import preview from "/images/Video/preview.jpg";
import Section from "../shared/Section/Section";
import Title from "../shared/Title/Title";
import iconPlay from "/icons/Video/playIcon.svg";

function Preview() {
  return (
    <picture className={styles.preview}>
      <source
        srcSet="/images/Video/Desktop/Video-desktop-1x.jpg 1x, /images/Video/Desktop/Video-desktop-2x.jpg 2x"
        media="(min-width: 1440px)"
      />
      <source
        srcSet="/images/Video/Tablet/Video-tablet-1x.jpg 1x, /images/Video/Tablet/Video-tablet-2x.jpg 2x"
        media="(min-width: 744px)"
      />
      <source
        srcSet="/images/Video/Mobile/Video-mobile-1x.jpg 1x, /images/Video/Mobile/Video-mobile-2x.jpg 2x"
        media="(max-width: 743px)"
      />
      <img
        src="/images/Video/Desktop/Video-desktop-1x.jpg"
        alt="Video"
        className={styles.image}
      />
    </picture>
  );
}

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
          light={<Preview />}
          playIcon={<img src={iconPlay} className={styles.icon} />}
        />
      </div>
    </Section>
  );
}
