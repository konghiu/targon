import React, { useState } from "react";
import { handlePostToServer } from "../../../services/API";

const Comment = ({ comment, userSlice, blog }) => {
    const [like, setLike] = useState(comment.like?.length || 0);
    const [dislike, setDislike] = useState(comment.dislike?.length || 0);

    const handleLikeOrDislikeBlog = (type, id) => {
        if (!userSlice) {
            alert(`Please sign in before ${type}`);
            return;
        }
        const payload = {
            user: userSlice._id,
            type,
            commentId: id,
        };
        handlePostToServer(
            `blog/comment/likeOrDislike/${blog.title}`,
            payload
        ).then((res) => {
            if (res.status === 200) {
                setLike(res.data.like);
                setDislike(res.data.dislike);
            }
        });
    };

    return (
        <div className="contentBlog__comment">
            <strong className="comment__accessor">
                {comment.assessor.username}
            </strong>
            <p className="comment__content">{comment.content}</p>
            <div className="comment__emoji">
                <div>
                    <span>{like}</span>
                    <span
                        onClick={() =>
                            handleLikeOrDislikeBlog("like", comment._id)
                        }
                    >
                        like
                    </span>
                </div>
                <div>
                    <span>{dislike}</span>
                    <span
                        onClick={() =>
                            handleLikeOrDislikeBlog("dislike", comment._id)
                        }
                    >
                        dislike
                    </span>
                </div>
            </div>
        </div>
    );
};

export default Comment;
