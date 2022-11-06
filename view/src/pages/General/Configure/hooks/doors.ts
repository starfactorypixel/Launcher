import {useCallback} from "react";
import {runInAction} from "mobx";
import {useLocalObservable} from "mobx-react";

interface Doors {
    left: boolean;
    setLeft: (locked: boolean) => void;
    toggleLeft: () => void;
    right: boolean;
    setRight: (locked: boolean) => void;
    toggleRight: () => void;
}

export interface DoorsStore {
    left: boolean;
    right: boolean;
}

export function useDoors(): Doors {
    const store = useLocalObservable<DoorsStore>(() => ({
        left: true,
        right: false
    }));
    const {left, right} = store;

    const setLeft = useCallback((locked: boolean) => {
        runInAction(() => {
            store.left = locked;
        });
    }, []);

    const toggleLeft = useCallback(() => {
        setLeft(!left);
    }, [left]);

    const setRight = useCallback((locked: boolean) => {
        runInAction(() => {
            store.right = locked;
        });
    }, []);

    const toggleRight = useCallback(() => {
        setRight(!right);
    }, [right]);

    return {
        left,
        setLeft,
        toggleLeft,
        right,
        setRight,
        toggleRight
    };
}
