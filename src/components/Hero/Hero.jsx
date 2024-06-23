import React from 'react'
import { getImageUrl } from '../../utils';
import styles from './Hero.module.css';

export const Hero = () => {
  return <section className={styles.container}>
    <div className={styles.content}>
        <h1 className={styles.title}>Hi I'm Prajakta</h1>
        <p className={styles.description}>I'm a full-stack developer with 5 years of experience using React, Angular and NodeJs. Reach out if you'd like to lear more!</p>
        <a className={styles.contactBtn} href='prajaktatamse97@gmail.com'>Contact Me</a>
    </div>
    <img className={styles.heroImg}
    src={getImageUrl("hero/heroImage.png")}
    alt='Hero image of me'></img>
    <div className={styles.topBlur}></div>
    <div className={styles.bittomBlur}></div>

  </section>;
}
