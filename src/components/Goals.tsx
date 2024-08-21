import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./Goals.module.css";

export type GoalsType = {
  className?: string;
  name1?: string;
  rectangle10?: string;

  /** Style props */
  propDisplay?: CSSProperties["display"];
};

const Goals: FunctionComponent<GoalsType> = ({
  className = "",
  name1,
  propDisplay,
  rectangle10,
}) => {
  const nameStyle: CSSProperties = useMemo(() => {
    return {
      display: propDisplay,
    };
  }, [propDisplay]);

  return (
    <div className={[styles.goals, className].join(" ")}>
      <div className={styles.name} style={nameStyle}>
        {name1}
      </div>
      <img className={styles.goalsChild} alt="" src={rectangle10} />
    </div>
  );
};

export default Goals;
