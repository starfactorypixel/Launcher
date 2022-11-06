import React, {useMemo} from "react";
import styles from "./style.scss";

export type ParagraphAlign = "left" | "center" | "right";

export interface ParagraphProps {
    className?: string;
    align?: ParagraphAlign;
    children?: React.ReactNode;
}

export function Paragraph({className, align, children}: ParagraphProps): React.ReactElement {
    const classList = useMemo<string[]>(() => {
        const classList: string[] = [styles.paragraph];

        if (className) {
            classList.push(className);
        }
        if (align) {
            classList.push(styles["align-" + align]);
        }

        return classList;
    }, [className, align]);

    return <p className={classList.join(" ")}>{children}</p>;
}
