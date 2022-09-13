import * as React from "react";
import styles from "./style.scss";

export interface ButtonGroupProps {
    children?: React.ReactNode;
}

export function ButtonGroup({children}: ButtonGroupProps): React.ReactElement {
    return <div className={styles["button-group"]}>
        {children}
    </div>;
}