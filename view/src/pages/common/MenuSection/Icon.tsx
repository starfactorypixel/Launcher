import React, {useMemo} from "react";
import styles from "./style.scss";

export interface IconProps extends React.SVGProps<SVGSVGElement> {
    className?: string;
}

export function Icon({className, ...props}: IconProps): React.ReactElement {
    const classList = useMemo<string[]>(() => {
        const classList: string[] = [styles.icon];

        if (className) {
            classList.push(className);
        }

        return classList;
    }, [className]);

    return <svg className={classList.join(" ")} {...props} />;
}
