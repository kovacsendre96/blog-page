import React, { useEffect, useState } from "react";
import MainPage from "./Pages/MainPage";
import { Route, Routes } from 'react-router-dom';
import OpenPage from "./Pages/OpenPage";
import NotFound from "./Pages/NotFound";
import { getBlogData } from "./global/axiosHelper";
import Header from "./components/Header/Header";


const App = () => {

  const [loading, setLoading] = useState(true);
  const [blogList, setBlogList] = useState([]);

  useEffect(() => {
    getBlogData(setBlogList, setLoading, '');
  }, []);



console.log(blogList)

  return (
    <div className="App">
<Header/>
      <Routes>
        {
          !loading && blogList[0] !== null &&
          Object.values(blogList[0].blogs).map((blog,index) => { console.log(blog.blog_url)
            return (
              <>
              <Route path="/" element={<OpenPage blogData={blogList} />} />
                <Route path={`${blog.blog_url}`} element={<MainPage blog={blog} />} />
              </>
            )
          }
          )

        }

      <Route path='*' exact={true} component={NotFound} />
      </Routes>
    </div>
  );
}

export default App;
