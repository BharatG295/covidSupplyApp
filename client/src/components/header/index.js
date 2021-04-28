import React from "react";
import { AppBar, Typography, Toolbar } from "@material-ui/core"

function Header() {
    return(
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6">
                    COVID Help
                </Typography>
            </Toolbar>
        </AppBar>
    );
}

export default Header;