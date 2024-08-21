import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./TestimonialAuthors1.module.css";

export type TestimonialAuthors1Type = {
  className?: string;
  evangeline?: string;
  model?: string;
  ellipse7?: string;

  /** Style props */
  propMinWidth?: CSSProperties["minWidth"];
  propMinWidth1?: CSSProperties["minWidth"];
};

const TestimonialAuthors1: FunctionComponent<TestimonialAuthors1Type> = ({
  className = "",
  evangeline,
  propMinWidth,
  model,
  propMinWidth1,
  ellipse7,
}) => {
  const evangelineStyle: CSSProperties = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  const modelStyle: CSSProperties = useMemo(() => {
    return {
      minWidth: propMinWidth1,
    };
  }, [propMinWidth1]);

  return (
    <div className={[styles.testimonialAuthors, className].join(" ")}>
      <div className={styles.frameParent}>
        <div className={styles.evangelineParent}>
          <b className={styles.evangeline} style={evangelineStyle}>
            {evangeline}
          </b>
          <div className={styles.model} style={modelStyle}>
            {model}
          </div>
        </div>
        <div className={styles.starParent}>
          <img className={styles.frameChild} alt="" src="/star-2.svg" />
          <img className={styles.frameChild} alt="" src="/star-2.svg" />
          <img className={styles.frameChild} alt="" src="/star-2.svg" />
          <img className={styles.frameChild} alt="" src="/star-2.svg" />
          <img className={styles.frameChild} alt="" src="/star-2.svg" />
        </div>
      </div>
      <div className={styles.loremIpsumIsSimply}>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text.
      </div>
      <img
        className={styles.testimonialAuthorsChild}
        loading="lazy"
        alt=""
        src={ellipse7}
      />
    </div>
  );
};

export default TestimonialAuthors1;
