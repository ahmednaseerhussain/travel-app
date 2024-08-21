import { FunctionComponent } from "react";
import styles from "./TestimonialAuthors.module.css";

export type TestimonialAuthorsType = {
  className?: string;
};

const TestimonialAuthors: FunctionComponent<TestimonialAuthorsType> = ({
  className = "",
}) => {
  return (
    <div className={[styles.testimonialAuthors, className].join(" ")}>
      <div className={styles.authorNames}>
        <div className={styles.authorOccupations}>
          <b className={styles.sebastian}>Sebastian</b>
          <div className={styles.graphicDesign}>Graphic design</div>
        </div>
        <div className={styles.testimonialRatings}>
          <img
            className={styles.testimonialRatingsChild}
            loading="lazy"
            alt=""
            src="/star-2.svg"
          />
          <img
            className={styles.testimonialRatingsChild}
            loading="lazy"
            alt=""
            src="/star-2.svg"
          />
          <img
            className={styles.testimonialRatingsChild}
            loading="lazy"
            alt=""
            src="/star-2.svg"
          />
          <img
            className={styles.testimonialRatingsChild}
            loading="lazy"
            alt=""
            src="/star-2.svg"
          />
          <img
            className={styles.testimonialRatingsChild}
            alt=""
            src="/star-2.svg"
          />
        </div>
      </div>
      <div className={styles.loremIpsumIsSimply}>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text.
      </div>
      <img
        className={styles.paginationDotsIcon}
        loading="lazy"
        alt=""
        src="/ellipse-7@2x.png"
      />
    </div>
  );
};

export default TestimonialAuthors;
