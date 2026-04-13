import React from 'react';
import Comment from './Comment';

const comments = [
    {
        name: "김민서",
        comment: "집에 가고 싶어요.",
    },
    {
        name: "김철수",
        comment: "저두요...",
    },
    {
        name: "박명수",
        comment: "아유 하기 싫어.",
    }
];

function CommentList(props) {
    return (
        <div>
            {comments.map((comment) => {
                return <Comment key={comment.name} name={comment.name} comment={comment.comment} />;
            })}
        </div>
    );
}

export default CommentList;