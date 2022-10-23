import React, {useMemo} from "react";
import {Skeleton, SkeletonTypes} from "@pages/common/Skeleton";
import {Item} from "../common/Item";
import styles from "../../style.scss";

export const FrontTrunkSkeleton: React.FC = React.memo(() => {
    const classList = useMemo(() => ([
        styles["front-trunk"],
        styles.column
    ]), []);
    
    return <Item className={classList.join(" ")} skeleton>
        <Skeleton
            type={SkeletonTypes.CIRCLE}
            width={45}
            height={45}
        />
        <span className={styles.name}>
            <Skeleton />
        </span>
    </Item>;
});