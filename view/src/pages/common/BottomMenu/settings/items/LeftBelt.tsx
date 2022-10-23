import React, {useCallback, useEffect} from "react";
import {runInAction} from "mobx";
import {observer, useLocalObservable} from "mobx-react";
import styles from "../../style.scss";
import {Item} from "../Item";
import {ItemSkeleton} from "../ItemSkeleton";

export const LeftBeltIcon: React.FC = React.memo(() => {
    return <svg className={styles.icon} width="36" height="36">
        <path d="M23.7457 13.6081H20.967V20.7555H23.7457L24.449 24H28.6688V11H24.449L23.7457 13.6081Z" />
        <path d="M7.33122 11.0674H17.8725V24H7.33122V11.0674Z" />
        <path d="M2 12.4295H5.22131V22.5706H2V12.4295Z" />
        <path d="M30.7787 12.4295H34V22.5706H30.7787V12.4295Z" />
    </svg>;
});

export interface LeftBeltStore {
    belt: boolean;
    loaded: boolean;
}

export const LeftBelt: React.FC = observer(() => {
    const store = useLocalObservable<LeftBeltStore>(() => ({
        belt: false,
        loaded: false
    }));
    const {belt, loaded} = store;

    useEffect(() => {
        (async () => {
            await new Promise((resolve) => setTimeout(resolve, 1000));

            runInAction(() => {
                store.belt = false;
                store.loaded = true;
            });
        })();
    }, []);

    const setBelt = useCallback((belt: boolean) => {
        runInAction(() => {
            store.belt = belt;
        });
    }, []);
    
    const toggleBelt = useCallback(() => {
        setBelt(!belt);
    }, [belt]);

    if (!loaded) {
        return <ItemSkeleton />;
    }

    return <Item 
        icon={<LeftBeltIcon />}
        name="Left belt"
        active={belt}
        onClick={toggleBelt}
    />;
});