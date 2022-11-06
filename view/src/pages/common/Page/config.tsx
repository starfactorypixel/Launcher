import React, {useContext} from "react";
import {useLocalObservable} from "mobx-react";

export interface PageConfig {
    navMenuHidden: boolean;
    bottomMenu: React.ReactNode;
}

export const PageConfiguratorContext = React.createContext<Partial<PageConfig> | null>(null);

export function usePageConfig(): Partial<PageConfig> {
    const config = useContext(PageConfiguratorContext);

    if (!config) {
        throw new Error("usePageConfig must be used within a PageConfigurator.");
    }

    return config;
}

export interface PageConfiguratorProps {
    children?: React.ReactNode;
}

export function PageConfigurator({children}: PageConfiguratorProps): React.ReactElement {
    const config = useLocalObservable<Partial<PageConfig>>(() => ({}));

    return <PageConfiguratorContext.Provider value={config}>
        {children}
    </PageConfiguratorContext.Provider>;
}