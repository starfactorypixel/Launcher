import React, {useEffect} from "react";
import {runInAction} from "mobx";
import {Main, MainProps} from "../Main";
import {usePageConfig} from "./config";

export interface PageProps extends MainProps {
    hideNavMenu?: boolean;
    bottomMenu?: React.ReactNode;
}

export function Page({
    hideNavMenu = false,
    bottomMenu = null,
    ...props
}: PageProps): React.ReactElement {
    const config = usePageConfig();

    useEffect(() => {
        runInAction(() => {
            config.navMenuHidden = hideNavMenu;
        });
    }, [hideNavMenu]);

    useEffect(() => {
        runInAction(() => {
            config.bottomMenu = bottomMenu;
        });
    }, [bottomMenu]);

    return <Main {...props} />;
}
