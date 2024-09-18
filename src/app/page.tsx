import FirstSection from '../components/firstSection/FirstSection';
import styles from './page.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <FirstSection />
    </div>
  );
}
