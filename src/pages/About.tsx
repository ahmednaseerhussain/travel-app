import { FunctionComponent } from "react";
import WhyChooseUs from "../components/WhyChooseUs";
import TopBookNow from "../components/TopBookNow";
import Component from "../components/Component";
import Footer from "../components/Footer";
import styles from "./About.module.css";

const About: FunctionComponent = () => {
  return (
    <div className={styles.about}>
      <img className={styles.image7Icon} alt="" src="/image-7@2x.png" />
      <div className={styles.aboutInner}>
        <div className={styles.loginRegisterParent}>
          <div className={styles.loginRegister}>
            <a className={styles.travel}>Travel</a>
            <div className={styles.loginButtonsWrapper}>
              <div className={styles.loginButtons}>
                <a className={styles.home}>Home</a>
                <a className={styles.destinations}>Destinations</a>
                <a className={styles.home}>About</a>
                <a className={styles.contact}>Contact</a>
                <a className={styles.login}>Login</a>
              </div>
            </div>
          </div>
          <div className={styles.registerWrapper}>
            <a className={styles.register}>Register</a>
          </div>
        </div>
      </div>
      <div className={styles.aboutChild}>
        <button className={styles.getStartWrapper}>
          <b className={styles.getStart}>Get Start</b>
        </button>
      </div>
      <main className={styles.searchBarParent}>
        <div className={styles.searchBar}>
          <div className={styles.searchInput}>
            <div className={styles.searchIcon}>
              <img
                className={styles.vuesaxlinearsearchNormalIcon}
                loading="lazy"
                alt=""
                src="/vuesaxlinearsearchnormal.svg"
              />
            </div>
          </div>
        </div>
        <section className={styles.whyChooseUsParent}>
          <WhyChooseUs />
          <TopBookNow />
          <Component />
          <Footer
            propTextDecoration="unset"
            copyrightTravel2024="© Copyright "
            propDisplay="inline-block"
            propMinWidth="73px"
            image4="/image-4@2x.png"
          />
        </section>
      </main>
    </div>
  );
};

export default About;
