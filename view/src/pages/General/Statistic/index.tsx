import * as React from "react";
import {observer, useLocalObservable} from "mobx-react";
import {Title} from "@pages/common/Title";
import styles from "./style.scss";
import {BatteryIcon} from "./icons/Battery";
import {ChargeIcon} from "./icons/Charge";
import {MileageIcon} from "./icons/Mileage";
import {Item} from "./Item";

export interface StatisticStore {
    battery: number;
    charge: number;
    mileage: number;
}

export const Statistic: React.FC = observer(() => {
    const store = useLocalObservable<StatisticStore>(() => ({
        battery: 80,
        charge: 340,
        mileage: 128001
    }));
    const {battery, charge, mileage} = store;

    return <div className={styles.statistic}>
        <Title>Statistic</Title>
        <div className={styles.list}>
            <Item 
                icon={<BatteryIcon />}
                value={battery.toLocaleString(undefined, {maximumSignificantDigits: 3}) + "%"}
            />
            <Item 
                icon={<ChargeIcon />}
                value={charge.toLocaleString(undefined, {maximumSignificantDigits: 3}) + "w/h"}
            />
            <Item 
                icon={<MileageIcon />}
                value={mileage.toLocaleString(undefined, {maximumSignificantDigits: 3}) + " km"}
            />
        </div>
    </div>;
});