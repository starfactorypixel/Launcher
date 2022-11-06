import React, {useCallback} from "react";
import {useNavigate} from "react-router-dom";
import {observer} from "mobx-react";
import {Section} from "@pages/common/Section";
import {IconButton, IconButtonTheme} from "@pages/common/IconButton";
import {SettingsIcon} from "@pages/common/IconButton/icons/Settings";
import {PowerIcon} from "@pages/common/IconButton/icons/Power";
import styles from "./style.scss";
import {LeftBelt} from "./settings/items/LeftBelt";
import {Front} from "./settings/items/Front";
import {Airflow} from "./settings/items/Airflow";
import {RightBelt} from "./settings/items/RightBelt";
import {Conditioner} from "./settings/items/Conditioner";
import {usePageConfig} from "../Page/config";

export const BottomMenu: React.FC = observer(() => {
    const navigate = useNavigate();
    const pageConfig = usePageConfig();

    const handleSettings = useCallback(() => {
        navigate("/settings");
    }, []);

    const handlePowerOff = useCallback(() => undefined, []);

    return (
        <Section className={styles.menu} container containerClassName={styles.container}>
            {pageConfig.bottomMenu ?? (
                <>
                    <IconButton
                        label="Settings"
                        theme={IconButtonTheme.GREY}
                        onClick={handleSettings}
                    >
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
                    <IconButton
                        label="Power Off"
                        theme={IconButtonTheme.RED}
                        onClick={handlePowerOff}
                    >
                        <PowerIcon />
                    </IconButton>
                </>
            )}
        </Section>
    );
});

BottomMenu.displayName = "BottomMenu";
