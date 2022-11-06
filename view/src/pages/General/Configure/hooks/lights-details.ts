import {useCallback} from "react";
import {runInAction} from "mobx";
import {useLocalObservable} from "mobx-react";
import {useGeneralStore} from "@pages/General/store";

export interface LightsDetails {
    opened: boolean;
    open: () => void;
    close: () => void;
}

export interface LightsDetailsStore {
    opened: boolean;
}

export function useLightsDetails(): LightsDetails {
    const generalStore = useGeneralStore();

    const store = useLocalObservable<LightsDetailsStore>(() => ({
        opened: false
    }));
    const {opened} = store;

    const open = useCallback(() => {
        runInAction(() => {
            generalStore.infoHidden = true;
            store.opened = true;
        });
    }, []);
    const close = useCallback(() => {
        runInAction(() => {
            generalStore.infoHidden = false;
            store.opened = false;
        });
    }, []);

    return {opened, open, close};
}
