import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./Navigation1.module.css";

export type Navigation1Type = {
  className?: string;

  /** Style props */
  frameDivWidth?: CSSProperties["width"];
  travelGap?: CSSProperties["gap"];
};

const Navigation1: FunctionComponent<Navigation1Type> = ({
  className = "",
  frameDivWidth,
  travelGap,
}) => {
  const navigationStyle: CSSProperties = useMemo(() => {
    return {
      width: frameDivWidth,
    };
  }, [frameDivWidth]);

  const navbarStyle: CSSProperties = useMemo(() => {
    return {
      gap: travelGap,
    };
  }, [travelGap]);

  return (
    <header
      className={[styles.navigation, className].join(" ")}
      style={navigationStyle}
    >
      <div className={styles.navbar} style={navbarStyle}>
        <div className={styles.travelParent}>
          <a className={styles.travel}>Travel</a>
          <nav className={styles.registerLink}>
            <nav className={styles.navLinks}>
              <a className={styles.home}>Home</a>
              <a className={styles.destinations} href="#">Destinations</a>
              <a className={styles.home}>About</a>
              <a className={styles.contact}>Contact</a>
              <a className={styles.login}>Login</a>
            </nav>
          </nav>
        </div>
        <div className={styles.register}>
          <a className={styles.register1}>Register</a>
        </div>
      </div>
    </header>
  );
};

export default Navigation1;
