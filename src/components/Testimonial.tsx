import { FunctionComponent } from "react";
import TestimonialAuthors from "./TestimonialAuthors";
import TestimonialAuthors1 from "./TestimonialAuthors1";
import styles from "./Testimonial.module.css";

export type TestimonialType = {
  className?: string;
};

const Testimonial: FunctionComponent<TestimonialType> = ({
  className = "",
}) => {
  return (
    <div className={[styles.testimonial, className].join(" ")}>
      <div className={styles.testimonialCard}>
        <div className={styles.testimonialContent}>
          <b className={styles.testimonials}>Testimonials</b>
          <div className={styles.testimonialNavigation}>
            <div className={styles.vuesaxlineararrowRightWrapper}>
              <img
                className={styles.vuesaxlineararrowRightIcon}
                loading="lazy"
                alt=""
                src="/vuesaxlineararrowright.svg"
              />
            </div>
            <div className={styles.vuesaxlineararrowRightWrapper}>
              <img
                className={styles.vuesaxlineararrowRightIcon1}
                loading="lazy"
                alt=""
                src="/vuesaxlineararrowright-11.svg"
              />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.testimonialDetails}>
        <TestimonialAuthors />
        <TestimonialAuthors1
          evangeline="Evangeline"
          model="Model"
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
      <div className={styles.pagination}>
        <div className={styles.paginationDotsContainer}>
          <div className={styles.paginationDotItems} />
          <div className={styles.paginationDotItems1} />
          <div className={styles.paginationDotItems1} />
          <div className={styles.paginationDotItems1} />
          <div className={styles.paginationDotItems1} />
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
