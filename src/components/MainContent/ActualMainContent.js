import { Grid, makeStyles, Typography } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { getBlogData } from "../../global/axiosHelper";
import { contentSeparator } from "../../global/globalFunctions";
import { globalStyles } from "../../global/style";

const useStyles = makeStyles((theme) => ({
    root: {

    }
}));

const ActualMainContent = ({ blog }) => {
    const classes = useStyles();
    const globalStyle = globalStyles();
    const actualContentData = blog;
console.log(actualContentData);
    return (
        <Grid container className={classes.root} direction="column">
            {

                <React.Fragment>
                    <Typography variant="h4" className={` ${globalStyle.marginTop}`}>
                        {actualContentData.blog_title}
                    </Typography>

                    <Typography variant="subtitle2" color="textSecondary" className={`${globalStyle.italicFontStyle} ${globalStyle.marginAll}`}>
                        {actualContentData.blog_date}
                    </Typography>

                    {actualContentData.content.map((data) => contentSeparator(data))}
                </React.Fragment>
            }
        </Grid>
    );
};

export default ActualMainContent