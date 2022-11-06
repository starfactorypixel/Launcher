import React from "react";
import styles from "../../style.scss";
import {LockedIcon} from "../common/icons/Locked";
import {UnlockedIcon} from "../common/icons/Unlocked";
import {Item, ItemTheme} from "../common/Item";
import {FrontTrunkSkeleton} from "./FrontTrunkSkeleton";

export interface FrontTrunkProps {
    locked?: boolean;
    skeleton?: boolean;
    onTrunk?: () => void;
}

export function FrontTrunk({
    locked = false,
    skeleton = false,
    onTrunk
}: FrontTrunkProps): React.ReactElement {
    if (skeleton) {
        return <FrontTrunkSkeleton />;
    }

    return (
        <Item
            className={styles["front-trunk"]}
            theme={locked ? ItemTheme.RED : ItemTheme.GREEN}
            column
        >
            <button className={styles["icon-button"]} onClick={onTrunk}>
                {locked ? <LockedIcon /> : <UnlockedIcon />}
            </button>
            <span className={styles.name}>
                Front Trunk
                <br />
                {locked ? "Locked" : "Unlocked"}
            </span>
        </Item>
    );
}
