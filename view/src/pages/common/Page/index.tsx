import React, {useMemo} from "react";
import styles from "./style.scss";

export interface PageProps {
    className?: string;
    children?: React.ReactNode;
}

export function Page({className, children}: PageProps): React.ReactElement {
    const classList = useMemo<string[]>(() => {
        const classList: string[] = [styles.main];

        if (className) {
            classList.push(className);
        }

        return classList;
    }, [className]);

    return <div className={classList.join(" ")}>
        {children}
    </div>;
}