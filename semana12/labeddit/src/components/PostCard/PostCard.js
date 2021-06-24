import React from 'react';
import { PostContainer, PostContent, PostSide, PostTitle, PostBody, PostFooter, PostUser } from './styled';
import ModeCommentIcon from "@material-ui/icons/ModeComment";
import ForwardIcon from '@material-ui/icons/Forward';

const PostCard = (props) => {

    return (
        <PostContainer onClick={props.onClick}>
            <PostContent
                component={'text'}
                alt={props.title}
                height={'150px'}
                title={props.title}
                body={props.body}
                voteSum={props.voteSum}
                commentCount={props.commentCount}
                userVote={props.userVote}
                createdAt={props.createdAt}
                username={props.username}
            >
                <PostSide>
                    <ForwardIcon className="UpIcon" />
                    {props.voteSum}{props.userVote}
                    <ForwardIcon className="DownIcon" />
                </PostSide>
                <PostTitle>
                    <h3>{props.title.toUpperCase()}</h3>
                    <PostUser>
                    <p>Postado por: {props.username}</p>
                    <p>Criado em: {props.createdAt}</p>
                    </PostUser>
                </PostTitle>
                <PostBody>{props.body}</PostBody>
                <PostFooter>
                    <ModeCommentIcon className="CommentIcon" />
                    <p>{props.commentCount} Comentários</p>
                </PostFooter>
            </PostContent>

        </PostContainer>
    )
}

export default PostCard