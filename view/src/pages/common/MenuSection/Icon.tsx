import React, {useMemo} from "react";
import styles from "./style.scss";

export interface IconProps extends React.SVGProps<SVGSVGElement> {}

export function Icon(props: IconProps): React.ReactElement {
    const classList = useMemo<string[]>(() => {
        const classList: string[] = [styles.icon];

        if (props.className) {
            classList.push(props.className);
        }

        return classList;
    }, [props.className]);

    return <svg 
        className={classList.join(" ")}
        {...props} 
    />;
}