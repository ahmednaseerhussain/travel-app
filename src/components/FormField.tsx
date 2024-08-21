import { FunctionComponent } from "react";
import Goals from "./Goals";
import styles from "./FormField.module.css";

export type FormFieldType = {
  className?: string;
};

const FormField: FunctionComponent<FormFieldType> = ({ className = "" }) => {
  return (
    <section className={[styles.formField, className].join(" ")}>
      <div className={styles.name}>
        <div className={styles.nameFields}>
          <div className={styles.name1}>Name</div>
        </div>
        <img className={styles.nameChild} alt="" src="/rectangle-10.svg" />
      </div>
      <Goals
        name1="Email address"
        propDisplay="inline-block"
        rectangle10="/rectangle-10.svg"
      />
      <Goals
        name1="Phone number"
        propDisplay="inline-block"
        rectangle10="/rectangle-10.svg"
      />
      <Goals
        name1="Budget"
        propDisplay="unset"
        rectangle10="/rectangle-10.svg"
      />
      <Goals name1="Goals" rectangle10="/rectangle-10.svg" />
    </section>
  );
};

export default FormField;
