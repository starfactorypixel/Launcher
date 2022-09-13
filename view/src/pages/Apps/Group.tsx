import * as React from "react";
import {useCallback} from "react";
import styles from "./style.scss";
import {Section} from "@pages/common/Section";
import {Title} from "@pages/common/Title";

export interface App {
    name: string;
    icon: string;
    preview?: string | null;
    background?: string | null;
    color?: string | null;
}

export interface GroupProps {
    name: string;
    apps: App[];
    onStart?: (app: App) => any;
}

export function Group({name, apps, onStart}: GroupProps): React.ReactElement {
    const handleDragStart = useCallback((event: React.DragEvent<HTMLImageElement>) => {
        event.preventDefault();
    }, []);
    return <Section 
        className={styles.group}
        container
        containerClassName={styles.container}
    >
        <Title>{name}</Title>
        <div className={styles.list}>
            {apps.map((app, index) => {
                const {name, icon, preview = null, background = null, color = null} = app;
                const style: Record<string, string> = {};
                if(background !== null)
                    style["--background"] = background;
                if(color !== null)
                    style["--color"] = color;
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
    </Section>;
}