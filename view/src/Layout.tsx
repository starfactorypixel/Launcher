import * as React from "react";
import {Outlet} from "react-router-dom";
import {StatusBar} from "@pages/common/StatusBar";
import {MainMenu} from "@pages/common/MainMenu";
import {BottomMenu} from "@pages/common/BottomMenu";

export function Layout(): React.ReactElement {
    return <>
        <StatusBar />
        <MainMenu />
        <Outlet />
        <BottomMenu 
            belts={[
                {belt: true},
                {belt: false}
            ]}
            front={false}
            airflow
            conditionerMode={3}
        />
    </>;
}