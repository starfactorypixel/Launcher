import * as React from "react";
import {LightsIcon} from "./common/icons/Lights";
import {Line} from "./common/Line";
import {Dot} from "./common/Dot";
import styles from "../style.scss";

export interface LightsProps {
    mode: string;
    onDetailsOpen?: () => any;
}

export function Lights({mode, onDetailsOpen}: LightsProps): React.ReactElement {
    return <div className={[styles.item, styles.lights].join(" ")}>
        <Dot />
        <Line />
        <button 
            className={styles["icon-button"]}
            onClick={onDetailsOpen}
        >
            <LightsIcon />
        </button>
        <span className={styles.name}>
            Lights<br />{mode} Mode
        </span>
    </div>;
}