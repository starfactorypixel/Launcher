import React from "react";
import {MenuSection} from "@pages/common/MenuSection";

export const DataSourceIcon: React.FC = React.memo(() => {
    return (
        <MenuSection.Icon width="18" height="27" viewBox="0 0 18 27">
            <path d="M12.75 7.5V12.5H14V15H10.25V5H12.75L9 0L5.25 5H7.75V15H4V12.4125C4.875 11.95 5.5 11.0625 5.5 10C5.5 8.4875 4.2625 7.25 2.75 7.25C1.2375 7.25 0 8.4875 0 10C0 11.0625 0.625 11.95 1.5 12.4125V15C1.5 16.3875 2.6125 17.5 4 17.5H7.75V21.3125C6.8625 21.775 6.25 22.6875 6.25 23.75C6.25 25.275 7.4875 26.5 9 26.5C10.5125 26.5 11.75 25.275 11.75 23.75C11.75 22.6875 11.1375 21.775 10.25 21.3125V17.5H14C15.3875 17.5 16.5 16.3875 16.5 15V12.5H17.75V7.5H12.75Z" />
        </MenuSection.Icon>
    );
});

DataSourceIcon.displayName = "DataSourceIcon";
