import * as React from "react";
import styles from "../style.scss";
import {LockedIcon} from "./common/icons/Locked";
import {UnlockedIcon} from "./common/icons/Unlocked";
import {Line} from "./common/Line";
import {Dot} from "./common/Dot";

export interface LeftDoorProps {
    locked?: boolean;
    onDoor?: () => any;
}

export function LeftDoor({locked = false, onDoor}: LeftDoorProps): React.ReactElement {
    const classList: string[] = [
        styles.item, 
        styles["left-door"],
        locked ? styles["red-theme"] : styles["green-theme"]
    ];
    return <div className={classList.join(" ")}>
        <Dot />
        <Line />
        <button 
            className={styles["icon-button"]} 
            onClick={onDoor}
        >
            {locked ? <LockedIcon /> : <UnlockedIcon />}
        </button>
        <span className={styles.name}>
            Door<br />{locked ? "Locked" : "Unlocked"}
        </span>
    </div>;
}