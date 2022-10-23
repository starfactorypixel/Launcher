import React from "react";
import styles from "../../style.scss";
import {LockedIcon} from "../common/icons/Locked";
import {UnlockedIcon} from "../common/icons/Unlocked";
import {Line} from "../common/Line";
import {Dot} from "../common/Dot";
import {Item, ItemTheme} from "../common/Item";
import {LeftDoorSkeleton} from "./LeftDoorSkeleton";

export interface LeftDoorProps {
    locked?: boolean;
    skeleton?: boolean;
    onDoor?: () => any;
}

export function LeftDoor({locked = false, skeleton = false, onDoor}: LeftDoorProps): React.ReactElement {
    if (skeleton) {
        return <LeftDoorSkeleton />;
    }
    
    return <Item 
        className={styles["left-door"]}
        theme={locked ? ItemTheme.RED : ItemTheme.GREEN}
    >
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
    </Item>;
}