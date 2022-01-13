import { Grid, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import { globalStyles } from "../../global/style";

import { translate } from "../../translate";

const useStyles = makeStyles((theme) => ({
    root: {
        height: 400
    },
    titleWrapper: {
        height: '100%',
        borderTop: '1px solid black',
        borderBottom: '1px solid black',
    },
    title: {
        textTransform: 'uppercase'
    }
}));

const Header = () => {
    const classes = useStyles();
    const globalStyle = globalStyles();
    return (
        <Grid container justifyContent="center" className={`${classes.root} ${globalStyle.marginBottom} ${globalStyle.marginTop}`}>
            <Grid item xs={10} className={`${classes.titleWrapper} ${globalStyle.centerizeElement}`}>
                <Typography variant="h2" className={classes.title}>
                    {translate.cynical_apology}
                </Typography>
            </Grid>
        </Grid>
    );
};

export default Header