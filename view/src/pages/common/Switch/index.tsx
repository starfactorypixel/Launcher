import * as React from "react";
import {useState, useCallback} from "react";
import styles from "./style.scss";

export interface SwitchProps {
    options: string[];
    onOption?: (option: number) => any;
    defaultOption?: number;
}

export function Switch({options, onOption, defaultOption}: SwitchProps): React.ReactElement {
    const [selectedOption, setSelectedOption] = useState(defaultOption ?? 0);
    const handleSelect = useCallback((option: number) => {
        setSelectedOption(option);
        onOption?.(option);
    }, []);
    return <div className={styles.switch}>
        <div className={styles.list}>
            {options.map((option, index) => {
                const classList: string[] = [styles.item];
                if(index === selectedOption)
                    classList.push(styles.selected);
                return <span 
                    key={index} 
                    className={classList.join(" ")}
                    onClick={handleSelect.bind(undefined, index)}    
                >
                    {option}
                </span>;
            })}
        </div>
    </div>;
}