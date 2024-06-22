import React from 'react';
import { getImageUrl } from '../../utils';
import styles from "./About.module.css";

export const About = () => {
  return <section className={styles.container} id="about">
    <h2 className={styles.title}>About</h2>
    <div className={styles.content}>
        <img src={getImageUrl("about/aboutImage.png")}
        alt='me sitting with laptop'
        className={styles.aboutImage}/>
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")}
              alt='cursoricon'
            />
            <div className={styles.aboutItemText}>
              <h3>Frontend Developer</h3>
              <p>
                I'm a Frontend Developer with experience in building responsive and optimized sites.
              </p>
            </div>
          </li>

          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/serverIcon.png")}
              alt='servericon'
            />
            <div className={styles.aboutItemText}>
              <h3>Backend Developer</h3>
              <p>
                I'm a have experience developing fast and optimized back-end systems and APIs.
              </p>
            </div>
          </li>
          
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/uiIcon.png")}
              alt='UIicon'
            />
            <div className={styles.aboutItemText}>
              <h3>UI Design</h3>
              <p>
                I have designed multiple landing pages and have created design systems as well.
              </p>
            </div>
          </li>
        </ul>
    </div>
  </section>
}
