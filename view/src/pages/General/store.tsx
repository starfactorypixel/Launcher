import React, {useContext} from "react";
import {makeAutoObservable} from "mobx";

export class GeneralStore {
    public infoHidden: boolean = false;

    constructor() {
        makeAutoObservable(this);
    }
}

export const GeneralStoreContext = React.createContext<GeneralStore | null>(null);

export interface GeneralStoreProviderProps {
    store: GeneralStore;
    children: React.ReactNode;
}

export function GeneralStoreProvider({store, children}: GeneralStoreProviderProps): React.ReactElement {
    return <GeneralStoreContext.Provider value={store}>
        {children}
    </GeneralStoreContext.Provider>;
}

export function useGeneralStore(): GeneralStore {
    const generalStore = useContext(GeneralStoreContext);
    if (!generalStore) {
        throw new Error("useGeneralStore must be used within a GeneralStoreProvider.");
    }
    return generalStore;
}