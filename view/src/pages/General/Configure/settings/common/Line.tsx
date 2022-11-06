import * as React from "react";
import styles from "../../style.scss";

export const Line: React.FC = React.memo(() => {
    return (
        <svg className={styles.line} viewBox="0 0 85 2">
            <path d="M0 1L85 1.00001" />
        </svg>
    );
});

Line.displayName = "Line";
