import * as React from "react";
import styles from "./style.scss";
import {Page} from "@pages/common/Page";
import {Section} from "@pages/common/Section";
import {Title} from "@pages/common/Title";
import {Paragraph} from "@pages/common/Paragraph";
import {Button} from "@pages/common/Button";

export function NotInstalled(): React.ReactElement {
    return <Page className={styles["navigator-not-installed"]}>
        <Section 
            className={styles.section}
            container
            containerClassName={styles.container}
        >
            <Title variant={1}>Navigator app not selected</Title>
            <Paragraph className={styles.paragraph}>Choose a default navigator application</Paragraph>
            <Button className={styles.button}>Select default application</Button>
        </Section>
    </Page>;
}