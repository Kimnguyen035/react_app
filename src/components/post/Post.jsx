import './post.css'

const Post = () => {

    return (
        <div className='post'>
            <div className='postWrapper'>
                <div className='postTop'>
                    <div className='postTopLeft'>
                        <img src='/assets/person/1.jpeg' alt='' className='postProfileImg' />
                        <div className='text'>
                            <span className='postUsername'>Hot girl one</span>
                            <span className='postDate'>5 mins ago</span>
                        </div>
                    </div>
                    <div className='postTopRight'>
                        <span class='material-icons'>more_vert</span>
                        <span class='material-icons'>close</span>
                    </div>
                </div>
                <div className='postCenter'>
                    <span className='postText'>This is my post!</span>
                    <img src='/assets/post/1.jpeg' alt='' className='postImg' />
                </div>
                <div className='postBottom'>
                    <div className='postBottomLeft'>
                        <img src='/assets/like.png' alt='' className='likeIcon' />
                        <img src='/assets/heart.png' alt='' className='likeIcon' />
                        <span className='postLikeCounter'>50 people like it</span>
                    </div>
                    <div className='postBottomRight'>
                        <span className='postCommentText'>30 comments</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Post
