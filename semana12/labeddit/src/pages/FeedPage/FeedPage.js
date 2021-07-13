import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import useProtectedPage from '../../hooks/useProtectedPage';
import PostCard from '../../components/PostCard/PostCard';
import { BASE_URL } from '../../constants/urls';
import useRequestData from '../../hooks/useRequestData';
import { goToPost } from '../../routes/coordinator';
import AddPost from '../../components/AddPost/AddPost';


const FeedPage = () => {
    useProtectedPage()
    const history = useHistory()
    const posts = useRequestData([], `${BASE_URL}/posts`)

    const onClickPost = (id) => {
        goToPost(history, id)
    }

    const postFeed = posts.map((post) => {
        return (
            <>
                <PostCard
                    key={post.userId}
                    title={post.title}
                    body={post.body}
                    createdAt={post.createdAt}
                    voteSum={post.voteSum}
                    userVote={post.userVote}
                    commentCount={post.commentCount}
                    username={post.username}

                    onClick={() => onClickPost(post.id)}
                />
            </>
        )
    })

    return (
        <div>                
            <AddPost />
            {postFeed}
        </div>
    )
}

export default FeedPage