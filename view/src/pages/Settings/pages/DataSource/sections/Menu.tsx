import React, {useCallback} from "react"
import {runInAction} from "mobx";
import {observer} from "mobx-react"
import {MenuSection as MenuSectionCommon} from "@pages/common/MenuSection";
import {Flex} from "@pages/common/Flex";
import {Button} from "@pages/common/Button";
import {PaperTheme} from "@pages/common/Paper";
import {DataSourceIcon} from "../../common/icons/DataSource";
import {useDataSourcePage} from "../context";

export const MenuSection: React.FC = observer(() => {
    const {store, store: {selected}} = useDataSourcePage();

    const handleUsbPort = useCallback(() => {
        runInAction(() => {
            store.selected = !store.selected;

            if (store.selected) {
                store.errors = [
                    new Error("Lights is not response, please check connection to CAN-BUS.")
                ];
            } else {
                store.errors = [
                    new Error("Driver for USB Port not found. Check the connected device.")
                ];
            }
        });
    }, []);

    return <MenuSectionCommon
        after={(
            <Flex justifyContent="center">
                <Button>Specify device manually</Button>
            </Flex>
        )}
    >
        <MenuSectionCommon.Checkbox 
            startIcon={<DataSourceIcon />}
            title="USB Port"
            checked
            checkedTheme={!selected ? PaperTheme.RED : undefined}
            onClick={handleUsbPort}
        />
    </MenuSectionCommon>;
});