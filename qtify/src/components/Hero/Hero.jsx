import Headphone from "../../assets/headphone.png";
import styles from "./Hero.module.css";
export default function Hero() {
  return (
    <>
      <div className={styles.heroSection}>
        <div className={styles.bannerText}>
          <p>100 Thousand Songs, ad-free</p>
          <p>Over thousands podcast episodes</p>
        </div>
        <img
          src={Headphone}
          alt="vibrating headphones illustration"
          height={212}
          width={212}
        />
      </div>
    </>
  );
}
