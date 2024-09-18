import React from 'react';
import Image from 'next/image';
import styles from './secondSection.module.css';

const SecondSection = () => {
  return (
    <section className={styles.section}>
      <h2 className={styles.title}>THE BAND</h2>
      <p>We love music</p>
      <p>
        We have created a fictional band website. Lorem ipsum dolor sit amet,
        consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
        et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
        exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
        dolore eu fugiat nulla pariatur.
      </p>

      <div className={styles.imageGallery}>
        <div className={styles.imageItem}>
          <p className={styles.imageTitle}>Band Member 1</p>
          <Image
            src='/assets/band1.jpg'
            alt='Band Member 1'
            width={180}
            height={200}
            className={styles.image}
          />
        </div>
        <div className={styles.imageItem}>
          <p className={styles.imageTitle}>Band Member 2</p>
          <Image
            src='/assets/band2.jpg'
            alt='Band Member 2'
            width={180}
            height={200}
            className={styles.image}
          />
        </div>
        <div className={styles.imageItem}>
          <p className={styles.imageTitle}>Band Member 3</p>
          <Image
            src='/assets/band4.jpg'
            alt='Band Member 3'
            width={180}
            height={200}
            className={styles.image}
          />
        </div>
      </div>
    </section>
  );
};

export default SecondSection;
