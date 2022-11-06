import React from "react";
import styles from "../../style.scss";
import {LockedIcon} from "../common/icons/Locked";
import {UnlockedIcon} from "../common/icons/Unlocked";
import {Line} from "../common/Line";
import {Dot} from "../common/Dot";
import {Item, ItemTheme} from "../common/Item";
import {RightDoorSkeleton} from "./RightDoorSkeleton";

export interface RightDoorProps {
    locked?: boolean;
    skeleton?: boolean;
    onDoor?: () => void;
}

export function RightDoor({
    locked = false,
    skeleton = false,
    onDoor
}: RightDoorProps): React.ReactElement {
    if (skeleton) {
        return <RightDoorSkeleton />;
    }

    return (
        <Item
            className={styles["right-door"]}
            theme={locked ? ItemTheme.RED : ItemTheme.GREEN}
            right
        >
            <Dot />
            <Line />
            <button className={styles["icon-button"]} onClick={onDoor}>
                {locked ? <LockedIcon /> : <UnlockedIcon />}
            </button>
            <span className={styles.name}>
                Door
                <br />
                {locked ? "Locked" : "Unlocked"}
            </span>
        </Item>
    );
}
