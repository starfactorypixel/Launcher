import React, {useCallback, useEffect, useMemo} from "react";
import {runInAction} from "mobx";
import {observer, useLocalObservable} from "mobx-react";
import {Title} from "@pages/common/Title";
import {Button} from "@pages/common/Button";
import styles from "./style.scss";
import {ListSkeleton} from "./ListSkeleton";

export interface Action {
    id: number;
    name: string;
}

export interface FastActionsStore {
    activeAction: number;
    loaded: boolean;
}

export const FastActions: React.FC = observer(() => {
    const actions = useMemo<Action[]>(
        () => [
            {id: 1, name: "Action #1"},
            {id: 2, name: "Action #2"},
            {id: 3, name: "Action #3"},
            {id: 4, name: "Action #4"},
            {id: 5, name: "Action #5"},
            {id: 6, name: "Action #6"}
        ],
        []
    );

    const store = useLocalObservable<FastActionsStore>(() => ({
        activeAction: 0,
        loaded: false
    }));
    const {activeAction, loaded} = store;

    useEffect(() => {
        (async () => {
            await new Promise((resolve) => setTimeout(resolve, 1000));

            runInAction(() => {
                store.activeAction = 5;
                store.loaded = true;
            });
        })();
    }, []);

    const handleAction = useCallback((id: number) => {
        runInAction(() => {
            store.activeAction = id;
        });
    }, []);

    return (
        <div className={styles.actions}>
            <Title>Fast actions</Title>
            {!loaded ? (
                <ListSkeleton />
            ) : (
                <div className={styles.list}>
                    {actions.map((action) => {
                        const {id, name} = action;
                        return (
                            <Button
                                key={id}
                                variant={1}
                                check
                                on={id === activeAction}
                                onClick={handleAction.bind(null, id)}
                            >
                                {name}
                            </Button>
                        );
                    })}
                </div>
            )}
        </div>
    );
});

FastActions.displayName = "FastActions";
