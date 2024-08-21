import { FunctionComponent } from "react";
import styles from "./Subscription.module.css";

export type SubscriptionType = {
  className?: string;
};

const Subscription: FunctionComponent<SubscriptionType> = ({
  className = "",
}) => {
  return (
    <section className={[styles.subscription, className].join(" ")}>
      <div className={styles.subscrible}>
        <img
          className={styles.subscriptionBackgroundIcon}
          loading="lazy"
          alt=""
          src="/rectangle-45@2x.png"
        />
        <div className={styles.subscriptionContent}>
          <div className={styles.subscriptionContentChild} />
          <div className={styles.getSpecialOffersAndMoreFParent}>
            <b className={styles.getSpecialOffersContainer}>
              <p className={styles.getSpecialOffers}>Get special offers,</p>
              <p className={styles.getSpecialOffers}>
                and more from travelworld
              </p>
            </b>
            <div className={styles.emailInput}>
              <div className={styles.enterYourEmail}>Enter your email</div>
              <button className={styles.subscriptionButton}>
                <b className={styles.subscrible1}>Subscrible</b>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Subscription;
