import * as React from "react";
import {observer, useLocalObservable} from "mobx-react";
import {Title} from "@pages/common/Title";
import styles from "./style.scss";

export interface SpeedStore {
    speed: number;
}

export const Speed: React.FC = observer(() => {
    const store = useLocalObservable<SpeedStore>(() => ({
        speed: 160
    }));
    const {speed} = store;

    return <div className={styles.speed}>
        <Title>Speed</Title>
        <div className={styles.content}>
            <h1 className={styles.value}>{speed}</h1>
            <h4 className={styles.type}>km/h</h4>
        </div>
    </div>;
});