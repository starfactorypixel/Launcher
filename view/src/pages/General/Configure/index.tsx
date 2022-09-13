import * as React from "react";
import {useState, useCallback, useEffect} from "react";
import {Button} from "@pages/common/Button";
import styles from "./style.scss";
import {VehicleImage} from "./VehicleImage";
import {Lights} from "./settings/Lights";
import {LightsDetails} from "./settings/LightsDetails";
import {LightsModal, LightsSettings} from "./settings/LightsModal";
import {LeftDoor, LeftDoorProps} from "./settings/LeftDoor";
import {RightDoor, RightDoorProps} from "./settings/RightDoor";
import {Trunk, TrunkProps} from "./settings/Trunk";
import {FrontTrunk, FrontTrunkProps} from "./settings/FrontTrunk";

export interface ConfigureProps {
    lights: LightsSettings;
    doors: [LeftDoorProps, RightDoorProps];
    trunks: [TrunkProps, FrontTrunkProps];
    onRearCamera?: () => any;
    onShowForLightsDetails?: () => any;
    onHideForLightsDetails?: () => any;
}

export function Configure({lights, doors, trunks, onRearCamera, onShowForLightsDetails, onHideForLightsDetails}: ConfigureProps): React.ReactElement {
    const getScale = useCallback((): number => {
        const scale: number = window.innerHeight / 1300;
        return scale <= 1 ? scale : 1;
    }, []);
    const [scale, setScale] = useState(getScale);
    useEffect(() => {
        const listener = () => setScale(getScale);
        window.addEventListener("resize", listener);
        return () => window.removeEventListener("resize", listener);
    }, []);
    const [lightsDetails, setLightsDetails] = useState(false);
    const handleLightsDetailsOpen = useCallback(() => {
        onHideForLightsDetails?.();
        setLightsDetails(true);
    }, []);
    const handleLightsClose = useCallback(() => {
        setLightsDetails(false);
        onShowForLightsDetails?.();
    }, []);
    const [lightsMode, setLightsMode] = useState(lights.mode);
    const handleLightsMode = useCallback((mode: number) => {
        setLightsMode(mode);
        lights.onMode?.(mode);
    }, []);
    const style: Record<string, string> = {"--scale": scale.toString()};
    return <div className={styles.configure} style={style}>
        <div className={styles.vehicle}>
            <div className={styles.settings}>
                <div className={styles.list}>
                    {lightsDetails ? <LightsDetails onClose={handleLightsClose} /> : <Lights mode={lights.modes[lightsMode]} onDetailsOpen={handleLightsDetailsOpen} />}
                    <LeftDoor {...doors[0]} />
                    <RightDoor {...doors[1]} />
                    <Trunk {...trunks[0]} />
                    <FrontTrunk {...trunks[1]} />
                </div>
                <LightsModal
                    settings={{
                        ...lights,
                        mode: lightsMode,
                        onMode: handleLightsMode
                    }}
                    open={lightsDetails}
                    onClose={handleLightsClose}
                />
            </div>
            <div className={styles.container}>
                <VehicleImage />
                <Button onClick={onRearCamera}>Rear Camera</Button>
            </div>
        </div>
    </div>;
}