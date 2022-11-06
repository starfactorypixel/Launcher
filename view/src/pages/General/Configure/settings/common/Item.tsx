import React, {useMemo} from "react";
import styles from "../../style.scss";

export enum ItemTheme {
    GREEN,
    RED
}

export interface ItemProps {
    className?: string | null;
    theme?: ItemTheme | null;
    column?: boolean;
    right?: boolean;
    skeleton?: boolean;
    children: React.ReactNode;
}

export function Item({
    className = null,
    theme = null,
    column = false,
    right = false,
    skeleton = false,
    children
}: ItemProps): React.ReactElement {
    const classList = useMemo<string[]>(() => {
        const classList: string[] = [styles.item];

        if (className !== null) {
            classList.push(className);
        }

        switch (theme) {
            case ItemTheme.GREEN:
                classList.push(styles["green-theme"]);
                break;
            case ItemTheme.RED:
                classList.push(styles["red-theme"]);
                break;
        }

        if (column) {
            classList.push(styles.column);
        }
        if (right) {
            classList.push(styles.right);
        }

        if (skeleton) {
            classList.push(styles.skeleton);
        }

        return classList;
    }, [className, theme, column, skeleton]);

    return <div className={classList.join(" ")}>{children}</div>;
}
