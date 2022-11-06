import * as React from "react";
import {IconButton} from "@pages/common/IconButton";
import {CloseIcon} from "@pages/common/IconButton/icons/Close";
import styles from "../style.scss";

export const View: React.FC = React.memo(() => {
    return (
        <svg className={styles.view}>
            <path
                d="M1.02993 92.0946L51.6076 103.09L124.209 69.8802L174.724 24.1559C175.505 24.7953 176.277 25.4455 177.04 26.1063L128.23 70.2873L177.919 80.7775L207.478 72.9107L208.079 71.8097C208.643 73.4307 209.169 75.0696 209.657 76.7251L201.862 134.094L204.587 150.949C203.866 152.547 203.107 154.123 202.312 155.678L199.224 136.572L172.336 153.228V177.575L194.633 168.412C193.517 170.001 188.698 174.476 187.5 176L171.331 184.232L132.396 195.48L86.1592 196.505L27.5001 177.5C26.4243 176.146 21.0525 170.769 20.0421 169.362L83.7026 189.577L82.2212 186.128L18.4581 167.096C17.5912 165.822 16.751 164.527 15.9385 163.214L80.068 182.354L62.9981 153.662L3.97382 135.99C3.65771 134.865 3.35955 133.731 3.07968 132.591L61.6774 150.135L50.5891 116.015L0.219727 100.088C0.28524 99.0603 0.365258 98.0368 0.459576 97.0173L50.2772 112.77V105.87L0.656156 95.0835C0.767017 94.083 0.891673 93.0866 1.02993 92.0946ZM178.345 83.7686L206.697 76.223L198.955 133.21L170.029 151.128L131.622 176.346L84.099 183.262L65.3631 151.77L53.6971 115.872L178.333 83.7716L178.345 83.7686ZM169.336 155.172V178.685L133.667 188.99V178.592L169.336 155.172ZM130.667 179.516V189.517L87.3543 190.478L85.4717 186.094L130.667 179.516ZM175.5 82.5L51.6076 115V105L125.5 71L175.5 82.5Z"
                fill="#2A343A"
                fillRule="evenodd"
                clipRule="evenodd"
            />
            <path d="M125 71L51.5 105V115L177.5 82.5L125 71Z" stroke="#60717A" strokeWidth="3" />
            <circle cx="107" cy="107" r="106" stroke="#E8EEED" strokeWidth="2" />
            <circle cx="127" cy="84" r="6" fill="white" />
            <path d="M55 107L125.5 74.5L162 83L135.5 90" stroke="white" strokeWidth="2" />
            <path d="M85.5 179.5L70 151L129.5 173.5L85.5 179.5Z" stroke="#60717A" strokeWidth="3" />
            <path d="M79 158.5L88 175.5L114.5 172" stroke="white" strokeWidth="2" />
            <path d="M187 176.5L326 243" stroke="#E8EEED" />
            <circle cx="326" cy="243" r="4" fill="#E8EEED" />
        </svg>
    );
});

View.displayName = "View";

export interface LightsDetailsProps {
    onClose?: () => void;
}

export function LightsDetails({onClose}: LightsDetailsProps): React.ReactElement | null {
    return (
        <div className={[styles.item, styles["lights-details"]].join(" ")}>
            <div className={styles.left}>
                <IconButton className={styles.button} onClick={onClose}>
                    <CloseIcon />
                </IconButton>
            </div>
            <div className={styles.right}>
                <View />
            </div>
        </div>
    );
}
