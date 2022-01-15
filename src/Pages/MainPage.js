import { Grid } from "@material-ui/core";
import React from "react";
import Header from "../components/Header/Header";
import MainContent from "../components/MainContent/MainContent";
import SideContent from "../components/SideContent/SideContent";


const MainPage = ({blog}) => {
    return (
        <Grid container>
{/*             <Grid item xs={12}>
                <Header />
            </Grid> */}
            <Grid item xs={9}>
                <MainContent
                blog={blog}
                />
            </Grid>
 {/*            <Grid item xs={3}>
                <SideContent />
            </Grid> */}

        </Grid>
    );
};

export default MainPage;