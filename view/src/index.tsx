/// <reference path="./index.d.ts" />
import "normalize.css";
import * as React from "react";
import {createRoot, Root} from "react-dom/client";
import {App} from "./App";

(() => {
    const container: Element | null = document.querySelector(".app");
    if(container === null) 
        return;
    const root: Root = createRoot(container);
    root.render(<App />);
})();