import * as React from "react";
import {useMemo, useEffect, useContext, useCallback} from "react";

export enum SerialInActionTypes {
    LEFT_DOOR_STATE,
    RIGHT_DOOR_STATE,
    TRUNK_STATE,
    FRONT_TRUNK_STATE
}

export enum SerialOutActionTypes {
    LEFT_DOOR_STATE,
    RIGHT_DOOR_STATE,
    TRUNK_STATE,
    FRONT_TRUNK_STATE
}

export type SerialActionData = number[];

export interface SerialActionInfo {
    type: SerialInActionTypes;
    data: SerialActionData;
}

export type SerialActionHandler = (data: SerialActionData) => any;

export interface SerialAction {
    handlers: Set<SerialActionHandler>;
}

export class Serial {
    public actions: Record<number, SerialAction> = {};
    public actionsEventSource: EventSource | null = null;

    public async connect(): Promise<void> {
        this.actionsEventSource = new EventSource("/api/serial/actions");
        this.actionsEventSource.addEventListener("message", ({data}) => {
            const info: SerialActionInfo = JSON.parse(data);
            this.runInAction(info.type, info.data);
        });
    }

    public async disconnect(): Promise<void> {
        this.actionsEventSource?.close();
    }

    public async runAction(type: SerialOutActionTypes, data: SerialActionData): Promise<void> {
        const params = new URLSearchParams;
        params.set("type", type.toString());
        params.set("data", JSON.stringify(data));
        await fetch("/api/serial/actions/run", {
            method: "POST",
            body: params
        });
    }

    public runInAction(type: SerialInActionTypes, data: SerialActionData): void {
        const action: SerialAction | null = this.actions[type] ?? null;
        if(action === null)
            return;
        for(const handler of action.handlers)
            handler(data);
    }

    public action(type: SerialInActionTypes, handler: SerialActionHandler): void {
        let action: SerialAction | null = this.actions[type] ?? null;
        if(action === null) {
            action = {handlers: new Set};
            this.actions[type] = action;
        }
        action.handlers.add(handler);
    }

    public removeAction(type: SerialInActionTypes, handler: SerialActionHandler): void {
        const action: SerialAction | null = this.actions[type] ?? null;
        if(action === null)
            return;
        action.handlers.delete(handler);
    }
}

export const SerialContext = React.createContext<Serial | null>(null);

export interface SerialProviderProps {
    children?: React.ReactNode;
}

export function SerialProvider({children}: SerialProviderProps): React.ReactElement {
    const serial = useMemo(() => new Serial, []);
    useEffect(() => {
        serial.connect();
        return () => (serial.disconnect(), undefined);
    }, []);
    return <SerialContext.Provider value={serial}>
        {children}
    </SerialContext.Provider>;
}

export function useSerial(): Serial {
    const serial: Serial | null = useContext(SerialContext);
    if(serial === null)
        throw new Error("useSerial must be used within a SerialProvider.");
    return serial;
}

export function useSerialAction(type: SerialInActionTypes, handler: SerialActionHandler, deps: React.DependencyList): void {
    const callback = useCallback(handler, deps);
    const serial = useSerial();
    useEffect(() => {
        serial.action(type, callback);
        return () => serial.removeAction(type, callback);
    }, [serial]);
}