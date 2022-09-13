import * as React from "react";
import styles from "./style.scss";

export interface ParagraphProps {
    className?: string;
    children?: React.ReactNode;
}

export function Paragraph({className, children}: ParagraphProps): React.ReactElement {
    const classList: string[] = [styles.paragraph];
    if(className)
        classList.push(className);
    return <p className={classList.join(" ")}>
        {children}
    </p>;
}