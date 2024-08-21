import { FunctionComponent } from "react";
import styles from "./Banner.module.css";

export type BannerType = {
  className?: string;
};

const Banner: FunctionComponent<BannerType> = ({ className = "" }) => {
  return (
    <section className={[styles.banner, className].join(" ")}>
      <img className={styles.image13Icon} alt="" src="/image-13@2x.png" />
      <h1 className={styles.exploreMaldives}>explore maldives</h1>
      <div className={styles.bannerDividerParent}>
        <div className={styles.bannerDivider} />
        <div className={styles.frameParent}>
          <div className={styles.loremIpsumIsSimplyDummyTeParent}>
            <div className={styles.loremIpsumIsSimply}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s.
            </div>
            <button className={styles.seeAllParent}>
              <b className={styles.seeAll}>See all</b>
              <img
                className={styles.vuesaxlineararrowRightIcon}
                alt=""
                src="/vuesaxlineararrowright.svg"
              />
            </button>
          </div>
          <div className={styles.destinationCardsParent}>
            <div className={styles.destinationCards}>
              <img
                className={styles.destinationCardImages}
                loading="lazy"
                alt=""
                src="/rectangle-53@2x.png"
              />
              <b className={styles.azureHaven}>Azure Haven</b>
            </div>
            <div className={styles.destinationCards}>
              <img
                className={styles.destinationCardImages}
                loading="lazy"
                alt=""
                src="/rectangle-54@2x.png"
              />
              <b className={styles.sereneSanctuary}>Serene Sanctuary</b>
            </div>
            <div className={styles.destinationCards}>
              <img
                className={styles.destinationCardImages}
                loading="lazy"
                alt=""
                src="/rectangle-54-1@2x.png"
              />
              <b className={styles.verdantVista}>Verdant Vista</b>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
