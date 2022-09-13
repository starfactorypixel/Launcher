import * as React from "react";
import styles from "../style.scss";
import {LockedIcon} from "./common/icons/Locked";
import {UnlockedIcon} from "./common/icons/Unlocked";

export interface FrontTrunkProps {
    locked?: boolean;
    onTrunk?: () => any;
}

export function FrontTrunk({locked = false, onTrunk}: FrontTrunkProps): React.ReactElement {
    const classList: string[] = [
        styles.item, 
        styles["front-trunk"],
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
            Front Trunk<br />{locked ? "Locked" : "Unlocked"}
        </span>
    </div>;
}