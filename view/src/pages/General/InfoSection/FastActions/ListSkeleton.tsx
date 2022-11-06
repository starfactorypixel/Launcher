import React from "react";
import {Button} from "@pages/common/Button";
import {Skeleton} from "@pages/common/Skeleton";
import styles from "./style.scss";

export const ListSkeleton: React.FC = React.memo(() => {
    return (
        <div className={styles.list}>
            <Button variant={1} check>
                <Skeleton />
            </Button>
            <Button variant={1} check>
                <Skeleton />
            </Button>
            <Button variant={1} check>
                <Skeleton />
            </Button>
            <Button variant={1} check>
                <Skeleton />
            </Button>
            <Button variant={1} check>
                <Skeleton />
            </Button>
            <Button variant={1} check>
                <Skeleton />
            </Button>
        </div>
    );
});

ListSkeleton.displayName = "ListSkeleton";
