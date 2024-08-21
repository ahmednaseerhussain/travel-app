import { FunctionComponent } from "react";
import Navigation1 from "../components/Navigation1";
import Banner from "../components/Banner";
import FeatureNews from "../components/FeatureNews";
import Footer from "../components/Footer";
import styles from "./Destinations.module.css";

const Destinations: FunctionComponent = () => {
  return (
    <div className={styles.destinations}>
      <img
        className={styles.image7Icon}
        loading="lazy"
        alt=""
        src="/image-7@2x.png"
      />
      <Navigation1 frameDivWidth="1335px" travelGap="40px" />
      <div className={styles.destinationsInner}>
        <button className={styles.getStartWrapper}>
          <b className={styles.getStart}>Get Start</b>
        </button>
      </div>
      <div className={styles.destinationsChild}>
        <div className={styles.frameWrapper}>
          <div className={styles.vuesaxlinearsearchNormalWrapper}>
            <img
              className={styles.vuesaxlinearsearchNormalIcon}
              loading="lazy"
              alt=""
              src="/vuesaxlinearsearchnormal.svg"
            />
          </div>
        </div>
      </div>
      <main className={styles.bannerParent}>
        <Banner />
        <FeatureNews />
        <Footer
          propTextDecoration="none"
          copyrightTravel2024="© Copyright Code Dazzle 2024"
          propDisplay="unset"
          propMinWidth="unset"
          image4="/image-4@2x.png"
        />
      </main>
    </div>
  );
};

export default Destinations;
