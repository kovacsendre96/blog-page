import { Grid } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import Header from "../components/Header/Header";
import ContentCard from "../components/SideContent/ContentCard";
import { globalStyles } from "../global/style";
import { useNavigate } from "react-router-dom";


const OpenPage = ({ blogData }) => {

    const [loading, setLoading] = useState(true);
    const globalStyle = globalStyles();
    const navigate = useNavigate();
    const redirect = (blog_url) => {
        navigate(`/blog-page/${blog_url}`);
    };
    return (
        <Grid container justifyContent="center">
           {/*  <Header /> */}
            {
                 Object.values(blogData[0].blogs).map((blog,index) =>( 
                    <Grid item xs={8} md={7} lg={5} className={`${globalStyle.marginAll} ${globalStyle.pointerCursor}`} onClick={() => redirect(blog.blog_url)}>
                        < ContentCard
                            blogDate={blog.blog_date}
                            blogTitle={blog.blog_title}
                            imgUrl={blog.blog_img}
                        />
                    </Grid>
                ))
            }
        </Grid>
    );
};

export default OpenPage;