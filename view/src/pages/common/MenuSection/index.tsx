import React from "react";
import {Divider} from "../Divider";
import {Section, SectionProps} from "../Section";
import {Item as MenuSectionItem} from "./Item";
import {Icon as MenuSectionIcon} from "./Icon";
import {Button as MenuSectionButton} from "./Button";
import {Link as MenuSectionLink} from "./Link";
import {Checkbox as MenuSectionCheckbox} from "./Checkbox";
import styles from "./style.scss";

export interface MenuSectionProps extends SectionProps {
    width?: number;
    after?: React.ReactNode;
    children?: React.ReactNode;
}

export function MenuSection({width = 600, after, children, ...props}: MenuSectionProps): React.ReactElement {
    return <Section 
        {...props}
        className={styles.menu}
        container
        containerClassName={styles.container}
        containerWidth={width}
    >
        <Divider className={styles["top-divider"]} />
        <div className={styles.list}>
            {children}
        </div>
        {after}
        <Divider className={styles["bottom-divider"]} />
    </Section>;
}

export namespace MenuSection {
    export const Item = MenuSectionItem;
    export const Icon = MenuSectionIcon;
    export const Button = MenuSectionButton;
    export const Link = MenuSectionLink;
    export const Checkbox = MenuSectionCheckbox;
}

export * as MenuSectionItem from "./Item";
export * as MenuSectionIcon from "./Icon";
export * as MenuSectionButton from "./Button";
export * as MenuSectionLink from "./Link";
export * as MenuSectionCheckbox from "./Checkbox";