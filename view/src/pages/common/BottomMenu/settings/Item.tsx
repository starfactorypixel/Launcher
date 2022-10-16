import React, {useMemo} from "react";
import styles from "../style.scss";

export interface ItemProps {
    icon: React.ReactNode;
    name?: string;
    active?: boolean;
    className?: string;
    style?: React.CSSProperties;
    children?: React.ReactNode;
    onClick?: () => any;
}

export function Item({icon, name, active = false, children, onClick, ...props}: ItemProps): React.ReactElement {
    const classList = useMemo<string[]>(() => {
        const classList: string[] = [styles.item];
        if (active) {
            classList.push(styles.active);
        }
        if (props.className) {
            classList.push(props.className);
        }
        return classList;
    }, [active, props]);
    const className = useMemo<string>(() => classList.join(" "), [classList]);

    return <div 
        className={className} 
        style={props.style}
        onClick={onClick} 
    >
        {icon}
        {children ?? (name ? <div className={styles.name}>
            {name}
        </div> : null)}
    </div>;
}