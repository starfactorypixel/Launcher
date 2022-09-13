import * as React from "react";
import styles from "../../style.scss";

export const Dot: React.FC = React.memo(() => {
    return <svg className={styles.dot} viewBox="0 0 4 4">
        <circle cx="2" cy="2" r="2" />
    </svg>;
});