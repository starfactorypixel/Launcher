import React from "react";
import {observer, useLocalObservable} from "mobx-react";
import {Page} from "@pages/common/Page";
import {BottomMenu} from "./BottomMenu";
import {DataSourcePageProvider} from "./context";
import {InfoSection} from "./sections/Info";
import {ErrorsSection} from "./sections/Errors";
import {NotSelectedSection} from "./sections/NotSelected";
import {MenuSection} from "./sections/Menu";

export interface DataSourcePageStore {
    selected: boolean;
    errors: Error[];
}

export const DataSourcePage: React.FC = observer(() => {
    const store = useLocalObservable<DataSourcePageStore>(() => ({
        selected: true,
        errors: []
    }));
    const {selected} = store;

    return <DataSourcePageProvider store={store}>
        <Page
            verticalAlign="center"
            hideNavMenu
            bottomMenu={<BottomMenu />}
            style={{
                gap: "32px"
            }}
        >
            {selected ? <>
                <InfoSection />
                <ErrorsSection />
            </> : <NotSelectedSection />}
            <MenuSection />
            {!selected ? <ErrorsSection /> : null}
        </Page>
    </DataSourcePageProvider>;
});

export default DataSourcePage;