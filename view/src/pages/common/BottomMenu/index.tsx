import React, {useCallback} from "react";
import {Section} from "@pages/common/Section";
import {IconButton, IconButtonTheme} from "@pages/common/IconButton";
import {SettingsIcon} from "@pages/common/IconButton/icons/Settings";
import {PowerIcon} from "@pages/common/IconButton/icons/Power";
import styles from "./style.scss";
import {LeftBelt} from "./settings/LeftBelt";
import {Front} from "./settings/Front";
import {Airflow} from "./settings/Airflow";
import {RightBelt} from "./settings/RightBelt";
import {Conditioner} from "./settings/Conditioner";

export function BottomMenu(): React.ReactElement {
    const handleSettings = useCallback(() => undefined, []);
    const handlePowerOff = useCallback(() => undefined, []);

    return <Section 
        className={styles.menu}
        container
        containerClassName={styles.container}
    >
        <IconButton label="Settings" theme={IconButtonTheme.GREY} onClick={handleSettings}>
            <SettingsIcon />
        </IconButton>
        <div className={styles.settings}>
            <div className={styles.list}>
                <LeftBelt />
                <Front />
                <Airflow />
                <Conditioner />
                <RightBelt />
            </div>
        </div>
        <IconButton label="Power Off" theme={IconButtonTheme.RED} onClick={handlePowerOff}>
            <PowerIcon />
        </IconButton>
    </Section>;
}