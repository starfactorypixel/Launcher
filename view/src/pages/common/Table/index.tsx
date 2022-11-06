import React, {CSSProperties, useMemo} from "react";
import styles from "./style.scss";

export interface TableProps extends React.ComponentProps<"table"> {
    cellSpacing?: number;
    head?: React.ReactNode;
    children?: React.ReactNode;
}

export function Table({cellSpacing, head, children, ...props}: TableProps): React.ReactElement {
    const classList = useMemo<string[]>(() => {
        const classList: string[] = [styles.table];

        if (props.className) {
            classList.push(props.className);
        }

        return classList;
    }, [props.className]);

    const style = useMemo<CSSProperties>(() => ({
        borderSpacing: cellSpacing,
        ...props.style
    }), [cellSpacing, props.style]);

    return <table 
        {...props} 
        className={classList.join(" ")}
        style={style}
    >
        {head ? (
            <thead className={styles.head}>
                {head}
            </thead>
        ) : null}
        <tbody className={styles.body}>
            {children}
        </tbody>
    </table>;
}

export * from "./Row";
export * from "./Cell";