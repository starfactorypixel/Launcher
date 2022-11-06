import React from "react";

export const LeftArrowIcon: React.FC = React.memo(() => {
    return (
        <svg width="16" height="16" viewBox="0 0 16 16">
            <path
                d="M15.3333 7.08335H4.17746L9.30163 1.95919L7.99996 0.666687L0.666626 8.00002L7.99996 15.3334L9.29246 14.0409L4.17746 8.91669H15.3333V7.08335Z"
                fill="white"
            />
        </svg>
    );
});

LeftArrowIcon.displayName = "LeftArrowIcon";
