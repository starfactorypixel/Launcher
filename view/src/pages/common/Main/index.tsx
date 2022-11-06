import React, {CSSProperties, useMemo} from "react";
import styles from "./style.scss";

export type MainVerticalAlign = "top" | "center" | "bottom";

export interface MainProps {
    verticalAlign?: MainVerticalAlign | null;
    className?: string;
    style?: CSSProperties;
    children?: React.ReactNode;
}

export function Main({
    verticalAlign = null,
    className,
    style,
    children
}: MainProps): React.ReactElement {
    const classList = useMemo<string[]>(() => {
        const classList: string[] = [styles.main];

        if (className) {
            classList.push(className);
        }
        if (verticalAlign) {
            classList.push(styles["v-align-" + verticalAlign]);
        }

        return classList;
    }, [className, verticalAlign]);

    return (
        <div className={classList.join(" ")} style={style}>
            {children}
        </div>
    );
}
