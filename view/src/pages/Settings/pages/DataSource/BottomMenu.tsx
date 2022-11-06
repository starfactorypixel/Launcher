import React, {useCallback} from "react";
import {useNavigate} from "react-router-dom";
import {IconButton, IconButtonTheme} from "@pages/common/IconButton";
import {LeftArrowIcon} from "@pages/common/IconButton/icons/LeftArrow";
import {CloseIcon} from "@pages/common/IconButton/icons/Close";

export function BottomMenu(): React.ReactElement {
    const navigate = useNavigate();

    const handleBack = useCallback(() => {
        navigate(-1);
    }, []);
    const handleClose = useCallback(() => {
        navigate("/");
    }, []);

    return (
        <>
            <IconButton label="Back" theme={IconButtonTheme.GREY} onClick={handleBack}>
                <LeftArrowIcon />
            </IconButton>
            <div />
            <IconButton label="Close" theme={IconButtonTheme.RED} onClick={handleClose}>
                <CloseIcon />
            </IconButton>
        </>
    );
}
