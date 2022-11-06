import React from "react";
import styles from "./style.scss";

export interface RowProps {
    children?: React.ReactNode;
}

export function Row({children}: RowProps): React.ReactElement {
    return <tr className={styles.row}>
        {children}
    </tr>;
}