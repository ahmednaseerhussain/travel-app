import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./FrameComponent.module.css";

export type FrameComponentType = {
  className?: string;
  rectangle6?: string;
  sCMindanou?: string;
  mindanouPhilippines?: string;
  prop?: string;

  /** Style props */
  propMinWidth?: CSSProperties["minWidth"];
  propMinWidth1?: CSSProperties["minWidth"];
  propMinWidth2?: CSSProperties["minWidth"];
};

const FrameComponent: FunctionComponent<FrameComponentType> = ({
  className = "",
  rectangle6,
  sCMindanou,
  propMinWidth,
  mindanouPhilippines,
  propMinWidth1,
  prop,
  propMinWidth2,
}) => {
  const sCMindanouStyle: CSSProperties = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  const mindanouPhilippinesStyle: CSSProperties = useMemo(() => {
    return {
      minWidth: propMinWidth1,
    };
  }, [propMinWidth1]);

  const bStyle: CSSProperties = useMemo(() => {
    return {
      minWidth: propMinWidth2,
    };
  }, [propMinWidth2]);

  return (
    <div className={[styles.rectangleParent, className].join(" ")}>
      <img className={styles.instanceChild} alt="" src={rectangle6} />
      <div className={styles.frameParent}>
        <div className={styles.scmindanouParent}>
          <b className={styles.scmindanou} style={sCMindanouStyle}>
            {sCMindanou}
          </b>
          <div className={styles.vuesaxlinearlocationParent}>
            <img
              className={styles.vuesaxlinearlocationIcon}
              loading="lazy"
              alt=""
              src="/vuesaxlinearlocation.svg"
            />
            <div
              className={styles.mindanouPhilippines}
              style={mindanouPhilippinesStyle}
            >
              {mindanouPhilippines}
            </div>
          </div>
        </div>
        <div className={styles.parent}>
          <b className={styles.b} style={bStyle}>
            {prop}
          </b>
          <div className={styles.night}>/night</div>
        </div>
      </div>
      <div className={styles.ellipseParent}>
        <div className={styles.frameChild} />
        <div className={styles.frameItem} />
        <div className={styles.frameItem} />
        <div className={styles.frameItem} />
        <div className={styles.frameItem} />
      </div>
      <div className={styles.frameWrapper}>
        <div className={styles.frameGroup}>
          <div className={styles.starWrapper}>
            <img className={styles.starIcon} alt="" src="/star-1.svg" />
          </div>
          <b className={styles.b1}>4.8</b>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent;
