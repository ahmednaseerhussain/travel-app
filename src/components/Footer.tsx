import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./Footer.module.css";

export type FooterType = {
  className?: string;
  copyrightTravel2024?: string;
  image4?: string;

  /** Style props */
  propTextDecoration?: CSSProperties["textDecoration"];
  propDisplay?: CSSProperties["display"];
  propMinWidth?: CSSProperties["minWidth"];
};

const Footer: FunctionComponent<FooterType> = ({
  className = "",
  propTextDecoration,
  copyrightTravel2024,
  propDisplay,
  propMinWidth,
  image4,
}) => {
  const aboutUsStyle: CSSProperties = useMemo(() => {
    return {
      textDecoration: propTextDecoration,
    };
  }, [propTextDecoration]);

  const copyrightTravel2024Style: CSSProperties = useMemo(() => {
    return {
      display: propDisplay,
      minWidth: propMinWidth,
    };
  }, [propDisplay, propMinWidth]);

  return (
    <footer className={[styles.footer, className].join(" ")}>
      <div className={styles.footerChild} />
      <div className={styles.footerContent}>
        <div className={styles.footerColumns}>
          <div className={styles.supportLinksWrapper}>
            <div className={styles.supportLinks}>
              <b className={styles.support}>Support</b>
              <div className={styles.helpLinks}>
                <div className={styles.helpCenter}>Help Center</div>
                <div className={styles.safetyInformation}>
                  Safety information
                </div>
                <div className={styles.cancellationOptions}>
                  Cancellation options
                </div>
              </div>
            </div>
          </div>
          <div className={styles.companyLinks}>
            <div className={styles.companyLinkItems}>
              <b className={styles.company}>Company</b>
              <div className={styles.companyLinkNames}>
                <a className={styles.aboutUs} style={aboutUsStyle}>
                  About us
                </a>
              </div>
              <div className={styles.companyLinkNames}>
                <a className={styles.privacyPolicy}>Privacy policy</a>
              </div>
              <div className={styles.companyLinkNames}>
                <div className={styles.communityBlog}>Community Blog</div>
              </div>
              <div className={styles.termsOfService}>Terms of service</div>
            </div>
          </div>
          <div className={styles.partnership}>
            <div className={styles.contactParent}>
              <b className={styles.contact}>Contact</b>
              <a className={styles.faq}>FAQ</a>
            </div>
            <div className={styles.getInTouch}>Get in touch</div>
            <div className={styles.partnerships}>Partnerships</div>
          </div>
        </div>
        <div className={styles.socialParent}>
          <b className={styles.social}>Social</b>
          <div className={styles.socialIcons}>
            <img
              className={styles.groupIcon}
              loading="lazy"
              alt=""
              src="/group.svg"
            />
            <img
              className={styles.groupIcon}
              loading="lazy"
              alt=""
              src="/group-1.svg"
            />
            <img
              className={styles.groupIcon}
              loading="lazy"
              alt=""
              src="/group-2.svg"
            />
            <img
              className={styles.groupIcon}
              loading="lazy"
              alt=""
              src="/group-3.svg"
            />
          </div>
        </div>
      </div>
      <div className={styles.lineParent}>
        <div className={styles.frameChild} />
        <div className={styles.copyright}>
          <div className={styles.copyrightTravel2024Wrapper}>
            <div
              className={styles.copyrightTravel2024}
              style={copyrightTravel2024Style}
            >
              {copyrightTravel2024}
            </div>
          </div>
          <img
            className={styles.image4Icon}
            loading="lazy"
            alt=""
            src={image4}
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
