import React, {useMemo} from "react";
import {Button} from "../Button";
import {Paper, PaperTheme} from "../Paper";
import {Text} from "../Text";
import styles from "./style.scss";

export enum AlertTypes {
    ERROR,
    ACCESS
}

export interface AlertCommonProps {
    children: string;
}

export interface AlertErrorProps extends AlertCommonProps {
    type: AlertTypes.ERROR;
}

export interface AlertAccessProps extends AlertCommonProps {
    type: AlertTypes.ACCESS;
    accessButtonText: string;
    onAccessButtonClick?: () => any;
}

export type AlertProps = AlertErrorProps | AlertAccessProps;

export function Alert({children, ...props}: AlertProps): React.ReactElement {
    const paperTheme = useMemo<PaperTheme>(() => {
        switch (props.type) {
            case AlertTypes.ERROR:
                return PaperTheme.RED;
            case AlertTypes.ACCESS:
                return PaperTheme.AQUA;
        }
    }, [props.type]);

    const classList = useMemo<string[]>(() => {
        const classList: string[] = [styles.alert];

        switch (props.type) {
            case AlertTypes.ERROR:
                classList.push(styles.error);
            break;
            case AlertTypes.ACCESS:
                classList.push(styles.access);
            break;
        }

        return classList;
    }, [props.type]);

    return <Paper
        className={classList.join(" ")}
        theme={paperTheme}
    >
        <Text>{children}</Text>
        {props.type === AlertTypes.ACCESS ? (
            <Button onClick={props.onAccessButtonClick}>
                {props.accessButtonText}
            </Button>
        ) : null}
    </Paper>;
}