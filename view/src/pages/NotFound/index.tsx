import * as React from "react";
import {Navigate} from "react-router-dom";

export default function NotFoundPage(): React.ReactElement {
    return <Navigate to="/" />;
}
