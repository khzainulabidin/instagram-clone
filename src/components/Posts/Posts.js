import React, {useState} from 'react';
import styles from './Posts.module.scss';
import Post from "../Post/Post";
import avatar from '../../assets/images/avatar3.jpg';
import avatar1 from '../../assets/images/avatar4.jpg';
import photo from '../../assets/images/post.jpg';
import photo1 from '../../assets/images/post1.jpg';

const Posts = () => {
    const [posts, setPosts] = useState([
        {
            avatar: avatar,
            username: 'khzainulabidin',
            photo: photo,
        },
        {
            avatar: avatar1,
            username: 'khzainulabidin',
            photo: photo1,
        },
    ]);

    return(
        <React.Fragment>
            {posts.map(post => <Post avatar={post.avatar} username={post.username} photo={post.photo}/>)}
        </React.Fragment>
    );
}

export default Posts;
