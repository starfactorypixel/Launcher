import React from "react";
import styles from "./style.scss";

export interface ItemProps {
    icon: React.ReactNode;
    value: React.ReactNode;
}

export function Item({icon, value}: ItemProps): React.ReactElement {
    return (
        <div className={styles.item}>
            <span className={styles.icon}>{icon}</span>
            <span className={styles.value}>{value}</span>
        </div>
    );
}
