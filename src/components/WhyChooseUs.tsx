import { FunctionComponent } from "react";
import BenefitIconsRow from "./BenefitIconsRow";
import styles from "./WhyChooseUs.module.css";

export type WhyChooseUsType = {
  className?: string;
};

const WhyChooseUs: FunctionComponent<WhyChooseUsType> = ({
  className = "",
}) => {
  return (
    <div className={[styles.whyChooseUs, className].join(" ")}>
      <h1 className={styles.whyChooseUs1}>WHY CHOOSE US?</h1>
      <div className={styles.benefitIconsRowParent}>
        <BenefitIconsRow
          vuesaxlineardollarCircle="/vuesaxlineardollarcircle.svg"
          competitivePrices="Competitive Prices"
        />
        <BenefitIconsRow
          vuesaxlineardollarCircle="/vuesaxlinearsecurityuser.svg"
          competitivePrices="Secure Booking"
        />
        <BenefitIconsRow
          vuesaxlineardollarCircle="/vuesaxlinearrefreshrightsquare.svg"
          competitivePrices="Seamless Experience"
        />
      </div>
    </div>
  );
};

export default WhyChooseUs;
