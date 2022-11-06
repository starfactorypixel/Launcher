import React, {useMemo} from "react";
import styles from "./style.scss";

export enum PaperTheme {
    DEFAULT,
    RED,
    AQUA
}

export interface PaperProps {
    theme?: PaperTheme;
    className?: string;
    children?: React.ReactNode;
    onClick?: () => any;
}

export function Paper({theme = PaperTheme.DEFAULT, className, children, onClick}: PaperProps): React.ReactElement {
    const classList = useMemo<string[]>(() => {
        const classList: string[] = [styles.paper];

        if (className) {
            classList.push(className);
        }

        switch (theme) {
            case PaperTheme.RED:
                classList.push(styles["theme-red"]);
            break;

            case PaperTheme.AQUA:
                classList.push(styles["theme-aqua"]);
            break;
        }

        return classList;
    }, [className, theme]);

    return <div className={classList.join(" ")} onClick={onClick}>
        {children}
    </div>;
}