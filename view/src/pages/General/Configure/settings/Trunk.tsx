import * as React from "react";
import styles from "../style.scss";
import {LockedIcon} from "./common/icons/Locked";
import {UnlockedIcon} from "./common/icons/Unlocked";

export interface TrunkProps {
    locked?: boolean;
    onTrunk?: () => any;
}

export function Trunk({locked = false, onTrunk}: TrunkProps): React.ReactElement {
    const classList: string[] = [
        styles.item, 
        styles.trunk,
        locked ? styles["red-theme"] : styles["green-theme"],
        styles.column
    ];
    return <div className={classList.join(" ")}>
        <button 
            className={styles["icon-button"]} 
            onClick={onTrunk}
        >
            {locked ? <LockedIcon /> : <UnlockedIcon />}
        </button>
        <span className={styles.name}>
            Trunk<br />{locked ? "Locked" : "Unlocked"}
        </span>
    </div>;
}