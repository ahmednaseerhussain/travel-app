import { FunctionComponent } from "react";
import styles from "./BenefitIconsRow.module.css";

export type BenefitIconsRowType = {
  className?: string;
  vuesaxlineardollarCircle?: string;
  competitivePrices?: string;
};

const BenefitIconsRow: FunctionComponent<BenefitIconsRowType> = ({
  className = "",
  vuesaxlineardollarCircle,
  competitivePrices,
}) => {
  return (
    <div className={[styles.benefitIconsRow, className].join(" ")}>
      <div className={styles.vuesaxlineardollarCircleWrapper}>
        <img
          className={styles.vuesaxlineardollarCircleIcon}
          loading="lazy"
          alt=""
          src={vuesaxlineardollarCircle}
        />
      </div>
      <div className={styles.competitivePricesParent}>
        <b className={styles.competitivePrices}>{competitivePrices}</b>
        <div className={styles.loremIpsumIsSimply}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum
        </div>
      </div>
    </div>
  );
};

export default BenefitIconsRow;
