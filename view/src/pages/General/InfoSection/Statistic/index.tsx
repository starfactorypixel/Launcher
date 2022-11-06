import React, {useEffect} from "react";
import {runInAction} from "mobx";
import {observer, useLocalObservable} from "mobx-react";
import {Title} from "@pages/common/Title";
import {Skeleton} from "@pages/common/Skeleton";
import styles from "./style.scss";
import {BatteryIcon} from "./icons/Battery";
import {ChargeIcon} from "./icons/Charge";
import {MileageIcon} from "./icons/Mileage";
import {Item} from "./Item";

export interface StatisticStore {
    battery: number;
    charge: number;
    mileage: number;
    loaded: boolean;
}

export const Statistic: React.FC = observer(() => {
    const store = useLocalObservable<StatisticStore>(() => ({
        battery: 0,
        charge: 0,
        mileage: 0,
        loaded: false
    }));
    const {battery, charge, mileage, loaded} = store;

    useEffect(() => {
        (async () => {
            await new Promise((resolve) => setTimeout(resolve, 1000));

            runInAction(() => {
                store.battery = 80;
                store.charge = 340;
                store.mileage = 128001;
                store.loaded = true;
            });
        })();
    }, []);

    return (
        <div className={styles.statistic}>
            <Title>Statistic</Title>
            <div className={styles.list}>
                <Item
                    icon={<BatteryIcon />}
                    value={
                        loaded ? (
                            battery.toLocaleString(undefined, {maximumSignificantDigits: 3}) + "%"
                        ) : (
                            <Skeleton />
                        )
                    }
                />
                <Item
                    icon={<ChargeIcon />}
                    value={
                        loaded ? (
                            charge.toLocaleString(undefined, {maximumSignificantDigits: 3}) + "w/h"
                        ) : (
                            <Skeleton />
                        )
                    }
                />
                <Item
                    icon={<MileageIcon />}
                    value={
                        loaded ? (
                            mileage.toLocaleString(undefined, {maximumSignificantDigits: 3}) + " km"
                        ) : (
                            <Skeleton />
                        )
                    }
                />
            </div>
        </div>
    );
});

Statistic.displayName = "Statistic";
