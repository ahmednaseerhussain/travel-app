import { FunctionComponent } from "react";
import Avatars from "./Avatars";
import Reply from "./Reply";
import styles from "./IntercomWidget.module.css";

export type IntercomWidgetType = {
  className?: string;
};

const IntercomWidget: FunctionComponent<IntercomWidgetType> = ({
  className = "",
}) => {
  return (
    <div className={[styles.intercomWidget, className].join(" ")}>
      <div className={styles.conversationFrame}>
        <div className={styles.conversationHeader}>
          <div className={styles.avatarsContainer}>
            <div className={styles.avatarsRow}>
              <div className={styles.avatarItems}>
                <Avatars />
                <Avatars />
              </div>
            </div>
            <div className={styles.chatBubble}>
              <div className={styles.chatBubbleContent}>
                <div className={styles.chatMessage}>
                  <div className={styles.hiThereHow}>
                    👋 Hi there! How can I help?
                  </div>
                </div>
              </div>
              <div className={styles.userReply}>
                <div className={styles.replyContent}>
                  <button className={styles.replyItems}>
                    <div className={styles.imJustBrowsing}>
                      I’m just browsing!
                    </div>
                  </button>
                  <div className={styles.replyItems1}>
                    <div className={styles.mAgoSeen}>2m ago. Seen</div>
                  </div>
                </div>
                <div className={styles.botReply}>
                  <textarea
                    className={styles.botReplyContent}
                    placeholder={`No problem. 
If you need help you can type below to ask a question 👇`}
                    rows={6}
                    cols={15}
                  />
                </div>
              </div>
              <div className={styles.botjustNow}>Bot・Just now</div>
            </div>
          </div>
        </div>
        <div className={styles.quickReplies}>
          <div className={styles.quickRepliesInner}>
            <div className={styles.howCanYouHelpMeWrapper}>
              <div className={styles.howCanYou}>How can you help me?</div>
            </div>
          </div>
          <button className={styles.anotherQuickReplyWrapper}>
            <div className={styles.anotherQuickReply}>Another quick reply</div>
          </button>
        </div>
      </div>
      <div className={styles.line} />
      <Reply />
    </div>
  );
};

export default IntercomWidget;
