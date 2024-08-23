import { FunctionComponent, useMemo, type CSSProperties } from "react";
import { Link } from "react-router-dom";
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
          <Link to="/" className={styles.travel}>Travel</Link>
          <nav className={styles.registerLink}>
            <nav className={styles.navLinks}>
              <Link to="/" className={styles.home}>Home</Link>
              <Link to="/destinations" className={styles.destinations}>Destinations</Link>
              <Link to="/about" className={styles.home}>About</Link>
              <Link to="/contact-form" className={styles.contact}>Contact</Link>
              <Link to="/login" className={styles.login}>Login</Link>
            </nav>
          </nav>
        </div>
        <div className={styles.register}>
          <Link to="/register" className={styles.register1}>Register</Link>
        </div>
      </div>
    </header>
  );
};

export default Navigation1;
