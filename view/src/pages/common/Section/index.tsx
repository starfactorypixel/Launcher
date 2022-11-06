import React, {CSSProperties, useMemo} from "react";
import styles from "./style.scss";

export interface SectionProps {
    container?: boolean;
    containerWidth?: number;
    className?: string;
    containerClassName?: string;
    children?: React.ReactNode;
}

export function Section({
    container = false,
    containerWidth = 0,
    className,
    containerClassName,
    children
}: SectionProps): React.ReactElement {
    const classList = useMemo<string[]>(() => {
        const classList: string[] = [styles.section];

        if (className) {
            classList.push(className);
        }

        return classList;
    }, [className]);

    const containerClassList = useMemo<string[]>(() => {
        const classList: string[] = [styles.container];

        if (containerClassName) {
            classList.push(containerClassName);
        }

        return classList;
    }, [containerClassName]);

    const containerStyle = useMemo<CSSProperties>(() => {
        const style: CSSProperties = {};

        if (containerWidth !== 0) {
            style["width"] = containerWidth + "px";
        }

        return style;
    }, [containerWidth]);

    return (
        <section className={classList.join(" ")}>
            {container ? (
                <div className={containerClassList.join(" ")} style={containerStyle}>
                    {children}
                </div>
            ) : (
                children
            )}
        </section>
    );
}
