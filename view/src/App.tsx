import * as React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Loading from "@pages/Loading";
import NotFound from "@pages/NotFound";
import {Layout} from "./Layout";
import styles from "./App.scss";

export const GeneralPage = React.lazy(() => import("@pages/General"));

export const NavigatorPage = React.lazy(() => import("@pages/Navigator"));

export const AppsPage = React.lazy(() => import("@pages/Apps"));

export const ChargingPage = React.lazy(() => import("@pages/Charging"));

export function App(): React.ReactElement {
    return <div className={styles.app}>
        <React.Suspense fallback={<Loading />}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Layout />}>
                        <Route index element={<GeneralPage />} />
                        <Route path="navigator" element={<NavigatorPage />} />
                        <Route path="apps" element={<AppsPage />} />
                        <Route path="charging" element={<ChargingPage />} />
                        <Route path="*" element={<NotFound />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </React.Suspense>
    </div>;
}