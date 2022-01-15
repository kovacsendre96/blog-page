import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import { Grid } from '@material-ui/core';
import { globalStyles } from '../../global/style';



const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        height: 300,
        
        /*
        maxWidth: 380, */
        overflow: 'hidden',
    },
    media: {
        width: '50%',
    },
    contentWrapper: {
        width: '50%',
    }
}));

const ContentCard = ({ imgUrl, blogTitle, blogDate }) => {
    const classes = useStyles();
    const globalStyle = globalStyles();

    return (
        <Card className={classes.root}>
            <CardMedia
                className={classes.media}
                image={imgUrl}
                title="Paella dish"
            />
            <Grid className={classes.contentWrapper} container justifyContent='center'>
                <CardHeader
                    title={blogTitle}
                    subheader={blogDate}
                />
{/*                 <IconButton aria-label="add to favorites">
                    <FavoriteIcon />
                </IconButton>
                <IconButton aria-label="share">
                    <ShareIcon />
                </IconButton> */}
            </Grid>
        </Card>
    );
};

export default ContentCard;
