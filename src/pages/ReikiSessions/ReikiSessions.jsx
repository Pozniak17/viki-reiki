import { useState } from "react";
import Section from "../../components/shared/Section/Section";
import styles from "./ReikiSessions.module.css";
import CustomModal from "../../components/CustomModal/CustomModal";

export default function ReikiSessions() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  return (
    <Section>
      <img
        className={styles.images}
        srcSet="/images/ReikiSessions/reiki-sessions-1x.jpg 1x, /images/ReikiSessions/reiki-sessions-2x.jpg 2x"
        src="/images/ReikiSessions/reiki-sessions-1x.jpg"
        alt="healing hand"
      />
      <h2 className={styles.title}>Individual Reiki Sessions</h2>
      <p className={styles.text}>
        Individual Reiki Sessions help deeply relax, restore energetic balance,
        and support physical and emotional well-being. During the session, the
        Reiki practitioner places their hands on specific areas of the body or
        works within the client’s energy field, promoting the harmonization of
        life energy.
      </p>

      <div className={styles.main_wrapper}>
        <div className={styles.wrapper}>
          <h3 className={styles.second_title}>What to Expect:</h3>
          <ul className={styles.list}>
            <li className={styles.item}>
              <img src="/icons/MyStory/diamond.svg" alt="icon" />
              <p className={styles.second_text}>
                Deep relaxation and tension release.
              </p>
            </li>
            <li className={styles.item}>
              <img src="/icons/MyStory/diamond.svg" alt="icon" />
              <p className={styles.second_text}>
                A sensation of warmth or tingling during the session.
              </p>
            </li>
            <li className={styles.item}>
              <img src="/icons/MyStory/diamond.svg" alt="icon" />
              <p className={styles.second_text}>
                Overall improvement in well-being and emotional state.
              </p>
            </li>
          </ul>
        </div>
        <div className={styles.wrapper}>
          <h3 className={styles.second_title}>Benefits:</h3>
          <ul className={styles.list}>
            <li className={styles.item}>
              <img src="/icons/MyStory/diamond.svg" alt="icon" />
              <p className={styles.second_text}>
                Reduction of stress and anxiety levels.
              </p>
            </li>
            <li className={styles.item}>
              <img src="/icons/MyStory/diamond.svg" alt="icon" />
              <p className={styles.second_text}>
                Improved energetic balance of the body.
              </p>
            </li>
            <li className={styles.item}>
              <img src="/icons/MyStory/diamond.svg" alt="icon" />
              <p className={styles.second_text}>
                Support for physical health and pain relief.
              </p>
            </li>
          </ul>
        </div>
        <div className={styles.wrapper}>
          <h3 className={styles.second_title}>Who It’s For:</h3>
          <ul className={styles.list}>
            <li className={styles.item}>
              <img src="/icons/MyStory/diamond.svg" alt="icon" />
              <p className={styles.second_text}>
                People looking for a way to relax and relieve tension.
              </p>
            </li>
            <li className={styles.item}>
              <img src="/icons/MyStory/diamond.svg" alt="icon" />
              <p className={styles.second_text}>
                Those going through a challenging period in life and in need of
                emotional support.
              </p>
            </li>
            <li className={styles.item}>
              <img src="/icons/MyStory/diamond.svg" alt="icon" />
              <p className={styles.second_text}>
                Individuals interested in energy practices and self-development.
              </p>
            </li>
          </ul>
        </div>

        <div>
          <div className={styles.wrapper}>
            <h3 className={styles.second_title}>Duration & Format:</h3>
            <ul className={styles.list}>
              <li className={styles.item}>
                <img src="/icons/MyStory/diamond.svg" alt="icon" />
                <p className={styles.second_text}>Duration: 60 minutes.</p>
              </li>
              <li className={styles.item}>
                <img src="/icons/MyStory/diamond.svg" alt="icon" />
                <p className={styles.second_text}>
                  Format: In-person or online.
                </p>
              </li>
            </ul>
          </div>
          <button
            onClick={() => setModalIsOpen(true)}
            className={styles.button}
          >
            Book Session
          </button>
        </div>
      </div>

      <img
        className={styles.icon_image}
        src="/images/ReikiSessions/first.svg"
        alt="hands around moon"
      />

      <div className={styles.main_wrapper}>
        <h2 className={styles.title}>Group Reiki Session</h2>
        <p className={styles.text}>
          Group Reiki sessions take place in a shared atmosphere where
          participants interact with each other and receive energetic support
          from the practitioner. These gatherings may include meditations,
          tuning into positive energy, and collective healing.
        </p>

        <div className={styles.wrapper}>
          <h3 className={styles.second_title}>What to Expect:</h3>
          <ul className={styles.list}>
            <li className={styles.item}>
              <img src="/icons/MyStory/diamond.svg" alt="icon" />
              <p className={styles.second_text}>
                Shared practice in a friendly environment.
              </p>
            </li>
            <li className={styles.item}>
              <img src="/icons/MyStory/diamond.svg" alt="icon" />
              <p className={styles.second_text}>
                A sense of harmony and unity with the group.
              </p>
            </li>
            <li className={styles.item}>
              <img src="/icons/MyStory/diamond.svg" alt="icon" />
              <p className={styles.second_text}>
                Improved emotional state and infusion of positive energy.
              </p>
            </li>
          </ul>
        </div>

        <div className={styles.wrapper}>
          <h3 className={styles.second_title}>Benefits:</h3>
          <ul className={styles.list}>
            <li className={styles.item}>
              <img src="/icons/MyStory/diamond.svg" alt="icon" />
              <p className={styles.second_text}>
                Enhanced energetic effect through group interaction.
              </p>
            </li>
            <li className={styles.item}>
              <img src="/icons/MyStory/diamond.svg" alt="icon" />
              <p className={styles.second_text}>
                Community support and experience exchange.
              </p>
            </li>
            <li className={styles.item}>
              <img src="/icons/MyStory/diamond.svg" alt="icon" />
              <p className={styles.second_text}>
                Increased awareness and inner peace.
              </p>
            </li>
          </ul>
        </div>

        <div className={styles.wrapper}>
          <h3 className={styles.second_title}>Who It’s For:</h3>
          <ul className={styles.list}>
            <li className={styles.item}>
              <img src="/icons/MyStory/diamond.svg" alt="icon" />
              <p className={styles.second_text}>
                People who feel the need for support from like-minded
                individuals.
              </p>
            </li>
            <li className={styles.item}>
              <img src="/icons/MyStory/diamond.svg" alt="icon" />
              <p className={styles.second_text}>
                Those who want to combine Reiki with meditation in a group
                setting.
              </p>
            </li>
            <li className={styles.item}>
              <img src="/icons/MyStory/diamond.svg" alt="icon" />
              <p className={styles.second_text}>
                Individuals looking for new ways to relieve stress and achieve
                inner harmony.
              </p>
            </li>
          </ul>
        </div>

        <div>
          <div className={styles.wrapper}>
            <h3 className={styles.second_title}>Duration & Format:</h3>
            <ul className={styles.list}>
              <li className={styles.item}>
                <img src="/icons/MyStory/diamond.svg" alt="icon" />
                <p className={styles.second_text}>Duration: 90 minutes.</p>
              </li>
              <li className={styles.item}>
                <img src="/icons/MyStory/diamond.svg" alt="icon" />
                <p className={styles.second_text}>Format: In-person.</p>
              </li>
            </ul>
          </div>

          <button
            onClick={() => setModalIsOpen(true)}
            className={styles.button}
          >
            Book Session
          </button>
        </div>
      </div>

      <img
        className={styles.icon_image}
        src="/images/ReikiSessions/second.svg"
        alt="hands around moon"
      />

      <h2 className={styles.title}>Reiki Meditation</h2>
      <p className={styles.text}>
        Reiki meditations help cleanse energy channels, restore inner peace, and
        enhance vitality. The practice includes special breathing techniques,
        visualization, and concentration on energy flows.
      </p>

      <div className={styles.main_wrapper}>
        <div className={styles.wrapper}>
          <h3 className={styles.second_title}>What to Expect:</h3>
          <ul className={styles.list}>
            <li className={styles.item}>
              <img src="/icons/MyStory/diamond.svg" alt="icon" />
              <p className={styles.second_text}>
                Deep relaxation and release of emotional tension.
              </p>
            </li>
            <li className={styles.item}>
              <img src="/icons/MyStory/diamond.svg" alt="icon" />
              <p className={styles.second_text}>
                Improved concentration and inner balance.
              </p>
            </li>
            <li className={styles.item}>
              <img src="/icons/MyStory/diamond.svg" alt="icon" />
              <p className={styles.second_text}>
                Gradual increase in energy sensitivity.
              </p>
            </li>
          </ul>
        </div>

        <div className={styles.wrapper}>
          <h3 className={styles.second_title}>Benefits:</h3>
          <ul className={styles.list}>
            <li className={styles.item}>
              <img src="/icons/MyStory/diamond.svg" alt="icon" />
              <p className={styles.second_text}>
                Helps release negative emotions.
              </p>
            </li>
            <li className={styles.item}>
              <img src="/icons/MyStory/diamond.svg" alt="icon" />
              <p className={styles.second_text}>
                Strengthens the connection with one’s body and intuition.
              </p>
            </li>
            <li className={styles.item}>
              <img src="/icons/MyStory/diamond.svg" alt="icon" />
              <p className={styles.second_text}>
                Aids in unlocking inner potential and raising awareness levels.
              </p>
            </li>
          </ul>
        </div>

        <div className={styles.wrapper}>
          <h3 className={styles.second_title}>Who It’s For:</h3>
          <ul className={styles.list}>
            <li className={styles.item}>
              <img src="/icons/MyStory/diamond.svg" alt="icon" />
              <p className={styles.second_text}>
                People who want to learn how to manage their own energy.
              </p>
            </li>
            <li className={styles.item}>
              <img src="/icons/MyStory/diamond.svg" alt="icon" />
              <p className={styles.second_text}>
                Those seeking to improve concentration and inner harmony.
              </p>
            </li>
            <li className={styles.item}>
              <img src="/icons/MyStory/diamond.svg" alt="icon" />
              <p className={styles.second_text}>
                Individuals looking for an effective meditation method for daily
                life.
              </p>
            </li>
          </ul>
        </div>

        <div>
          <div className={styles.wrapper}>
            <h3 className={styles.second_title}>Duration & Format:</h3>
            <ul className={styles.list}>
              <li className={styles.item}>
                <img src="/icons/MyStory/diamond.svg" alt="icon" />
                <p className={styles.second_text}>Duration: 45 minutes.</p>
              </li>
              <li className={styles.item}>
                <img src="/icons/MyStory/diamond.svg" alt="icon" />
                <p className={styles.second_text}>
                  Format: In-person or online.
                </p>
              </li>
            </ul>
          </div>
          <button
            onClick={() => setModalIsOpen(true)}
            className={styles.button}
          >
            Book Session
          </button>
        </div>
      </div>

      <img
        className={styles.icon_image}
        src="/images/ReikiSessions/third.svg"
        alt="hands and butterfly"
      />

      <h2 className={styles.title}>Reiki Training</h2>
      <p className={styles.text}>
        Reiki training is a journey of self-discovery, the development of
        energetic abilities, and an opportunity to help oneself and others. The
        course consists of theoretical and practical lessons, during which
        students receive initiation into the corresponding Reiki level.
      </p>

      <div className={styles.main_wrapper}>
        <div className={styles.wrapper}>
          <h3 className={styles.second_title}>What to Expect:</h3>
          <ul className={styles.list}>
            <li className={styles.item}>
              <img src="/icons/MyStory/diamond.svg" alt="icon" />
              <p className={styles.second_text}>
                Learning the fundamental principles of Reiki and energy
                practices.
              </p>
            </li>
            <li className={styles.item}>
              <img src="/icons/MyStory/diamond.svg" alt="icon" />
              <p className={styles.second_text}>
                Mastering techniques for self-healing and working with others
                energy.
              </p>
            </li>
            <li className={styles.item}>
              <img src="/icons/MyStory/diamond.svg" alt="icon" />
              <p className={styles.second_text}>
                Gradual deepening of the connection with universal life energy.
              </p>
            </li>
          </ul>
        </div>

        <div className={styles.wrapper}>
          <h3 className={styles.second_title}>Benefits:</h3>
          <ul className={styles.list}>
            <li className={styles.item}>
              <img src="/icons/MyStory/diamond.svg" alt="icon" />
              <p className={styles.second_text}>
                The ability to practice Reiki independently in daily life.
              </p>
            </li>
            <li className={styles.item}>
              <img src="/icons/MyStory/diamond.svg" alt="icon" />
              <p className={styles.second_text}>
                Development of sensitivity to energy flows.
              </p>
            </li>
            <li className={styles.item}>
              <img src="/icons/MyStory/diamond.svg" alt="icon" />
              <p className={styles.second_text}>
                Gaining skills that contribute to harmony and life improvement.
              </p>
            </li>
          </ul>
        </div>

        <div className={styles.wrapper}>
          <h3 className={styles.second_title}>Who It’s For:</h3>
          <ul className={styles.list}>
            <li className={styles.item}>
              <img src="/icons/MyStory/diamond.svg" alt="icon" />
              <p className={styles.second_text}>
                People who want to develop their own energetic abilities.
              </p>
            </li>
            <li className={styles.item}>
              <img src="/icons/MyStory/diamond.svg" alt="icon" />
              <p className={styles.second_text}>
                Those looking to help themselves and their loved ones through
                Reiki.
              </p>
            </li>
            <li className={styles.item}>
              <img src="/icons/MyStory/diamond.svg" alt="icon" />
              <p className={styles.second_text}>
                Individuals seeking new methods of personal and spiritual
                growth.
              </p>
            </li>
          </ul>
        </div>

        <div>
          <div className={styles.wrapper}>
            <h3 className={styles.second_title}>Duration & Format:</h3>
            <ul className={styles.list}>
              <li className={styles.item}>
                <img src="/icons/MyStory/diamond.svg" alt="icon" />
                <p className={styles.second_text}>
                  Duration: Depends on the level (from 1 day to several weeks).
                </p>
              </li>
              <li className={styles.item}>
                <img src="/icons/MyStory/diamond.svg" alt="icon" />
                <p className={styles.second_text}>
                  Format: In-person or online.
                </p>
              </li>
            </ul>
          </div>

          <button
            onClick={() => setModalIsOpen(true)}
            className={styles.button}
          >
            Book Session
          </button>
        </div>
      </div>
      <CustomModal isOpen={modalIsOpen} onClose={() => setModalIsOpen(false)} />
    </Section>
  );
}
