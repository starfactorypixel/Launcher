import React, {useMemo} from "react";
import {observer} from "mobx-react";
import {Section} from "@pages/common/Section";
import styles from "./style.scss";
import {Speed} from "./Speed";
import {Statistic} from "./Statistic";
import {FastActions} from "./FastActions";
import {useGeneralStore} from "../store";

export const InfoSection: React.FC = observer(() => {
    const generalStore = useGeneralStore();
    const {infoHidden} = generalStore;

    const classList = useMemo<string[]>(() => {
        const classList: string[] = [styles.info];
        if (infoHidden) {
            classList.push(styles.hidden);
        }
        return classList;
    }, [infoHidden]);

    return <Section 
        container
        className={classList.join(" ")}
        containerClassName={styles.container}
    >
        <Speed />
        <Statistic />
        <FastActions />
    </Section>;
});