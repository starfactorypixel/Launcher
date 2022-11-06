import * as React from "react";
import styles from "./style.scss";

export enum IconButtonTheme {
    DEFAULT,
    GREY,
    RED
}

export interface IconButtonProps {
    className?: string | null;
    label?: string | null;
    theme?: IconButtonTheme;
    children?: React.ReactNode;
    onClick?: () => void;
}

export function IconButton({
    className = null,
    label = null,
    theme = IconButtonTheme.DEFAULT,
    children,
    onClick
}: IconButtonProps): React.ReactElement {
    const classList: string[] = [styles["icon-button"]];
    if (className !== null) classList.push(className);
    if (theme !== IconButtonTheme.DEFAULT) {
        switch (theme) {
            case IconButtonTheme.GREY:
                classList.push(styles["theme-grey"]);
                break;
            case IconButtonTheme.RED:
                classList.push(styles["theme-red"]);
                break;
        }
    }
    return (
        <div className={classList.join(" ")}>
            <button className={styles.button} onClick={onClick}>
                {children}
            </button>
            {label ? <div className={styles.label}>{label}</div> : null}
        </div>
    );
}
