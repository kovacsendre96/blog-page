import { makeStyles } from "@material-ui/core";

export const globalStyles = makeStyles((theme) => ({
    paddingBottom: {
        paddingBottom: 16
    },
    paddingAll:{
        padding:10
    },
    marginBottom: {
        marginBottom: 20
    },
    marginTop: {
        marginTop: 20
    },
    marginTopSmall : {
        paddingTop:5
    },
    marginLeft: {
        marginLeft: 20
    },
    marginRight: {
        marginRight: 20
    },
    marginAll: {
        margin: 20
    },
    centerizeElement: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    italicFontStyle: {
        fontStyle: 'italic'
    },
    textAlignCenter: {
        textAlign: 'center'
    }
}));