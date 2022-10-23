import React from "react";
import styles from "../../style.scss";
import {LockedIcon} from "../common/icons/Locked";
import {UnlockedIcon} from "../common/icons/Unlocked";
import {Item, ItemTheme} from "../common/Item";
import {TrunkSkeleton} from "./TrunkSkeleton";

export interface TrunkProps {
    locked?: boolean;
    skeleton?: boolean;
    onTrunk?: () => any;
}

export function Trunk({locked = false, skeleton = false, onTrunk}: TrunkProps): React.ReactElement {
    if (skeleton) {
        return <TrunkSkeleton />;
    }

    return <Item 
        className={styles.trunk}
        theme={locked ? ItemTheme.RED : ItemTheme.GREEN}
        column
    >
        <button 
            className={styles["icon-button"]} 
            onClick={onTrunk}
        >
            {locked ? <LockedIcon /> : <UnlockedIcon />}
        </button>
        <span className={styles.name}>
            Trunk<br />{locked ? "Locked" : "Unlocked"}
        </span>
    </Item>;
}