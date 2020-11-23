import React, { useState } from "react";
// import './index.css'
import {
    ThemeProvider,
    CSSReset,
    theme
} from "@chakra-ui/core";
import Todolist from './todolist'
function Index() {
    return (
        <ThemeProvider theme={theme}>
            <CSSReset/>
            <Todolist/>
        </ThemeProvider>
    );
}
export default Index