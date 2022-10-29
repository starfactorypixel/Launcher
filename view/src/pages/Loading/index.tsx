import * as React from "react";
import styles from "./style.scss";
import {StatusBar} from "@pages/common/StatusBar";
import {Page} from "@pages/common/Page";

export const LoadingIcon: React.FC = React.memo(() => {
    return <svg width="100" height="100">
        <rect x="20" y="50" width="4" height="10" fill="#fff">
            <animateTransform 
                attributeType="xml"
                attributeName="transform" 
                type="translate"
                values="0 0; 0 20; 0 0"
                begin="0" 
                dur="0.6s" 
                repeatCount="indefinite" 
            />
        </rect>
        <rect x="30" y="50" width="4" height="10" fill="#fff">
            <animateTransform 
                attributeType="xml"
                attributeName="transform" 
                type="translate"
                values="0 0; 0 20; 0 0"
                begin="0.2s"
                dur="0.6s" 
                repeatCount="indefinite" 
            />
        </rect>
        <rect x="40" y="50" width="4" height="10" fill="#fff">
            <animateTransform 
                attributeType="xml"
                attributeName="transform" 
                type="translate"
                values="0 0; 0 20; 0 0"
                begin="0.4s" 
                dur="0.6s" 
                repeatCount="indefinite" 
            />
        </rect>
    </svg>;
});

export default function Loading(): React.ReactElement {
    return <>
        <StatusBar />
        <Page className={styles.loading}>
            <LoadingIcon />
        </Page>
    </>;
}