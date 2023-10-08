import React from "react";
import { convertDate, convertTime } from "../../../services/features";
import { useSelector } from "react-redux";
import { handlePostToServer } from "../../../services/API";
import { useEffect } from "react";
import Comment from "./Comment";

const BlogContent = ({ blog }) => {
    const userSlice = useSelector((state) => state.userSlice);
    const [comments, setComments] = React.useState();
    const [comment, setComment] = React.useState("");

    useEffect(() => {
        setComments(blog?.comments || []);
    }, [blog?.comments]);

    const handleSendComment = () => {
        if (comment === "") return;
        else if (!userSlice) {
            alert("Please sign in before comment");
            return;
        }
        handlePostToServer(`blog/comment/${blog.title}`, {
            assessor: userSlice._id,
            content: comment,
        })
            .then((res) => {
                setComments((prev) => [res.data.comment, ...prev]);
                setComment("");
            })
            .catch((err) => console.log(err));
    };

    return (
        <React.Fragment>
            {blog && (
                <div className=" flex-1">
                    <strong>CONTENT</strong>
                    <div className="contentBlog">
                        <strong className="text-xl text__main">
                            {blog.title}
                        </strong>
                        <p className="flex gap-2 items-end text-gray-500">
                            <small>
                                <strong>{convertTime(blog.createdAt)}</strong>
                            </small>
                            |<strong>{convertDate(blog.createdAt)}</strong>
                        </p>
                        <p className="contentBlog__content">{blog.content}</p>
                        <div className="contentBlog__inputComments">
                            <textarea
                                type="text"
                                className="input__search"
                                placeholder="Your mind ..."
                                value={comment}
                                onChange={(e) => setComment(e.target.value)}
                            />
                            <button onClick={() => handleSendComment()}>
                                send
                            </button>
                        </div>
                    </div>
                    <div className="contentBlog__comments">
                        <strong>Other comment:</strong>
                        {comments.map((comment) => (
                            <Comment
                                comment={comment}
                                key={comment._id}
                                blog={blog}
                                userSlice={userSlice}
                            />
                        ))}
                    </div>
                </div>
            )}
        </React.Fragment>
    );
};

export default BlogContent;
