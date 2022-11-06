import React from "react";
import {Paragraph} from "@pages/common/Paragraph";
import {Section} from "@pages/common/Section";
import {Title} from "@pages/common/Title";

export const NotSelectedSection: React.FC = React.memo(() => {
    return (
        <Section container>
            <Title align="center">Data source is not selected</Title>
            <Paragraph align="center">
                Please select default onboard computer data source.
            </Paragraph>
        </Section>
    );
});

NotSelectedSection.displayName = "NotSelectedSection";
