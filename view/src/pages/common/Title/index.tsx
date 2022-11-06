import React, {useMemo} from "react";
import styles from "./style.scss";

export type TitleVariant = 1;

export type TitleAlign = "left" | "center" | "right";

export interface TitleProps {
    className?: string;
    variant?: TitleVariant | null;
    align?: TitleAlign | null;
    children: string;
}

export function Title({className, variant = null, align = null, children}: TitleProps): React.ReactElement {
    const classList = useMemo<string[]>(() => {
        const classList: string[] = [styles.title];

        if (className) {
            classList.push(className);
        }
        if (variant) {
            classList.push(styles["variant-" + variant]);
        }
        if (align) {
            classList.push(styles["align-" + align]);
        }

        return classList;
    }, [className, variant, align]);

    return <h4 className={classList.join(" ")}>
        {children}
    </h4>;
}