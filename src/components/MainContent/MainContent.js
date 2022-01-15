import { Grid, makeStyles, Typography } from "@material-ui/core";
import React, { useEffect } from "react";
import ActualMainContent from "./ActualMainContent";

const useStyles = makeStyles((theme) => ({
    root: {

    }
}));

const MainContent = ({blog}) => {
    const classes = useStyles();
    return (
        <Grid container direction="column" alignItems="center" className={classes.root}>
            <Grid item xs={11}>
                <ActualMainContent
                blog={blog}
                />
            </Grid>
        </Grid>
    );
};

export default MainContent