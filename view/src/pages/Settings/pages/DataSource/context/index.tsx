import React, {useContext, useMemo} from "react";
import {DataSourcePageStore} from "..";

export interface IDataSourcePageContext {
    store: DataSourcePageStore;
}

export const DataSourcePageContext = React.createContext<IDataSourcePageContext | null>(null);

export interface DataSourcePageProviderProps {
    store: DataSourcePageStore;
    children?: React.ReactNode;
}

export function DataSourcePageProvider({store, children}: DataSourcePageProviderProps): React.ReactElement {
    const context = useMemo<IDataSourcePageContext>(() => ({
        store
    }), [store]);

    return <DataSourcePageContext.Provider value={context}>
        {children}
    </DataSourcePageContext.Provider>;
}

export function useDataSourcePage(): IDataSourcePageContext {
    const context = useContext(DataSourcePageContext);

    if (context === null) {
        throw new Error("useDataSourcePage must be used within a DataSourcePageProvider.");
    }

    return context;
}