import * as React from "react";
import {Title} from "@pages/common/Title";
import styles from "./style.scss";

export interface SpeedProps {
    speed: number;
}

export function Speed({speed}: SpeedProps): React.ReactElement {
    return <div className={styles.speed}>
        <Title>Speed</Title>
        <div className={styles.content}>
            <h1 className={styles.value}>{speed}</h1>
            <h4 className={styles.type}>km/h</h4>
        </div>
    </div>;
}