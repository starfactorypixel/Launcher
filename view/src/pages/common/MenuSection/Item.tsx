import React, {useCallback, useMemo} from "react";
import {useNavigate} from "react-router-dom";
import {Paper, PaperProps, PaperTheme} from "../Paper";
import {Text} from "../Text";
import styles from "./style.scss";

export enum ItemTypes {
    BUTTON,
    LINK,
    CHECKBOX
}

export interface ItemCommonProps extends Omit<PaperProps, "children"> {
    startIcon?: React.ReactNode;
    title?: string;
    disabled?: boolean;
}

export interface ItemButtonProps extends ItemCommonProps {
    type?: ItemTypes.BUTTON;
    onClick?: () => void;
}

export interface ItemLinkProps extends ItemCommonProps {
    type: ItemTypes.LINK;
    to: string;
}

export interface ItemCheckboxProps extends ItemCommonProps {
    type: ItemTypes.CHECKBOX;
    checked?: boolean;
    checkedTheme?: PaperTheme;
    onClick?: () => void;
}

export type ItemProps = ItemButtonProps | ItemLinkProps | ItemCheckboxProps;

export function Item({
    title,
    startIcon,
    disabled = false,
    ...props
}: ItemProps): React.ReactElement {
    props.type ??= ItemTypes.BUTTON;

    const navigate = useNavigate();

    const handleClick = useCallback(() => {
        if (disabled) {
            return;
        }

        switch (props.type) {
            case ItemTypes.BUTTON:
            case ItemTypes.CHECKBOX:
                props.onClick?.();
                break;
            case ItemTypes.LINK:
                navigate(props.to);
                break;
        }
    }, [disabled, props.type]);

    const paperTheme = useMemo<PaperTheme | undefined>(() => {
        let theme: PaperTheme | undefined;

        if (props.theme) {
            theme = props.theme;
        } else if (props.type === ItemTypes.CHECKBOX && props.checked) {
            theme = props.checkedTheme ?? PaperTheme.AQUA;
        }

        return theme;
    }, [
        props.theme,
        props.type,
        props.type === ItemTypes.CHECKBOX ? props.checkedTheme : undefined
    ]);

    const classList = useMemo<string[]>(() => {
        const classList: string[] = [styles.item];

        if (disabled) {
            classList.push(styles.disabled);
        }

        switch (props.type) {
            case ItemTypes.BUTTON:
                classList.push(styles.button);
                break;
            case ItemTypes.LINK:
                classList.push(styles.link);
                break;
            case ItemTypes.CHECKBOX:
                classList.push(styles.checkbox);
                break;
        }

        return classList;
    }, [disabled, props.type]);

    return (
        <Paper {...props} className={classList.join(" ")} theme={paperTheme} onClick={handleClick}>
            {startIcon}
            {title ? <Text>{title}</Text> : null}
        </Paper>
    );
}
