import React from "react";
import {Item, ItemCommonProps, ItemLinkProps, ItemTypes} from "./Item";

export type LinkProps = ItemCommonProps & Omit<ItemLinkProps, "type">;

export function Link(props: LinkProps): React.ReactElement {
    return <Item 
        type={ItemTypes.LINK}
        {...props} 
    />;
}