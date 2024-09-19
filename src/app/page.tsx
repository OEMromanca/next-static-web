import SecondSection from '@/components/secondSection/SecondSection';
import FirstSection from '../components/firstSection/FirstSection';
import styles from './page.module.css';
import ThirdSection from '@/components/thirdSection/ThirdSection';

export default function Home() {
  return (
    <div className={styles.container}>
      <FirstSection />
      <SecondSection />
      <ThirdSection />
    </div>
  );
}
