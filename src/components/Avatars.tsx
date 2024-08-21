import { FunctionComponent } from "react";
import styles from "./Avatars.module.css";

export type AvatarsType = {
  className?: string;
};

const Avatars: FunctionComponent<AvatarsType> = ({ className = "" }) => {
  return (
    <div className={[styles.avatars, className].join(" ")}>
      <div className={styles.ellipseParent}>
        <div className={styles.frameChild} />
        <div className={styles.div}></div>
      </div>
    </div>
  );
};

export default Avatars;
