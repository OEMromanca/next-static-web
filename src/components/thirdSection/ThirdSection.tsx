import React from 'react';
import Image from 'next/image';
import styles from './thirdSection.module.css';

const ThirdSection = () => {
  return (
    <section className={styles.section}>
      <h2 className={styles.title}>TOUR DATES</h2>
      <p className={styles.subtitle}>Remember to book your tickets!</p>
      <div className={styles.schedule}>
        <div className={styles.scheduleItem}>
          September <span className={styles.soldOut}>SOLD OUT</span>
        </div>
        <div className={styles.scheduleItem}>
          October <span className={styles.soldOut}>SOLD OUT</span>
        </div>
        <div className={styles.scheduleItem}>
          November
          <span className={styles.circle}>3</span>
        </div>
      </div>
      <div className={styles.detailsSection}>
        <div className={styles.imageItem}>
          <div className={styles.imageContainer}>
            <Image
              src='/assets/new-york.jpg'
              alt='Image 1'
              layout='fill'
              objectFit='cover'
            />
          </div>
          <div className={styles.infoContainer}>
            <h3 className={styles.infoTitle}>New York</h3>
            <p className={styles.infoDate}>October 10, 2024</p>
            <p className={styles.infoText}>
              Praesent tincidunt sed tellus ut rutrum sed vitae justo.
            </p>
            <button className={styles.buyButton}>Buy Tickets</button>
          </div>
        </div>
        <div className={styles.imageItem}>
          <div className={styles.imageContainer}>
            <Image
              src='/assets/paris.jpg'
              alt='Image 2'
              layout='fill'
              objectFit='cover'
            />
          </div>
          <div className={styles.infoContainer}>
            <h3 className={styles.infoTitle}>Paris</h3>
            <p className={styles.infoDate}>November 15, 2024</p>
            <p className={styles.infoText}>
              Praesent tincidunt sed tellus ut rutrum sed vitae justo.
            </p>
            <button className={styles.buyButton}>Buy Tickets</button>
          </div>
        </div>
        <div className={styles.imageItem}>
          <div className={styles.imageContainer}>
            <Image
              src='/assets/san-francisco.jpg'
              alt='Image 3'
              layout='fill'
              objectFit='cover'
            />
          </div>
          <div className={styles.infoContainer}>
            <h3 className={styles.infoTitle}>San Francisco</h3>
            <p className={styles.infoDate}>December 1, 2024</p>
            <p className={styles.infoText}>
              Praesent tincidunt sed tellus ut rutrum sed vitae justo.
            </p>
            <button className={styles.buyButton}>Buy Tickets</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ThirdSection;
