import React from "react";
import {IconButton} from "@pages/common/IconButton";
import {CloseIcon} from "@pages/common/IconButton/icons/Close";
import {Title} from "@pages/common/Title";
import {Switch} from "@pages/common/Switch";
import {Button} from "@pages/common/Button";
import {ButtonGroup} from "@pages/common/Button/Group";
import styles from "../style.scss";
import {Lights} from "../hooks/lights";
import {lightsModesNames} from "./items/Lights";

export interface LightsModalProps {
    lights: Lights;
    open?: boolean;
    onClose?: () => any;
}

export function LightsModal({lights, open = false, onClose}: LightsModalProps): React.ReactElement | null {
    const {mode, setMode, drl, toggleDrl, fog, toggleFog, dome, toggleDome, ambient, toggleAmbient} = lights;

    if(!open)
        return null;
    return <div className={styles["lights-modal"]}>
        <div className={styles.container}>
            <IconButton className={styles["close-button"]} onClick={onClose}>
                <CloseIcon />
            </IconButton>
            <div className={styles.content}>
                <Title>Lights</Title>
                <Switch 
                    options={lightsModesNames}
                    defaultOption={mode}
                    onOption={setMode}
                />
                <ButtonGroup>
                    <Button check on={drl} onClick={toggleDrl}>DRL</Button>
                    <Button check on={fog} onClick={toggleFog}>Fog</Button>
                    <Button check on={dome} onClick={toggleDome}>Dome</Button>
                    <Button check on={ambient} onClick={toggleAmbient}>Ambient</Button>
                </ButtonGroup>
            </div>
        </div>
    </div>;
}