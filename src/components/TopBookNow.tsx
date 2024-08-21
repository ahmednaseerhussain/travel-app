import { FunctionComponent } from "react";
import FrameComponent from "./FrameComponent";
import styles from "./TopBookNow.module.css";

export type TopBookNowType = {
  className?: string;
};

const TopBookNow: FunctionComponent<TopBookNowType> = ({ className = "" }) => {
  return (
    <div className={[styles.topBookNow, className].join(" ")}>
      <h1 className={styles.topBookNow1}>top book now</h1>
      <div className={styles.bookingCards}>
        <FrameComponent
          rectangle6="/card-backgrounds@2x.png"
          sCMindanou="The Oasis"
          propMinWidth="80px"
          mindanouPhilippines="Rio de Janeiro, Brazil"
          propMinWidth1="122px"
          prop="$10,000"
          propMinWidth2="71px"
        />
        <FrameComponent
          rectangle6="/rectangle-6-1@2x.png"
          sCMindanou="The Sanctuary"
          propMinWidth="120px"
          mindanouPhilippines="Bali, Indonesia"
          propMinWidth1="86px"
          prop="$9,000"
          propMinWidth2="64px"
        />
        <FrameComponent
          rectangle6="/rectangle-6-2@2x.png"
          sCMindanou="The Infinity"
          propMinWidth="92px"
          mindanouPhilippines="Sydney, Australia"
          propMinWidth1="103px"
          prop="$8,000"
          propMinWidth2="64px"
        />
        <FrameComponent
          rectangle6="/rectangle-6-3@2x.png"
          sCMindanou="La Maison"
          propMinWidth="83px"
          mindanouPhilippines="Barcelona, Spain"
          propMinWidth1="101px"
          prop="$8,000"
          propMinWidth2="64px"
        />
        <FrameComponent
          rectangle6="/rectangle-6-4@2x.png"
          sCMindanou="Serenity Shores"
          propMinWidth="129px"
          mindanouPhilippines="Sydney, Australia"
          propMinWidth1="103px"
          prop="$7,000"
          propMinWidth2="62px"
        />
        <FrameComponent
          rectangle6="/rectangle-6-5@2x.png"
          sCMindanou="Azure Haven"
          propMinWidth="104px"
          mindanouPhilippines="Barcelona, Spain"
          propMinWidth1="101px"
          prop="$8,000"
          propMinWidth2="64px"
        />
        <FrameComponent
          rectangle6="/rectangle-6-6@2x.png"
          sCMindanou="Ocean Breeze"
          propMinWidth="113px"
          mindanouPhilippines="Bali, Indonesia"
          propMinWidth1="86px"
          prop="$7,000"
          propMinWidth2="62px"
        />
        <FrameComponent
          rectangle6="/rectangle-6-7@2x.png"
          sCMindanou="Palm Breeze"
          mindanouPhilippines="Phuket, Thailand"
          prop="$6,000"
        />
      </div>
      <button className={styles.seeAllButton}>
        <b className={styles.seeAll}>See all</b>
        <img
          className={styles.vuesaxlineararrowRightIcon}
          alt=""
          src="/vuesaxlineararrowright1.svg"
        />
      </button>
    </div>
  );
};

export default TopBookNow;
