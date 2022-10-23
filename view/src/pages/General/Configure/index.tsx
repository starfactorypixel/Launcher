import React, {useEffect, useMemo} from "react";
import {runInAction} from "mobx";
import {observer, useLocalObservable} from "mobx-react";
import {Button} from "@pages/common/Button";
import styles from "./style.scss";
import {VehicleImage} from "./VehicleImage";
import {Lights} from "./settings/items/Lights";
import {LightsDetails} from "./settings/LightsDetails";
import {LightsModal} from "./settings/LightsModal";
import {LeftDoor} from "./settings/items/LeftDoor";
import {RightDoor} from "./settings/items/RightDoor";
import {Trunk} from "./settings/items/Trunk";
import {FrontTrunk} from "./settings/items/FrontTrunk";
import {useScale} from "./hooks/scale";
import {useLights} from "./hooks/lights";
import {useLightsDetails} from "./hooks/lights-details";
import {useRearCamera} from "./hooks/rear-camera";
import {useDoors} from "./hooks/doors";
import {useTrunks} from "./hooks/trunks";

export interface ConfigureStore {
    loaded: boolean;
}

export const Configure: React.FC = observer(() => {
    const store = useLocalObservable<ConfigureStore>(() => ({
        loaded: false
    }));
    const {loaded} = store;

    const scale = useScale();
    const lights = useLights(); 
    const lightsDetails = useLightsDetails();
    const doors = useDoors();
    const trunks = useTrunks();
    const {rearCameraHandler} = useRearCamera();

    useEffect(() => {
        (async () => {
            await new Promise((resolve) => setTimeout(resolve, 1000));

            runInAction(() => {
                store.loaded = true;
            });
        })();
    }, []);

    const style = useMemo<Record<string, string>>(() => {
        return {"--scale": scale.toString()};
    }, [scale]);

    return <div className={styles.configure} style={style}>
        <div className={styles.vehicle}>
            <div className={styles.settings}>
                <div className={styles.list}>
                    {lightsDetails.opened ? (
                        <LightsDetails onClose={lightsDetails.close} /> 
                    ): (
                        <Lights 
                            mode={lights.mode} 
                            skeleton={!loaded}
                            onDetailsOpen={lightsDetails.open} 
                        /> 
                    )}
                    <LeftDoor 
                        locked={doors.left} 
                        skeleton={!loaded}
                        onDoor={doors.toggleLeft} 
                    />
                    <RightDoor 
                        locked={doors.right} 
                        skeleton={!loaded}
                        onDoor={doors.toggleRight}
                    />
                    <Trunk 
                        locked={trunks.rear} 
                        skeleton={!loaded}
                        onTrunk={trunks.toggleRear} 
                    />
                    <FrontTrunk 
                        locked={trunks.front} 
                        skeleton={!loaded}
                        onTrunk={trunks.toggleFront} 
                    />
                </div>
                <LightsModal
                    lights={lights}
                    open={lightsDetails.opened}
                    onClose={lightsDetails.close}
                />
            </div> 
            <div className={styles.container}>
                <VehicleImage />
                <Button onClick={rearCameraHandler}>Rear Camera</Button>
            </div>
        </div>
    </div>;
});