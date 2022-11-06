import React, {useEffect} from "react";
import {runInAction} from "mobx";
import {observer, useLocalObservable} from "mobx-react";
import {Title} from "@pages/common/Title";
import {Skeleton} from "@pages/common/Skeleton";
import styles from "./style.scss";

export interface SpeedStore {
    speed: number;
    loaded: boolean;
}

export const Speed: React.FC = observer(() => {
    const store = useLocalObservable<SpeedStore>(() => ({
        speed: 0,
        loaded: false
    }));
    const {speed, loaded} = store;

    useEffect(() => {
        (async () => {
            await new Promise((resolve) => setTimeout(resolve, 1000));

            runInAction(() => {
                store.speed = 160;
                store.loaded = true;
            });
        })();
    }, []);

    return (
        <div className={styles.speed}>
            <Title>Speed</Title>
            <div className={styles.content}>
                <h1 className={styles.value}>{loaded ? speed : <Skeleton />}</h1>
                <h4 className={styles.type}>km/h</h4>
            </div>
        </div>
    );
});

Speed.displayName = "Speed";
