import * as React from "react";
import {useState, useCallback} from "react";
import styles from "../style.scss";

export const RightBeltIcon: React.FC = React.memo(() => {
    return <svg className={styles.icon} width="36" height="36">
        <path d="M23.7457 13.6081H20.967V20.7555H23.7457L24.449 24H28.6688V11H24.449L23.7457 13.6081Z" />
        <path d="M7.33122 11.0674H17.8725V24H7.33122V11.0674Z" />
        <path d="M2 12.4295H5.22131V22.5706H2V12.4295Z" />
        <path d="M30.7787 12.4295H34V22.5706H30.7787V12.4295Z" />
    </svg>;
});

export interface RightBeltProps {
    belt: boolean;
    onBelt?: (belt: boolean) => any;
}

export function RightBelt({belt, onBelt}: RightBeltProps): React.ReactElement {
    const [active, setActive] = useState(belt);
    const handleBelt = useCallback(() => {
        const newActive: boolean = !active;
        setActive(newActive);
        onBelt?.(newActive);
    }, [active]);
    const classList: string[] = [styles.item];
    if(active)
        classList.push(styles.active);
    return <div className={classList.join(" ")} onClick={handleBelt}>
        <RightBeltIcon />
        <div className={styles.name}>
            Right belt
        </div>
    </div>;
}