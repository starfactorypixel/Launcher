import React, {useCallback, useEffect} from "react";
import {runInAction} from "mobx";
import {observer, useLocalObservable} from "mobx-react";
import styles from "../../style.scss";
import {Item} from "../Item";
import {ItemSkeleton} from "../ItemSkeleton";

export const AirflowIcon: React.FC = React.memo(() => {
    return (
        <svg className={styles.icon} width="36" height="36">
            <path d="M17.0967 9.03227L14.579 10.5429C13.9125 10.9428 13.0645 10.4627 13.0645 9.68543V8.37911C13.0645 7.60181 13.9125 7.1217 14.579 7.52161L17.0967 9.03227Z" />
            <path d="M24.4271 10.875C25.3646 10.2083 25.5937 8.91667 24.9375 7.96875C24.2812 7.03125 22.9792 6.80209 22.0312 7.45834C21.0937 8.125 20.8646 9.41667 21.5208 10.3646C22.1875 11.3021 23.4792 11.5313 24.4271 10.875Z" />
            <path d="M13.3333 25.8333C13.3333 25.258 13.7997 24.7917 14.375 24.7917H20.6979C22.2396 24.7917 23.5521 23.6667 23.7812 22.1458L25.6675 13.0878C25.7641 12.624 26.1728 12.2917 26.6465 12.2917H26.6922C27.3248 12.2917 27.7984 12.8716 27.672 13.4915L25.8437 22.4583C25.4479 25 23.2604 26.875 20.6875 26.875H14.375C13.7997 26.875 13.3333 26.4086 13.3333 25.8333V25.8333Z" />
            <path d="M12.8226 20.8365C12.9983 20.6994 13.2148 20.625 13.4376 20.625H18.1771L19.25 16.3542C17.8634 17.1352 16.388 17.7389 14.7928 17.7103C14.2659 17.7008 13.8854 17.2398 13.8854 16.7128V16.7128C13.8854 16.0345 14.5094 15.5251 15.1864 15.4823C16.4925 15.3998 17.7954 14.8689 18.7708 14.1042L20.4792 12.7813C20.7187 12.5938 20.9896 12.4688 21.2708 12.3854C21.6042 12.2917 21.9583 12.2604 22.3021 12.3229H22.3229C23.6042 12.5521 24.4583 13.7708 24.2396 15.0417L22.8333 21.2083C22.5417 22.6875 21.2604 23.75 19.7604 23.75H12.9707C12.7467 23.75 12.5292 23.8252 12.3531 23.9635L9.34339 26.3272C8.94536 26.6398 8.37652 26.6057 8.01865 26.2478L7.88326 26.1124C7.45831 25.6875 7.5015 24.9864 7.97539 24.6168L12.8226 20.8365Z" />
            <path d="M8.84979 18.0038C8.66127 17.2497 7.72217 16.9896 7.17254 17.5392L6.24882 18.4629C5.69919 19.0125 5.95931 19.9516 6.7134 20.1402L9.56192 20.8523L8.84979 18.0038Z" />
        </svg>
    );
});

AirflowIcon.displayName = "AirflowIcon";

export interface AirflowStore {
    airflow: boolean;
    loaded: boolean;
}

export const Airflow: React.FC = observer(() => {
    const store = useLocalObservable<AirflowStore>(() => ({
        airflow: false,
        loaded: false
    }));
    const {airflow, loaded} = store;

    useEffect(() => {
        (async () => {
            await new Promise((resolve) => setTimeout(resolve, 1000));

            runInAction(() => {
                store.airflow = true;
                store.loaded = true;
            });
        })();
    }, []);

    const setAirflow = useCallback((airflow: boolean) => {
        runInAction(() => {
            store.airflow = airflow;
        });
    }, []);

    const toggleAirflow = useCallback(() => {
        setAirflow(!airflow);
    }, [airflow]);

    if (!loaded) {
        return <ItemSkeleton />;
    }

    return <Item icon={<AirflowIcon />} name="Airflow" active={airflow} onClick={toggleAirflow} />;
});

Airflow.displayName = "Airflow";
