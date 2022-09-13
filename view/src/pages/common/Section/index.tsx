import * as React from "react";
import styles from "./style.scss";

export interface SectionProps {
    container?: boolean;
    className?: string;
    containerClassName?: string;
    children?: React.ReactNode;
}

export function Section({container = false, className, containerClassName, children}: SectionProps): React.ReactElement {
    const classList: string[] = [styles.section];
    if(className)
        classList.push(className);
    const containerClassList: string[] = [styles.container];
    if(containerClassName)
        containerClassList.push(containerClassName);
    return <section className={classList.join(" ")}>
        {container ? <div className={containerClassList.join(" ")}>{children}</div> : children}
    </section>;
}