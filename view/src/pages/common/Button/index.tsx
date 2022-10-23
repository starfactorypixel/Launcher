import React, {useMemo} from "react";
import styles from "./style.scss";

export interface ButtonProps {
    className?: string;
    variant?: number;
    check?: boolean;
    on?: boolean;
    children?: React.ReactNode;
    onClick?: () => any;
}

export function Button({className, variant = 0, check = false, on = false, children, onClick}: ButtonProps): React.ReactElement {
    const classList = useMemo<string[]>(() => {
        const classList: string[] = [styles.button];

        if (className) {
            classList.push(className);
        }
        if (variant !== 0) {
            classList.push("variant-" + variant);
        }
        if (check) {
            classList.push(styles.check);
        }
        if (on) {
            classList.push(styles.on);
        }

        return classList;
    }, [className, variant, check, on]);

    return <button className={classList.join(" ")} onClick={onClick}>
        {children}
    </button>;
}