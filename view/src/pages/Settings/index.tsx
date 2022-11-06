import React from "react";
import {RouteObject} from "react-router-dom";

export const HomeSettingsPage = React.lazy(() => import("./pages/Home"));

export const DataSourcePage = React.lazy(() => import("./pages/DataSource"));

export const settingsRoute: RouteObject = {
    path: "settings",
    children: [
        {
            index: true,
            element: <HomeSettingsPage />
        },
        {
            path: "data-source",
            element: <DataSourcePage />
        }
    ]
};