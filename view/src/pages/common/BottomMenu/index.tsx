import * as React from "react";
import {Section} from "@pages/common/Section";
import {IconButton, IconButtonTheme} from "@pages/common/IconButton";
import {SettingsIcon} from "@pages/common/IconButton/icons/Settings";
import {PowerIcon} from "@pages/common/IconButton/icons/Power";
import styles from "./style.scss";
import {LeftBelt, LeftBeltProps} from "./settings/LeftBelt";
import {Front} from "./settings/Front";
import {Airflow} from "./settings/Airflow";
import {RightBelt, RightBeltProps} from "./settings/RightBelt";
import {Conditioner} from "./settings/Conditioner";

export interface BottomMenuProps {
    belts: [LeftBeltProps, RightBeltProps];
    front: boolean;
    onFront?: (front: boolean) => any;
    airflow: boolean;
    onAirflow?: (airflow: boolean) => any;
    conditionerMode: number;
    onConditionerMode?: (mode: number) => any;
    onSettings?: () => any;
    onPowerOff?: () => any;
}

export function BottomMenu({belts, front, onFront, airflow, onAirflow, conditionerMode, onConditionerMode, onSettings, onPowerOff}: BottomMenuProps): React.ReactElement {
    return <Section 
        className={styles.menu}
        container
        containerClassName={styles.container}
    >
        <IconButton label="Settings" theme={IconButtonTheme.GREY} onClick={onSettings}>
            <SettingsIcon />
        </IconButton>
        <div className={styles.settings}>
            <div className={styles.list}>
                <LeftBelt {...belts[0]} />
                <Front front={front} onFront={onFront} />
                <Airflow airflow={airflow} onAirflow={onAirflow} />
                <Conditioner mode={conditionerMode} onMode={onConditionerMode} />
                <RightBelt {...belts[1]} />
            </div>
        </div>
        <IconButton label="Power Off" theme={IconButtonTheme.RED} onClick={onPowerOff}>
            <PowerIcon />
        </IconButton>
    </Section>;
}