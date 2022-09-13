import * as React from "react";
import styles from "./style.scss";

export interface MainProps {
    className?: string;
    children?: React.ReactNode;
}

export function Main({className, children}: MainProps): React.ReactElement {
    const classList: string[] = [styles.main];
    if(className)
        classList.push(className);
    return <div className={classList.join(" ")}>
        {children}
    </div>;
}