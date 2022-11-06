import React from "react";
import {Skeleton} from "@pages/common/Skeleton";
import styles from "../style.scss";

export const ItemSkeleton: React.FC = React.memo(() => {
    return (
        <div className={styles.item}>
            <Skeleton className={styles["icon-skeleton"]} />
            <div className={styles.name}>
                <Skeleton />
            </div>
        </div>
    );
});

ItemSkeleton.displayName = "ItemSkeleton";
