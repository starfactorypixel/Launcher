import React from "react";
import {Item, ItemCommonProps, ItemButtonProps, ItemTypes} from "./Item";

export type ButtonProps = ItemCommonProps & Omit<ItemButtonProps, "type">;

export function Button(props: ButtonProps): React.ReactElement {
    return <Item 
        type={ItemTypes.BUTTON}
        {...props} 
    />;
}