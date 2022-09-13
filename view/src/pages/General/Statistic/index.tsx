import * as React from "react";
import {Title} from "@pages/common/Title";
import styles from "./style.scss";
import {BatteryIcon} from "./icons/Battery";
import {ChargeIcon} from "./icons/Charge";
import {MileageIcon} from "./icons/Mileage";

export interface StatisticProps {
    battery: number;
    charge: number;
    mileage: number;
}

export function Statistic({battery, charge, mileage}: StatisticProps): React.ReactElement {
    return <div className={styles.statistic}>
        <Title>Statistic</Title>
        <div className={styles.list}>
            <div className={styles.item}>
                <span className={styles.icon}>
                    <BatteryIcon />
                </span>
                <span className={styles.value}>{battery.toLocaleString(undefined, {maximumSignificantDigits: 3})}%</span>
            </div>
            <div className={styles.item}>
                <span className={styles.icon}>
                    <ChargeIcon />
                </span>
                <span className={styles.value}>{charge.toLocaleString(undefined, {maximumSignificantDigits: 3})}w/h</span>
            </div>
            <div className={styles.item}>
                <span className={styles.icon}>
                    <MileageIcon />
                </span>
                <span className={styles.value}>{mileage.toLocaleString(undefined, {maximumSignificantDigits: 3})} km</span>
            </div>
        </div>
    </div>;
}