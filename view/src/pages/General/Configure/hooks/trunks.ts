import {useCallback} from "react";
import {runInAction} from "mobx";
import {useLocalObservable} from "mobx-react";

export interface Trunks {
    front: boolean;
    setFront: (locked: boolean) => void;
    toggleFront: () => void;
    rear: boolean;
    setRear: (locked: boolean) => void;
    toggleRear: () => void;
}

export interface TrunksStore {
    front: boolean;
    rear: boolean;
}

export function useTrunks(): Trunks {
    const store = useLocalObservable(() => ({
        front: true,
        rear: false
    }));
    const {front, rear} = store;

    const setFront = useCallback((locked: boolean) => {
        runInAction(() => {
            store.front = locked;
        });
    }, []);

    const toggleFront = useCallback(() => {
        setFront(!front);
    }, [front]);

    const setRear = useCallback((locked: boolean) => {
        runInAction(() => {
            store.rear = locked;
        });
    }, []);

    const toggleRear = useCallback(() => {
        setRear(!rear);
    }, [rear]);

    return {
        front,
        setFront,
        toggleFront,
        rear,
        setRear,
        toggleRear
    };
}