import { FunctionComponent } from "react";
import styles from "./Reply.module.css";

export type ReplyType = {
  className?: string;
};

const Reply: FunctionComponent<ReplyType> = ({ className = "" }) => {
  return (
    <div className={[styles.reply, className].join(" ")}>
      <div className={styles.replyInputContainer}>
        <div className={styles.typeAReply}>Type a reply...</div>
        <div className={styles.chips}>
          <div className={styles.chipsText}></div>
          <div className={styles.chipsText1}></div>
          <div className={styles.chipsText2}></div>
          <div className={styles.chipsText3}></div>
        </div>
      </div>
    </div>
  );
};

export default Reply;
