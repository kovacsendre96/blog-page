import {Grid, makeStyles, Typography} from "@material-ui/core";
import React from "react";
import {setLinkFromText} from "./globalFunctions";
import {globalStyles} from "./style";


const useStyles = makeStyles((theme) => ({
    root: {
        textAlign: 'justify'
    }
}));
const Paragraph = ({content, response}) => {

    const classes = useStyles();
    const globalStyle = globalStyles();

    return (
        <Typography
            dangerouslySetInnerHTML={{__html: setLinkFromText(response?.referenceLink, response?.linkedText, content)}}
            variantMapping={"p"}
            className={`${globalStyle.marginAll}
             ${classes.root}`}
        />


    );
};

export default Paragraph