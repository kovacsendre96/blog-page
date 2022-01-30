import { Grid, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import { globalStyles } from "./style";


const useStyles = makeStyles((theme) => ({
    root: {
     textAlign:'justify'
    }
}));

const Paragraph = ({ content }) => {
    const classes = useStyles();
    const globalStyle = globalStyles();
    
   
    return (
        <Typography variantMapping={"p"} className={`${globalStyle.marginAll} ${classes.root}`}>
            {content}
        </Typography>
    );
};

export default Paragraph