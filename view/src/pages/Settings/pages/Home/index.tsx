import React, {useCallback} from "react";
import {useNavigate} from "react-router-dom";
import {Page} from "@pages/common/Page";
import {IconButton, IconButtonTheme} from "@pages/common/IconButton";
import {CloseIcon} from "@pages/common/IconButton/icons/Close";
import {Section} from "@pages/common/Section";
import {Title} from "@pages/common/Title";
import {Alert, AlertTypes} from "@pages/common/Alert";
import {MenuSection} from "@pages/common/MenuSection";
import {DataSourceIcon} from "../common/icons/DataSource";
import {FastActionsIcon} from "../common/icons/FastActions";
import {LicensesIcon} from "../common/icons/Licenses";

export default function HomeSettingsPage(): React.ReactElement {
    const navigate = useNavigate();

    const handleClose = useCallback(() => {
        navigate(-1);
    }, []);

    return (
        <Page
            verticalAlign="center"
            hideNavMenu
            bottomMenu={
                <>
                    <IconButton label="Close" theme={IconButtonTheme.RED} onClick={handleClose}>
                        <CloseIcon />
                    </IconButton>
                </>
            }
            style={{
                gap: "32px"
            }}
        >
            <Section container>
                <Title variant={1} align="center">
                    Settings
                </Title>
            </Section>
            <Section container containerWidth={600}>
                <Alert type={AlertTypes.ACCESS} accessButtonText="Grant access to access">
                    Some access alert
                </Alert>
            </Section>
            <MenuSection>
                <MenuSection.Link
                    startIcon={<DataSourceIcon />}
                    title="Data Source"
                    to="/settings/data-source"
                />
                <MenuSection.Link
                    startIcon={<FastActionsIcon />}
                    title="Fast Actions"
                    to="/settings/fast-actions"
                    disabled
                />
                <MenuSection.Link
                    startIcon={<LicensesIcon />}
                    title="Licenses"
                    to="/settings/licenses"
                    disabled
                />
            </MenuSection>
            <Section container containerWidth={600}>
                <Alert type={AlertTypes.ERROR}>Some error or critical information</Alert>
            </Section>
        </Page>
    );
}
