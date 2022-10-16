import React, {useMemo} from "react";
import {Main} from "@pages/common/Main";
import {Section} from "@pages/common/Section";
import styles from "./style.scss";
import {InfoSection} from "./InfoSection";
import {Configure} from "./Configure";
import {GeneralStore, GeneralStoreProvider} from "./store";

export default function General(): React.ReactElement {
    const store = useMemo(() => new GeneralStore, []);

    return <GeneralStoreProvider store={store}>
        <Main className={styles.general}>
            <div />
            <InfoSection />
            <Section
                container
                className={styles.center}
                containerClassName={styles.container}
            >
                <Configure />
            </Section>
        </Main>
    </GeneralStoreProvider>;
}