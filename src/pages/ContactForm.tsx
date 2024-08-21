import { FunctionComponent } from "react";
import FormField from "../components/FormField";
import SendEnquiryButton from "../components/SendEnquiryButton";
import styles from "./ContactForm.module.css";

const ContactForm: FunctionComponent = () => {
  return (
    <div className={styles.contactForm}>
      <section className={styles.contactUsWrapper}>
        <h1 className={styles.contactUs}>Contact Us</h1>
      </section>
      <FormField />
      <div className={styles.sendEnquiryButtonWrapper}>
        <SendEnquiryButton />
      </div>
    </div>
  );
};

export default ContactForm;
