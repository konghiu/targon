import React from "react";
import { handleGetFromServer } from "../../../services/API";

const AsideBlogs = ({ setBlog, blog }) => {
    const [blogList, setBlogList] = React.useState([]);

    React.useEffect(() => {
        handleGetFromServer("blog").then((res) => {
            setBlogList(res);
            if (!blog) setBlog(res[0]);
        });
    }, []);

    const handleGetBlog = (title) => {
        if (blog.title === title) return;
        handleGetFromServer(`blog/${title}`)
            .then((res) => setBlog(res))
            .catch((err) => console.log(err));
    };

    return (
        <div className="asideBlog w-2/5">
            <div>
                <strong className="">POSTS OTHER</strong>
                <ul className="asideBlog__blogs">
                    {blogList.map((blog, index) => (
                        <li
                            key={blog._id}
                            className="asideBlog__blog flex gap-4"
                        >
                            <strong className="text-2xl">{index + 1}</strong>
                            <p>
                                <strong
                                    className="cursor-pointer hover:underline"
                                    onClick={() => handleGetBlog(blog.title)}
                                >
                                    {blog.title}
                                </strong>
                                <span className="asideBlog__blog-litmitLine">
                                    {blog.content}
                                </span>
                                <span className="block text-gray-500">
                                    03/10/2023
                                </span>
                            </p>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default AsideBlogs;
