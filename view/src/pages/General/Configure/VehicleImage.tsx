import * as React from "react";
import styles from "./style.scss";

export const VehicleImage: React.FC = React.memo(() => {
    return <div className={styles.image}>
        <svg className={styles.view} viewBox="0 0 235 586">
            <path d="M44.3317 260.349L117.849 260.349L191.366 260.349M44.3317 260.349L36.1631 190.916M44.3317 260.349L44.3317 372.667M36.1631 190.916L58.6267 178.664L117.849 178.664L177.071 178.664L199.535 190.916M36.1631 190.916L13.6997 86.0377L52.5003 17.334L117.849 12.1698L183.198 17.334L221.999 86.0377L199.535 190.916M36.1631 190.916L13.6995 213.38M52.5003 5.08114L117.849 0.996852L183.198 5.08115M52.5003 5.08114L3.48881 56.1348M52.5003 5.08114L13.6996 72.4719L3.48881 56.1348M3.48881 56.1348L3.4888 178.664L13.6995 213.38M13.6995 213.38L13.6995 348.162M13.6995 348.162L1.44666 431.89M13.6995 348.162L44.3317 372.667M1.44666 431.89L1.44665 542.165L13.6995 574.84M1.44666 431.89L44.3317 372.667M1.44666 431.89L54.5424 411.057M13.6995 574.84L54.5424 585.05M13.6995 574.84L27.0189 542.165M54.5424 585.05L117.849 585.05L181.155 585.05M54.5424 585.05L27.0189 542.165M44.3317 372.667L191.366 372.667M44.3317 372.667L54.5424 411.057M191.366 260.349L199.535 190.916M191.366 260.349L191.366 372.667M199.535 190.916L221.998 213.38M183.198 5.08115L232.209 56.1348M183.198 5.08115L221.998 72.4719L232.209 56.1348M232.209 56.1348L232.209 178.664L221.998 213.38M221.998 213.38L221.998 348.162M221.998 348.162L234.251 431.89M221.998 348.162L191.366 372.667M234.251 431.89L234.251 542.165L221.998 574.84M234.251 431.89L191.366 372.667M234.251 431.89L181.155 411.057M221.998 574.84L181.155 585.05M221.998 574.84L205.943 542.165M181.155 585.05L205.943 542.165M191.366 372.667L181.155 411.057M54.5424 411.057L181.155 411.057M54.5424 411.057L27.0189 542.165M181.155 411.057L205.943 542.165" />
        </svg>
    </div>;
});