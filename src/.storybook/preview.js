import React from "react";
import { lightTheme } from "../themes";

const withThemeProvider = () => {
    return (
        <div style={{ padding: '20px', backgroundColor: lightTheme.background }}>
            <Story />
        </div>
    );
};

export default decorators = [withThemeProvider];