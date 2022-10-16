import * as React from "react";
import {LightsIcon} from "./common/icons/Lights";
import {Line} from "./common/Line";
import {Dot} from "./common/Dot";
import styles from "../style.scss";

export const lightsModesNames: string[] = [
    "Off",
    "Parking",
    "Auto",
    "On"
];

export interface LightsProps {
    mode: number;
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
            Lights<br />{lightsModesNames[mode]} Mode
        </span>
    </div>;
}