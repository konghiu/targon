import React from "react";
import Skeleton from "../../components/layout/skeleton/Skeleton";
import AsideBlogs from "./templates/AsideBlogs";
import "./css/index.css";
import BlogContent from "./templates/BlogContent";

const Blog = () => {
    const [blog, setBlog] = React.useState(null);

    return (
        <Skeleton>
            <div className="flex gap-8">
                <AsideBlogs setBlog={setBlog} blog={blog} />
                <BlogContent blog={blog} />
            </div>
        </Skeleton>
    );
};

export default Blog;
