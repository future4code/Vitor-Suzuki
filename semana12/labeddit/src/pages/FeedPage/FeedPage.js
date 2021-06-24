import React, { useEffect, useState } from 'react';
import useProtectedPage from '../../hooks/useProtectedPage';
import PostCard from '../../components/PostCard/PostCard';
import { BASE_URL } from '../../constants/urls';
import useRequestData from '../../hooks/useRequestData';


const FeedPage = () => {
    useProtectedPage()

    const posts = useRequestData([], `${BASE_URL}/posts`)

    const postFeed = posts.map((post) => {
        return (
            <PostCard
                title={post.title}
                body={post.body}
                createdAt={post.createdAt}
                voteSum={post.voteSum}
                userVote={post.userVote}
                commentCount={post.commentCount}
                username={post.username}

                onClick={() => null}
            />
        )
    })

    return (
        <div>
            {postFeed}
        </div>
    )
}

export default FeedPage