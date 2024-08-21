import { FunctionComponent } from "react";
import NewsCardContainers from "./NewsCardContainers";
import styles from "./FeatureNews.module.css";

export type FeatureNewsType = {
  className?: string;
};

const FeatureNews: FunctionComponent<FeatureNewsType> = ({
  className = "",
}) => {
  return (
    <section className={[styles.featureNews, className].join(" ")}>
      <div className={styles.newsHeader}>
        <h1 className={styles.featureNews1}>Feature News</h1>
        <div className={styles.frameParent}>
          <div className={styles.vuesaxlineararrowRightWrapper}>
            <img
              className={styles.vuesaxlineararrowRightIcon}
              loading="lazy"
              alt=""
              src="/vuesaxlineararrowright-1.svg"
            />
          </div>
          <div className={styles.vuesaxlineararrowRightWrapper}>
            <img
              className={styles.vuesaxlineararrowRightIcon1}
              loading="lazy"
              alt=""
              src="/vuesaxlineararrowright-2.svg"
            />
          </div>
        </div>
      </div>
      <div className={styles.newsCardContainersParent}>
        <NewsCardContainers
          newsCardImages="/rectangle-33@2x.png"
          deliciousRestaurantAtHanalei="Delicious restaurant at Hanalei Bay"
        />
        <NewsCardContainers
          newsCardImages="/rectangle-33-1@2x.png"
          deliciousRestaurantAtHanalei="Top 10 most beautiful check-in spots in Ph ..."
        />
        <NewsCardContainers
          newsCardImages="/rectangle-33-2@2x.png"
          deliciousRestaurantAtHanalei="Top 5 newest services at Navagio Beach"
        />
      </div>
      <div className={styles.paginatorDotsParent}>
        <div className={styles.paginatorDots} />
        <div className={styles.paginatorDots1} />
        <div className={styles.paginatorDots1} />
      </div>
    </section>
  );
};

export default FeatureNews;
