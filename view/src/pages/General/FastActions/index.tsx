import * as React from "react";
import {Title} from "@pages/common/Title";
import {Button} from "@pages/common/Button";
import styles from "./style.scss";

export interface Action {
    id: number;
    name: string;
}

export interface FastActionsProps {
    action: number;
    actions: Action[];
    onAction?: (action: Action) => any;
}

export function FastActions({action: currentActionId, actions, onAction}: FastActionsProps): React.ReactElement {
    return <div className={styles.actions}>
        <Title>Fast actions</Title>
        <div className={styles.list}>
            {actions.map((action) => {
                const {id, name} = action;
                return <Button 
                    key={id}
                    variant={1}
                    check
                    on={id === currentActionId}
                    onClick={onAction?.bind(window, action)}    
                >{name}</Button>;
            })}
        </div>
    </div>;
}