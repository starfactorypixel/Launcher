import React from "react";
import {MenuSection} from "@pages/common/MenuSection";

export const FastActionsIcon: React.FC = React.memo(() => {
    return (
        <MenuSection.Icon width="30" height="30" viewBox="0 0 30 30">
            <g clipPath="url(#clip0_286_887)">
                <path d="M27.5 11.25V18.75C27.5 20.125 26.375 21.25 25 21.25H23.75V18.75H25V11.25H5V18.75H12.5V21.25H5C3.625 21.25 2.5 20.125 2.5 18.75V11.25C2.5 9.875 3.625 8.75 5 8.75H25C26.375 8.75 27.5 9.875 27.5 11.25ZM18.125 23.75L19.4875 20.7375L22.5 19.375L19.4875 18.0125L18.125 15L16.7625 18.0125L13.75 19.375L16.7625 20.7375L18.125 23.75ZM21.25 17.5L22.025 15.775L23.75 15L22.025 14.225L21.25 12.5L20.475 14.225L18.75 15L20.475 15.775L21.25 17.5ZM18.125 23.75L19.4875 20.7375L22.5 19.375L19.4875 18.0125L18.125 15L16.7625 18.0125L13.75 19.375L16.7625 20.7375L18.125 23.75ZM21.25 17.5L22.025 15.775L23.75 15L22.025 14.225L21.25 12.5L20.475 14.225L18.75 15L20.475 15.775L21.25 17.5Z" />
            </g>
            <defs>
                <clipPath id="clip0_286_887">
                    <rect width="30" height="30" />
                </clipPath>
            </defs>
        </MenuSection.Icon>
    );
});

FastActionsIcon.displayName = "FastActionsIcon";
