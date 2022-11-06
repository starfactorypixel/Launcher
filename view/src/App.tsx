import * as React from "react";
import {createMemoryRouter, RouterProvider} from "react-router-dom";
import Loading from "@pages/Loading";
import NotFoundPage from "@pages/NotFound";
import {PageConfigurator} from "@pages/common/Page/config";
import {settingsRoute} from "@pages/Settings";
import {Layout} from "./Layout";
import styles from "./App.scss";

export const GeneralPage = React.lazy(() => import("@pages/General"));

export const NavigatorPage = React.lazy(() => import("@pages/Navigator"));

export const AppsPage = React.lazy(() => import("@pages/Apps"));

export const ChargingPage = React.lazy(() => import("@pages/Charging"));

export const rootRouter = createMemoryRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                index: true,
                element: <GeneralPage />
            },
            {
                path: "navigator",
                element: <NavigatorPage />
            },
            {
                path: "apps",
                element: <AppsPage />
            },
            {
                path: "charging",
                element: <ChargingPage />
            },
            settingsRoute,
            {
                path: "*",
                element: <NotFoundPage />
            }
        ]
    }
]);

export function App(): React.ReactElement {
    return <div className={styles.app}>
        <React.Suspense fallback={<Loading />}>
            <PageConfigurator>
                <RouterProvider router={rootRouter} />
            </PageConfigurator>
        </React.Suspense>
    </div>;
}