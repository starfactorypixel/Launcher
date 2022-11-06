import React, { useMemo } from "react";
import styles from "./style.scss";

export interface DividerProps {
    className?: string;
}

export function Divider({className}: DividerProps) {
    const classList = useMemo<string[]>(() => {
        const classList: string[] = [styles.divider];

        if (className) {
            classList.push(className);
        }

        return classList;
    }, [className]);

    return <div className={classList.join(" ")} />;
}