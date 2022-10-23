import React, {useMemo} from "react";
import {Skeleton, SkeletonTypes} from "@pages/common/Skeleton";
import styles from "../../style.scss";
import {Dot} from "../common/Dot";
import {Item} from "../common/Item";
import {Line} from "../common/Line";

export const RightDoorSkeleton: React.FC = React.memo(() => {
    const classList = useMemo<string[]>(() => ([
        styles["right-door"],
        styles.right
    ]), []);

    return <Item className={classList.join(" ")} skeleton>
        <Dot />
        <Line />
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