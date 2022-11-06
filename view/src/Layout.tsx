import React from "react";
import {Outlet} from "react-router-dom";
import {observer} from "mobx-react";
import {usePageConfig} from "@pages/common/Page/config";
import {StatusBar} from "@pages/common/StatusBar";
import {NavMenu} from "@pages/common/NavMenu";
import {BottomMenu} from "@pages/common/BottomMenu";

export const Layout: React.FC = observer(() => {
    const pageConfig = usePageConfig();

    return <>
        <StatusBar />
        {!pageConfig.navMenuHidden ? <NavMenu /> : null}
        <Outlet />
        <BottomMenu />
    </>;
});