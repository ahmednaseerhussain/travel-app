import { FunctionComponent } from "react";
import TestimonialAuthors from "./TestimonialAuthors";
import TestimonialAuthors1 from "./TestimonialAuthors1";
import styles from "./Component.module.css";

export type ComponentType = {
  className?: string;
};

const Component: FunctionComponent<ComponentType> = ({ className = "" }) => {
  return (
    <div className={[styles.div, className].join(" ")}>
      <div className={styles.reviewsContainer}>
        <h1 className={styles.reviews}>Reviews</h1>
        <div className={styles.reviewNavigation}>
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
      <div className={styles.testimonials}>
        <TestimonialAuthors />
        <TestimonialAuthors1
          evangeline="Evangeline"
          propMinWidth="92px"
          model="Model"
          propMinWidth1="37px"
          ellipse7="/ellipse-7-1@2x.png"
        />
        <TestimonialAuthors1
          evangeline="Alexander"
          propMinWidth="85px"
          model="Software engineer"
          propMinWidth1="110px"
          ellipse7="/ellipse-7-2@2x.png"
        />
      </div>
    </div>
  );
};

export default Component;
