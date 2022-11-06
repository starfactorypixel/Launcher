import React from "react";
import styles from "./style.scss";

export interface TextProps {
    className?: string;
    children?: React.ReactNode;
}

export function Text({className, children}: TextProps): React.ReactElement {
    return <span className={[styles.text, className].join(" ")}>{children}</span>;
}
