import { FunctionComponent } from "react";
import styles from "./SendEnquiryButton.module.css";

export type SendEnquiryButtonType = {
  className?: string;
};

const SendEnquiryButton: FunctionComponent<SendEnquiryButtonType> = ({
  className = "",
}) => {
  return (
    <div className={[styles.sendEnquiryButton, className].join(" ")}>
      <div className={styles.sendEnquiryWrapper}>
        <div className={styles.sendEnquiry}>Send Enquiry</div>
      </div>
      <img
        className={styles.navArrow1Icon}
        loading="lazy"
        alt=""
        src="/navarrow-1.svg"
      />
    </div>
  );
};

export default SendEnquiryButton;
