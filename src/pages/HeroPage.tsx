import { FunctionComponent } from "react";
import Navigation1 from "../components/Navigation1";
import Testimonial from "../components/Testimonial";
import IntercomWidget from "../components/IntercomWidget";
import Subscription from "../components/Subscription";
import Footer from "../components/Footer";
import styles from "./HeroPage.module.css";

const HeroPage: FunctionComponent = () => {
  return (
    <div className={styles.heroPage}>
      <img className={styles.image7Icon} alt="" src="/image-7@2x.png" />
      <Navigation1 />
      <div className={styles.heroPageInner}>
        <button className={styles.getStartWrapper}>
          <b className={styles.getStart}>Get Start</b>
        </button>
      </div>
      <section className={styles.searchBar}>
        <div className={styles.searchInput}>
          <div className={styles.searchIcon}>
            <div className={styles.search}>
              <img
                className={styles.vuesaxlinearsearchNormalIcon}
                loading="lazy"
                alt=""
                src="/vuesaxlinearsearchnormal.svg"
              />
            </div>
          </div>
        </div>
        <div className={styles.testimonialParent}>
          <Testimonial />
          <IntercomWidget />
        </div>
      </section>
      <Subscription />
      <Footer
        copyrightTravel2024="© Copyright Code Dazzle 2024"
        image4="/image-4@2x.png"
      />
    </div>
  );
};

export default HeroPage;
