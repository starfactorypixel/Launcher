import * as React from "react";
import styles from "./style.scss";

export interface TitleProps {
    className?: string;
    variant?: number;
    children: string;
}

export function Title({className, variant = 0, children}: TitleProps): React.ReactElement {
    const classList: string[] = [styles.title];
    if(className)
        classList.push(className);
    if(variant !== 0)
        classList.push("variant-" + variant);
    return <h4 className={classList.join(" ")}>
        {children}
    </h4>;
}