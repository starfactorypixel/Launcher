import React from "react";
import {LightsIcon} from "../common/icons/Lights";
import {Line} from "../common/Line";
import {Dot} from "../common/Dot";
import styles from "../../style.scss";
import {Item} from "../common/Item";
import {LightsSkeleton} from "./LightsSkeleton";

export const lightsModesNames: string[] = [
    "Off",
    "Parking",
    "Auto",
    "On"
];

export interface LightsProps {
    mode?: number;
    skeleton?: boolean;
    onDetailsOpen?: () => any;
}

export function Lights({mode = 0, skeleton = false, onDetailsOpen}: LightsProps): React.ReactElement {
    if (skeleton) {
        return <LightsSkeleton />;
    }

    return <Item className={styles.lights}>
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
    </Item>;
}