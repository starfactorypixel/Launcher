import * as React from "react";
import styles from "../style.scss";

export const PowerIcon: React.FC = React.memo(() => {
    return <svg className={styles.icon} width="16" height="16" viewBox="0 0 16 16">
        <path d="M8.88889 0H7.11111V8.88889H8.88889V0ZM13.1822 1.92889L11.92 3.19111C13.3244 4.32 14.2222 6.05333 14.2222 8C14.2222 11.44 11.44 14.2222 8 14.2222C4.56 14.2222 1.77778 11.44 1.77778 8C1.77778 6.05333 2.67556 4.32 4.07111 3.18222L2.81778 1.92889C1.09333 3.39556 0 5.56444 0 8C0 12.4178 3.58222 16 8 16C12.4178 16 16 12.4178 16 8C16 5.56444 14.9067 3.39556 13.1822 1.92889Z" fill="white" />
    </svg>;
});