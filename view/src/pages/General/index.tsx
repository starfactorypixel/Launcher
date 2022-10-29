import React, {useMemo} from "react";
import {Page} from "@pages/common/Page";
import {Section} from "@pages/common/Section";
import styles from "./style.scss";
import {InfoSection} from "./InfoSection";
import {Configure} from "./Configure";
import {GeneralStore, GeneralStoreProvider} from "./store";

export default function General(): React.ReactElement {
    const store = useMemo(() => new GeneralStore, []);

    return <GeneralStoreProvider store={store}>
        <Page className={styles.general}>
            <section />
            <InfoSection />
            <Section
                container
                className={styles.center}
                containerClassName={styles.container}
            >
                <Configure />
            </Section>
        </Page>
    </GeneralStoreProvider>;
}