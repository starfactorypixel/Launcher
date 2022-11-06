import React from "react";
import {observer} from "mobx-react";
import {Section} from "@pages/common/Section";
import {Alert, AlertTypes} from "@pages/common/Alert";
import {Flex} from "@pages/common/Flex";
import {useDataSourcePage} from "../context";

export const ErrorsSection: React.FC = observer(() => {
    const {store: {errors}} = useDataSourcePage();

    if (errors.length === 0) {
        return null;
    }

    return <Section container containerWidth={600}>
        <Flex flexDirection="column" gap={15}>
            {errors.map(({message}, index) => (
                <Alert key={index} type={AlertTypes.ERROR}>
                    {message}
                </Alert>
            ))}
        </Flex>
    </Section>;
});