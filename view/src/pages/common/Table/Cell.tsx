import React, {useMemo} from "react";
import styles from "./style.scss";

export interface CellCommonProps {
    children?: React.ReactNode;
}

export interface CellDefaultProps extends CellCommonProps, React.ComponentProps<"td"> {
    header?: false;
}

export interface CellHeaderProps extends CellCommonProps, React.ComponentProps<"th"> {
    header: true;
}

export type CellProps = CellDefaultProps | CellHeaderProps;

export function Cell({header = false, children, ...props}: CellProps): React.ReactElement {
    const classList = useMemo<string[]>(() => {
        const classList: string[] = [styles.cell];

        if (props.className) {
            classList.push(props.className);
        }

        return classList;
    }, [props.className]);

    return React.createElement(
        header ? "th" : "td", 
        {className: classList.join(" "), ...props}, 
        children
    );
}