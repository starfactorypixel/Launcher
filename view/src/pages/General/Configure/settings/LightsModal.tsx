import * as React from "react";
import {useState, useCallback} from "react";
import {IconButton} from "@pages/common/IconButton";
import {CloseIcon} from "@pages/common/IconButton/icons/Close";
import {Title} from "@pages/common/Title";
import {Switch} from "@pages/common/Switch";
import {Button} from "@pages/common/Button";
import {ButtonGroup} from "@pages/common/Button/Group";
import styles from "../style.scss";

export interface LightsSettings {
    modes: string[];
    mode: number;
    onMode?: (mode: number) => any;
    drl: boolean;
    onDrl?: (drl: boolean) => any;
    fog: boolean;
    onFog?: (fog: boolean) => any;
    dome: boolean;
    onDome?: (dome: boolean) => any;
    ambient: boolean;
    onAmbient?: (ambient: boolean) => any;
}

export interface LightsModalProps {
    settings: LightsSettings;
    open?: boolean;
    onClose?: () => any;
}

export function LightsModal({settings, open = false, onClose}: LightsModalProps): React.ReactElement | null {
    const handleMode = useCallback((mode: number) => {
        settings.onMode?.(mode);
    }, []);
    const [drl, setDrl] = useState(settings.drl);
    const handleDrl = useCallback(() => {
        const newDrl: boolean = !drl;
        setDrl(newDrl);
        settings.onDrl?.(newDrl);
    }, [drl]);
    const [fog, setFog] = useState(settings.fog);
    const handleFog = useCallback(() => {
        const newFog: boolean = !fog;
        setFog(newFog);
        settings.onFog?.(newFog);
    }, [fog]);
    const [dome, setDome] = useState(settings.dome);
    const handleDome = useCallback(() => {
        const newDome: boolean = !dome;
        setDome(newDome);
        settings.onDome?.(newDome);
    }, [dome]);
    const [ambient, setAmbient] = useState(settings.ambient);
    const handleAmbient = useCallback(() => {
        const newAmbient: boolean = !ambient;
        setAmbient(newAmbient);
        settings.onAmbient?.(newAmbient);
    }, [ambient]);
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
                    options={settings.modes}
                    defaultOption={settings.mode}
                    onOption={handleMode}
                />
                <ButtonGroup>
                    <Button check on={drl} onClick={handleDrl}>DRL</Button>
                    <Button check on={fog} onClick={handleFog}>Fog</Button>
                    <Button check on={dome} onClick={handleDome}>Dome</Button>
                    <Button check on={ambient} onClick={handleAmbient}>Ambient</Button>
                </ButtonGroup>
            </div>
        </div>
    </div>;
}