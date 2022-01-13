import { Grid, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import { globalStyles } from "../../global/style";
import { translate } from "../../translate";
import ContentCard from "./ContentCard";


const useStyles = makeStyles((theme) => ({
    root: {

    },
}));

const SideContent = () => {
    const classes = useStyles();
    const globalStyle = globalStyles();
    return (
        <Grid container direction="column" className={classes.root}>
            <Typography variant="h5" gutterBottom>{translate.previous_writings}</Typography>
            <Grid className={globalStyle.marginBottom}>
                <ContentCard />
            </Grid>
            <Grid className={globalStyle.marginBottom}>
                <ContentCard />
            </Grid>
            <Grid className={globalStyle.marginBottom}>
                <ContentCard />
            </Grid>
            <Grid className={globalStyle.marginBottom}>
                <ContentCard />
            </Grid>
        </Grid>
    );
};

export default SideContent