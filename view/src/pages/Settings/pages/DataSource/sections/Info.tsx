import React from "react";
import {observer} from "mobx-react";
import {Section} from "@pages/common/Section";
import {Cell, Row, Table} from "@pages/common/Table";
import {useDataSourcePage} from "../context";

export const InfoSection: React.FC = observer(() => {
    const {
        store: {errors}
    } = useDataSourcePage();

    return (
        <Section container containerWidth={600}>
            <Table
                width="100%"
                head={
                    <Row>
                        <Cell header align="left">
                            Data source
                        </Cell>
                        <Cell header align="left">
                            Status
                        </Cell>
                        <Cell header align="left">
                            MainECU
                        </Cell>
                    </Row>
                }
                style={{marginBottom: 15}}
            >
                <Row>
                    <Cell>USB Port</Cell>
                    <Cell style={{color: "#00F19F"}}>Connected</Cell>
                    <Cell>Version: 0.1.12 rev.3</Cell>
                </Row>
                <Row>
                    <Cell>/path/to/port</Cell>
                    {errors.length !== 0 ? (
                        <Cell style={{color: "#ED0332"}}>
                            {errors.length} Error{errors.length > 1 ? "s" : null}
                        </Cell>
                    ) : (
                        <Cell>0 Errors</Cell>
                    )}
                    <Cell>Serial version: 0.0.7</Cell>
                </Row>
                <Row>
                    <Cell />
                    <Cell>Time: 2h 12m</Cell>
                    <Cell />
                </Row>
            </Table>
        </Section>
    );
});
