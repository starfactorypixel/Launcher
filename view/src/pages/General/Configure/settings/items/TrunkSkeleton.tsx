import React, {useMemo} from "react";
import {Skeleton, SkeletonTypes} from "@pages/common/Skeleton";
import styles from "../../style.scss";
import {Item} from "../common/Item";

export const TrunkSkeleton: React.FC = React.memo(() => {
    const classList = useMemo<string[]>(() => [styles.trunk, styles.column], []);

    return (
        <Item className={classList.join(" ")} skeleton>
            <Skeleton type={SkeletonTypes.CIRCLE} width={45} height={45} />
            <span className={styles.name}>
                <Skeleton />
            </span>
        </Item>
    );
});

TrunkSkeleton.displayName = "TrunkSkeleton";
