import * as React from "react";
import {useCallback, useState} from "react";
import {useSerial, useSerialAction, SerialInActionTypes, SerialOutActionTypes} from "@api/serial";
import {Main} from "@pages/common/Main";
import {Section} from "@pages/common/Section";
import styles from "./style.scss";
import {Speed} from "./Speed";
import {Statistic} from "./Statistic";
import {FastActions, Action} from "./FastActions";
import {Configure} from "./Configure";

export default function General(): React.ReactElement {
    const serial = useSerial();
    const [action, setAction] = useState(5);
    const handleAction = useCallback((action: Action) => setAction(action.id), [action]);
    const [leftDoorLocked, setLeftDoorLocked] = useState(true);
    const handleLeftDoor = useCallback(async () => {
        const locked: boolean = !leftDoorLocked;
        setLeftDoorLocked(locked);
        await serial.runAction(SerialOutActionTypes.LEFT_DOOR_STATE, [Number(!locked)]);
    }, [leftDoorLocked, serial]);
    const [rightDoorLocked, setRightDoorLocked] = useState(true);
    const handleRightDoor = useCallback(async () => {
        const locked: boolean = !rightDoorLocked;
        setRightDoorLocked(locked);
        await serial.runAction(SerialOutActionTypes.RIGHT_DOOR_STATE, [Number(!locked)]);
    }, [rightDoorLocked, serial]);
    const [trunkLocked, setTrunkLocked] = useState(true);
    const handleTrunk = useCallback(async () => {
        const locked: boolean = !trunkLocked;
        setTrunkLocked(locked);
        await serial.runAction(SerialOutActionTypes.TRUNK_STATE, [Number(!locked)]);
    }, [trunkLocked, serial]);
    const [frontTrunkLocked, setFrontTrunkLocked] = useState(true);
    const handleFrontTrunk = useCallback(async () => {
        const locked: boolean = !frontTrunkLocked;
        setFrontTrunkLocked(locked);
        await serial.runAction(SerialOutActionTypes.FRONT_TRUNK_STATE, [Number(!locked)]);
    }, [frontTrunkLocked, serial]);
    const [infoHidden, setInfoHidden] = useState(false);
    useSerialAction(SerialInActionTypes.LEFT_DOOR_STATE, (data) => {
        const state: boolean = Boolean(data[0]);
        setLeftDoorLocked(!state);
    }, []);
    useSerialAction(SerialInActionTypes.RIGHT_DOOR_STATE, (data) => {
        const state: boolean = Boolean(data[0]);
        setRightDoorLocked(!state);
    }, []);
    useSerialAction(SerialInActionTypes.TRUNK_STATE, (data) => {
        const state: boolean = Boolean(data[0]);
        setTrunkLocked(!state);
    }, []);
    useSerialAction(SerialInActionTypes.FRONT_TRUNK_STATE, (data) => {
        const state: boolean = Boolean(data[0]);
        setFrontTrunkLocked(!state);
    }, []);
    const infoClassList: string[] = [styles.info];
    if(infoHidden)
        infoClassList.push(styles.hidden);
    return <Main className={styles.general}>
        <div />
        <Section 
            container
            className={infoClassList.join(" ")}
            containerClassName={styles.container}
        >
            <Speed speed={160} />
            <Statistic
                battery={80}
                charge={340}
                mileage={128001}
            />
            <FastActions
                action={action}
                actions={[
                    {id: 1, name: "Action #1"},
                    {id: 2, name: "Action #2"},
                    {id: 3, name: "Action #3"},
                    {id: 4, name: "Action #4"},
                    {id: 5, name: "Action #5"},
                    {id: 6, name: "Action #6"}
                ]}
                onAction={handleAction}
            />
        </Section>
        <Section
            container
            className={styles.center}
            containerClassName={styles.container}
        >
            <Configure
                lights={{
                    modes: [
                        "Off",
                        "Parking",
                        "Auto",
                        "On"
                    ],
                    mode: 2,
                    drl: true,
                    fog: false,
                    dome: false,
                    ambient: true
                }}
                doors={[
                    {
                        locked: leftDoorLocked,
                        onDoor: handleLeftDoor
                    },
                    {
                        locked: rightDoorLocked,
                        onDoor: handleRightDoor
                    }
                ]}
                trunks={[
                    {
                        locked: trunkLocked,
                        onTrunk: handleTrunk
                    },
                    {
                        locked: frontTrunkLocked,
                        onTrunk: handleFrontTrunk
                    }
                ]}
                onShowForLightsDetails={setInfoHidden.bind(undefined, false)}
                onHideForLightsDetails={setInfoHidden.bind(undefined, true)}
            />
        </Section>
    </Main>;
}