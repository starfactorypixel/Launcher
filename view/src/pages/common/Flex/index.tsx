import React, {CSSProperties, useMemo} from "react";

export interface FlexProps extends CSSProperties {
    children?: React.ReactNode;
}

export function Flex({children, ...props}: FlexProps): React.ReactElement {
    const style = useMemo<CSSProperties>(() => {
        const style: CSSProperties = {
            display: "flex",
            ...props
        };

        return style;
    }, [props]);

    return <div style={style}>{children}</div>;
}
