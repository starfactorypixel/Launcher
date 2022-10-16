import {useCallback} from "react";
import {runInAction} from "mobx";
import {useLocalObservable} from "mobx-react";

export interface Lights {
    mode: number;
    setMode: (mode: number) => void;
    drl: boolean;
    setDrl: (drl: boolean) => void;
    toggleDrl: () => void;
    fog: boolean;
    setFog: (fog: boolean) => void;
    toggleFog: () => void;
    dome: boolean;
    setDome: (dome: boolean) => void;
    toggleDome: () => void;
    ambient: boolean;
    setAmbient: (ambient: boolean) => void;
    toggleAmbient: () => void;
}

export interface LightsStore {
    mode: number;
    drl: boolean;
    fog: boolean;
    dome: boolean;
    ambient: boolean;
}

export function useLights(): Lights {
    const store = useLocalObservable<LightsStore>(() => ({
        mode: 0,
        drl: true,
        fog: false,
        dome: false,
        ambient: true
    }));
    const {mode, drl, fog, dome, ambient} = store;

    const setMode = useCallback((mode: number) => {
        runInAction(() => {
            store.mode = mode;
        });
    }, []);

    const setDrl = useCallback((drl: boolean) => {
        runInAction(() => {
            store.drl = drl;
        });
    }, []);

    const toggleDrl = useCallback(() => {
        setDrl(!drl);
    }, [drl]);

    const setFog = useCallback((fog: boolean) => {
        runInAction(() => {
            store.fog = fog;
        });
    }, []);

    const toggleFog = useCallback(() => {
        setFog(!fog);
    }, [fog]);

    const setDome = useCallback((dome: boolean) => {
        runInAction(() => {
            store.dome = dome;
        });
    }, []);

    const toggleDome = useCallback(() => {
        setDome(!dome);
    }, [dome]);

    const setAmbient = useCallback((ambient: boolean) => {
        runInAction(() => {
            store.ambient = ambient;
        });
    }, []);

    const toggleAmbient = useCallback(() => {
        setAmbient(!ambient);
    }, [ambient]);

    return {
        mode,
        setMode,
        drl, 
        setDrl,
        toggleDrl,
        fog, 
        setFog,
        toggleFog,
        dome,
        setDome,
        toggleDome,
        ambient,
        setAmbient,
        toggleAmbient
    };
}