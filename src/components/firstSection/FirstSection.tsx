import Image from 'next/image';
import styles from './firstSection.module.css';

const images = [
  {
    src: '/assets/band1.jpg',
    alt: 'New York',
    text: 'The atmosphere in New York is lorem ipsum.',
  },
  {
    src: '/assets/band2.jpg',
    alt: 'Chicago',
    text: "Thank you, Chicago - A night we won't forget.",
  },
  {
    src: '/assets/band3.jpg',
    alt: 'Los Angeles',
    text: 'We had the best time playing at Venice Beach!',
  },
];

const FirstSection = () => {
  return (
    <section className={styles.section}>
      <div className={styles.slideshow}>
        {images.map((image, index) => (
          <div key={index} className={styles.slide}>
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className={styles.image}
            />
            <div className={styles.textOverlay}>
              <div
                style={{
                  fontWeight: 'bold',
                  fontSize: '24px',
                  marginBottom: 5,
                }}
              >
                {image.alt}
              </div>
              <div>{image.text}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FirstSection;
