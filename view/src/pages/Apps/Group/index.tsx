import React, { useMemo } from "react";
import {useCallback} from "react";
import styles from "../style.scss";
import {Section} from "@pages/common/Section";
import {Title} from "@pages/common/Title";
import {ListSkeleton} from "./ListSkeleton";

export interface App {
    name: string;
    icon: string;
    preview?: string | null;
    background?: string | null;
    color?: string | null;
}

export interface GroupProps {
    name: string;
    apps?: App[] | null;
    skeleton?: boolean;
    skeletonAppsCount?: number;
    onStart?: (app: App) => any;
}

export function Group({name, apps, skeleton = false, skeletonAppsCount = 0, onStart}: GroupProps): React.ReactElement {
    const handleDragStart = useCallback((event: React.DragEvent<HTMLImageElement>) => {
        event.preventDefault();
    }, []);

    return <Section 
        className={styles.group}
        container
        containerClassName={styles.container}
    >
        <Title>{name}</Title>
        {skeleton || !apps ? (
            <ListSkeleton appsCount={skeletonAppsCount} />
        ) : (
            <div className={styles.list}>
                {apps.map((app, index) => {
                    const {name, icon, preview = null, background = null, color = null} = app;
                    
                    const style: Record<string, string> = {};
                    if (background !== null) {
                        style["--background"] = background;
                    }
                    if (color !== null) {
                        style["--color"] = color;
                    }

                    return <div 
                        key={index} 
                        className={styles.item} 
                        style={style}
                        onClick={onStart ? onStart.bind(undefined, app) : undefined}    
                    >
                        {preview !== null ? (
                            <img 
                                className={styles.preview}
                                src={preview}
                                title={name}
                                onDragStart={handleDragStart}
                            /> 
                        ) : null}
                        <div className={styles.content}>
                            <img
                                className={styles.icon}
                                src={icon}
                                onDragStart={handleDragStart}
                            />
                            <div className={styles.name}>
                                {name}
                            </div>
                        </div>
                    </div>;
                })}
            </div>
        )}
    </Section>;
}