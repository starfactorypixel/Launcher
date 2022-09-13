import * as React from "react";
import {NavLink} from "react-router-dom";
import styles from "./style.scss";

export const MainMenu: React.FC = React.memo(() => {
    return <div className={styles.menu}>
        <nav className={styles.nav}>
            <NavLink className={styles.link} to="/">
                <span className={styles["icon-button"]}>
                    <svg className={styles.icon} width="19" height="10">
                        <path d="M18.9991 2.90966C18.9839 2.64223 18.7853 2.46521 18.5554 2.51429L16.8755 2.87291C16.7018 2.91001 16.5601 3.06579 16.5078 3.25511C15.7699 2.26252 14.4699 0.655343 13.5455 0.294159C13.4175 0.245034 12.6209 0 9.5 0C6.37906 0 5.58254 0.245034 5.45182 0.295224C4.52931 0.655619 3.22996 2.26252 2.49217 3.25507C2.43986 3.06575 2.2982 2.91001 2.12446 2.87291L0.444647 2.51429C0.21479 2.46521 0.0161344 2.64223 0.000934431 2.90966C-0.01435 3.17713 0.15969 3.43371 0.389463 3.4828L1.87957 3.80093C1.36011 4.16259 1.02368 4.74073 1.02368 5.39229L1.2361 8.81686C1.2361 9.47031 1.8034 10 2.50319 10H3.26517C3.96497 10 4.53222 9.47031 4.53222 8.81686L4.50735 8.56618H14.4926L14.4677 8.81686C14.4677 9.47031 15.035 10 15.7347 10H16.4967C17.1965 10 17.7638 9.47031 17.7638 8.81686L17.9762 5.39229C17.9762 4.74073 17.6398 4.16263 17.1203 3.80093L18.6105 3.4828C18.8403 3.43371 19.0143 3.17713 18.9991 2.90966ZM5.80218 1.10461C5.87544 1.08237 6.64278 0.872898 9.50004 0.872898C12.3515 0.872898 13.1215 1.08154 13.1974 1.10449C13.7504 1.32882 14.6992 2.39877 15.4788 3.40848H3.52113C4.30169 2.39751 5.25148 1.32634 5.80218 1.10461ZM11.2846 7.98709H7.71548C7.55115 7.98709 7.41802 7.86274 7.41802 7.70937C7.41802 7.55597 7.55115 7.43165 7.71548 7.43165H11.2846C11.4489 7.43165 11.582 7.556 11.582 7.70937C11.582 7.86274 11.4489 7.98709 11.2846 7.98709ZM14.1909 6.50585C14.1909 6.50585 13.596 6.18586 12.8737 6.1078H5.76093C5.03863 6.18586 4.44377 6.50585 4.44377 6.50585C2.78667 6.90263 2.33629 5.63299 2.33629 5.63299H16.2984C16.2984 5.63299 15.848 6.90259 14.1909 6.50585Z" />
                    </svg>
                </span>
                <span className={styles.text}>
                    General
                </span>
            </NavLink>
            <NavLink className={styles.link} to="/navigator">
                <span className={styles["icon-button"]}>
                    <svg className={styles.icon} width="21" height="20">
                        <path d="M5 5L11.7142 19.9899L14.0489 13.7812L20.2575 11.4466L5 5Z" />
                    </svg>
                </span>
                <span className={styles.text}>
                    Navigator
                </span>
            </NavLink>
            <NavLink className={styles.link} to="/apps">
                <span className={styles["icon-button"]}>
                    <svg className={styles.icon} width="15" height="15">
                    <path d="M0 3.75H3.75V0H0V3.75ZM5.625 15H9.375V11.25H5.625V15ZM0 15H3.75V11.25H0V15ZM0 9.375H3.75V5.625H0V9.375ZM5.625 9.375H9.375V5.625H5.625V9.375ZM11.25 0V3.75H15V0H11.25ZM5.625 3.75H9.375V0H5.625V3.75ZM11.25 9.375H15V5.625H11.25V9.375ZM11.25 15H15V11.25H11.25V15Z" />
                    </svg>
                </span>
                <span className={styles.text}>
                    Apps
                </span>
            </NavLink>
            <NavLink className={styles.link} to="/charging">
                <span className={styles["icon-button"]}>
                    <svg className={styles.icon} width="8" height="15">
                        <path d="M6.936 1.5H5.6V0H2.4V1.5H1.064C0.48 1.5 0 1.95 0 2.4975V13.995C0 14.55 0.48 15 1.064 15H6.928C7.52 15 8 14.55 8 14.0025V2.4975C8 1.95 7.52 1.5 6.936 1.5ZM3.2 13.5V9.375H1.6L4.8 3.75V7.875H6.4L3.2 13.5Z" />
                    </svg>
                </span>
                <span className={styles.text}>
                    Charging
                </span>
            </NavLink>
        </nav>
    </div>;
});