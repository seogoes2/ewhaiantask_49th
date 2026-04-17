import React from "react";
import styled from "styled-components";
import PostListItem from "./PostListItem";

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;

    & > *:not(:last-child) {
        margin-bottom: 16px;
    }
`;

function PostList(props) {
    const { posts, onClickPost } = props;

    return (
        <Wrapper>
            {posts.map((post, index) => (
                <PostListItem
                    key={post.id}
                    post={post}
                    onClick={() => onClickPost(post)}
                />
            ))}
        </Wrapper>
    );
}

export default PostList;