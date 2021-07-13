import React from 'react';
import useProtectedPage from '../../hooks/useProtectedPage';
import { useParams } from 'react-router-dom';
import useRequestData from '../../hooks/useRequestData';
import { BASE_URL } from '../../constants/urls';
import { PostContainer, PostContent, PostSide, PostTitle, PostBody, PostFooter, PostUser } from './styled';
import ModeCommentIcon from "@material-ui/icons/ModeComment";
import ForwardIcon from '@material-ui/icons/Forward';

const PostPage = () => {
    useProtectedPage()
    const params = useParams()
    const post = useRequestData([], `${BASE_URL}/posts/${params.id}/comments`)

    const postComments = post.map((comments) => {
        return (
            <>

            <PostContainer>

                <PostTitle>
                    <PostUser>
                        <p>Comentado por: {comments.username}</p>
                        <p>Criado em: {comments.createdAt}</p>
                    </PostUser>
                </PostTitle>
                <PostBody>
                    {comments.body}
                </PostBody>
                <PostFooter>

                    <PostSide>
                        <ForwardIcon className="UpIcon" />
                        {comments.voteSum}{comments.userVote}
                        <ForwardIcon className="DownIcon" />
                    </PostSide>
                    <ModeCommentIcon className="CommentIcon" />
                    <p>{comments.commentCount} Responder</p>
                </PostFooter>
            </PostContainer> 
            </>
        )
    })

    return (
        <div>
            {postComments}
        </div>
    )
}

export default PostPage