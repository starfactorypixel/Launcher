import React, {useMemo} from "react";
import styles from "./style.scss";

export enum SkeletonTypes {
    RECTANGLE,
    CIRCLE
}

export interface SkeletonProps {
    className?: string | null;
    type?: SkeletonTypes;
    width?: number | null;
    height?: number | null;
    borderRadius?: number | null;
}

export function Skeleton({className = null, type = SkeletonTypes.RECTANGLE, width = null, height = null, borderRadius = null}: SkeletonProps): React.ReactElement {
    const classList = useMemo<string[]>(() => {
        const classList: string[] = [styles.skeleton];

        if (className !== null) {
            classList.push(className);
        }
        if (type === SkeletonTypes.CIRCLE) {
            classList.push(styles.circle);
        }

        return classList;
    }, [className]);

    const style = useMemo<Record<string, string>>(() => {
        const style: Record<string, string> = {};

        if (width) {
            style["--skeleton-width"] = width + "px";
        }
        if (height) {
            style["--skeleton-height"] = height + "px";
        }
        if (borderRadius) {
            style["--skeleton-border-radius"] = borderRadius + "px";
        }

        return style;
    }, [width, height, borderRadius]);

    return <div 
        className={classList.join(" ")} 
        style={style}
    />;
}