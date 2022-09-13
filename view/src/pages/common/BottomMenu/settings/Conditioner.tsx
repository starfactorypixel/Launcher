import * as React from "react";
import {useState, useCallback} from "react";
import styles from "../style.scss";

export const ConditionerIcon: React.FC = React.memo(() => {
    return <svg className={styles.icon} width="36" height="36">
        <path d="M18.0018 19.0312C17.4327 19.0312 16.9707 18.5693 16.9707 18C16.9707 17.4308 17.4327 16.9688 18.0018 16.9688C18.571 16.9688 19.033 17.4308 19.033 18C19.033 18.5693 18.571 19.0312 18.0018 19.0312ZM28.9932 18.5363C28.886 16.5912 27.4864 15.0017 25.645 14.6057L25.6166 14.6002C25.305 14.5562 24.9448 14.5315 24.5791 14.5315C22.7001 14.5315 20.9751 15.1887 19.6214 16.2859L19.6361 16.274C19.483 16.131 19.3088 16.0064 19.12 15.9074L19.1072 15.9009C20.5966 14.4939 23.0841 13.0823 23.4288 11.2096C23.8018 9.18843 21.1154 6.84826 18.5362 7.00776C16.5913 7.11592 15.0019 8.5147 14.606 10.3562L14.6005 10.3846C14.5565 10.6963 14.5317 11.0565 14.5317 11.4223C14.5317 13.3014 15.1889 15.0265 16.286 16.3803L16.2741 16.3657C16.1311 16.5188 16.0074 16.6929 15.9075 16.8817L15.9011 16.8946C14.4933 15.405 13.0827 12.9173 11.2092 12.5717C9.18822 12.1996 6.84824 14.8853 7.00773 17.4647C7.11588 19.4098 8.51455 20.9993 10.3568 21.3952L10.3843 21.3998C10.696 21.4438 11.0552 21.4686 11.421 21.4686C13.2999 21.4686 15.0249 20.8104 16.3795 19.7132L16.3649 19.7251C16.5179 19.8681 16.6921 19.9919 16.8809 20.0918L16.8937 20.0982C15.4043 21.5062 12.9159 22.9169 12.5712 24.7905C12.1991 26.8116 14.8846 29.1518 17.4647 28.9923C19.4097 28.8851 20.999 27.4854 21.3949 25.6438L21.4004 25.6154C21.4444 25.3038 21.4692 24.9435 21.4692 24.5778C21.4692 22.6987 20.8111 20.9736 19.714 19.6197L19.7259 19.6344C19.8689 19.4813 19.9935 19.3072 20.0925 19.1183L20.0989 19.1055C21.5058 20.595 22.9173 23.0828 24.7908 23.4283C26.8118 23.8014 29.1518 21.1148 28.9923 18.5344L28.9932 18.5363Z" />
    </svg>;
});

export interface ConditionerProps {
    mode: number;
    onMode?: (mode: number) => any;
}

export function Conditioner({mode: defaultMode, onMode}: ConditionerProps): React.ReactElement {
    const [mode, setMode] = useState(defaultMode);
    const handleClick = useCallback(() => {
        let newMode: number = mode + 1;
        if(newMode > 5)
            newMode = 0;
        setMode(newMode);
        onMode?.(newMode);
    }, [mode]);
    const classList: string[] = [styles.item, styles.conditioner];
    const style: Record<string, string> = {};
    const modeDotOneClassList: string[] = [styles.dot];
    const modeDotTwoClassList: string[] = [styles.dot];
    const modeDotThreeClassList: string[] = [styles.dot];
    const modeDotFourClassList: string[] = [styles.dot];
    const modeDotFiveClassList: string[] = [styles.dot];
    if(mode > 0) {
        classList.push(styles.active);
        style["--mode"] = mode.toString();
        modeDotOneClassList.push(styles.active);
        if(mode > 1) {
            modeDotTwoClassList.push(styles.active);
            if(mode > 2) {
                modeDotThreeClassList.push(styles.active);
                if(mode > 3) {
                    modeDotFourClassList.push(styles.active);
                    if(mode > 4)
                        modeDotFiveClassList.push(styles.active);
                }
            }
        }
    }
    return <div 
        className={classList.join(" ")} 
        style={style}
        onClick={handleClick}    
    >
        <ConditionerIcon />
        <div className={styles.mode}>
            <div className={modeDotOneClassList.join(" ")} />
            <div className={modeDotTwoClassList.join(" ")} />
            <div className={modeDotThreeClassList.join(" ")} />
            <div className={modeDotFourClassList.join(" ")} />
            <div className={modeDotFiveClassList.join(" ")} />
        </div>
    </div>
}