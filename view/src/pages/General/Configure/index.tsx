import React, {useMemo} from "react";
import {observer} from "mobx-react";
import {Button} from "@pages/common/Button";
import styles from "./style.scss";
import {VehicleImage} from "./VehicleImage";
import {Lights} from "./settings/Lights";
import {LightsDetails} from "./settings/LightsDetails";
import {LightsModal} from "./settings/LightsModal";
import {LeftDoor} from "./settings/LeftDoor";
import {RightDoor} from "./settings/RightDoor";
import {Trunk} from "./settings/Trunk";
import {FrontTrunk} from "./settings/FrontTrunk";
import {useScale} from "./hooks/scale";
import {useLights} from "./hooks/lights";
import {useLightsDetails} from "./hooks/lights-details";
import {useRearCamera} from "./hooks/rear-camera";
import {useDoors} from "./hooks/doors";
import {useTrunks} from "./hooks/trunks";

export const Configure: React.FC = observer(() => {
    const scale = useScale();
    const lights = useLights(); 
    const lightsDetails = useLightsDetails();
    const doors = useDoors();
    const trunks = useTrunks();
    const {rearCameraHandler} = useRearCamera();

    const style = useMemo<Record<string, string>>(() => {
        return {"--scale": scale.toString()};
    }, [scale]);

    return <div className={styles.configure} style={style}>
        <div className={styles.vehicle}>
            <div className={styles.settings}>
                <div className={styles.list}>
                    {lightsDetails.opened ? <LightsDetails onClose={lightsDetails.close} /> : <Lights mode={lights.mode} onDetailsOpen={lightsDetails.open} />}
                    <LeftDoor locked={doors.left} onDoor={doors.toggleLeft} />
                    <RightDoor locked={doors.right} onDoor={doors.toggleRight} />
                    <Trunk locked={trunks.rear} onTrunk={trunks.toggleRear} />
                    <FrontTrunk locked={trunks.front} onTrunk={trunks.toggleFront} />
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