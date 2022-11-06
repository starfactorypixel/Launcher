import {useCallback, useEffect} from "react";
import {runInAction} from "mobx";
import {useLocalObservable} from "mobx-react";

export interface ScaleStore {
    scale: number;
}

export function useScale(): number {
    const getScale = useCallback((): number => {
        const scale: number = window.innerHeight / 1300;
        return scale <= 1 ? scale : 1;
    }, []);

    const store = useLocalObservable<ScaleStore>(() => ({
        scale: getScale()
    }));
    const {scale} = store;

    useEffect(() => {
        const listener = () => {
            runInAction(() => {
                store.scale = getScale();
            });
        };
        window.addEventListener("resize", listener);
        return () => window.removeEventListener("resize", listener);
    }, []);

    return scale;
}
