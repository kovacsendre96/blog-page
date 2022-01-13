import { Grid, makeStyles, Typography } from "@material-ui/core";
import React, { useEffect } from "react";
import ActualMainContent from "./ActualMainContent";

const useStyles = makeStyles((theme) => ({
    root: {

    }
}));

const MainContent = () => {
    const classes = useStyles();
    return (
        <Grid container direction="column" alignItems="center" className={classes.root}>
            <Grid item xs={11}>
                <ActualMainContent/>
            </Grid>
        </Grid>
    );
};

export default MainContent