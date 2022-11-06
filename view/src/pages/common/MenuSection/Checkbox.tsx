import React from "react";
import {Item, ItemCommonProps, ItemTypes, ItemCheckboxProps} from "./Item";

export type CheckboxProps = ItemCommonProps & Omit<ItemCheckboxProps, "type">;

export function Checkbox(props: CheckboxProps): React.ReactElement {
    return <Item 
        type={ItemTypes.CHECKBOX}
        {...props} 
    />;
}