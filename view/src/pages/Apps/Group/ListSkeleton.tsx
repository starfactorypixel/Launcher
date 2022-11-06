import React from "react";
import {Skeleton} from "@pages/common/Skeleton";
import styles from "../style.scss";

export interface ListSkeletonProps {
    appsCount: number;
}

export function ListSkeleton({appsCount}: ListSkeletonProps): React.ReactElement {
    return (
        <div className={styles.list}>
            {[...Array(appsCount)].map((_, index) => {
                return (
                    <div key={index} className={styles.item}>
                        <Skeleton />
                    </div>
                );
            })}
        </div>
    );
}
