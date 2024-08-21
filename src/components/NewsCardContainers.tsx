import { FunctionComponent } from "react";
import styles from "./NewsCardContainers.module.css";

export type NewsCardContainersType = {
  className?: string;
  newsCardImages?: string;
  deliciousRestaurantAtHanalei?: string;
};

const NewsCardContainers: FunctionComponent<NewsCardContainersType> = ({
  className = "",
  newsCardImages,
  deliciousRestaurantAtHanalei,
}) => {
  return (
    <div className={[styles.newsCardContainers, className].join(" ")}>
      <img
        className={styles.newsCardImages}
        loading="lazy"
        alt=""
        src={newsCardImages}
      />
      <div className={styles.newsCardContent}>
        <div className={styles.newsCardDateParent}>
          <div className={styles.newsCardDate}>
            <img
              className={styles.vuesaxlinearcalendarIcon}
              loading="lazy"
              alt=""
              src="/vuesaxlinearcalendar.svg"
            />
            <div className={styles.february202024}>February 20, 2024</div>
          </div>
          <h3 className={styles.deliciousRestaurantAt}>
            {deliciousRestaurantAtHanalei}
          </h3>
        </div>
        <div className={styles.loremIpsumIsSimply}>
          Lorem Ipsum is simply dummy text of the printing and typeset industry.
          Lorem Ipsum has been lorem ...
        </div>
        <div className={styles.readMore}>
          <div className={styles.readMoreButton}>
            <img
              className={styles.vuesaxlineararrowRightIcon}
              loading="lazy"
              alt=""
              src="/vuesaxlineararrowright-3.svg"
            />
          </div>
          <b className={styles.seeMore}>See more</b>
        </div>
      </div>
    </div>
  );
};

export default NewsCardContainers;
