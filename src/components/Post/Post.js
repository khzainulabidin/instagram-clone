import React from 'react';
import styles from './Post.module.scss';
import {FiMoreHorizontal, AiOutlineHeart, FaRegComment, FiSend, IoBookmarkOutline} from 'react-icons/all';

const Post = ({avatar, username, photo}) => {
    return(
        <div className={styles.post}>
            <div className={styles.header}>
                <div className={styles.userInfo}>
                    <img className={styles.avatar} src={avatar} alt={'Avatar'}/>
                    <p>{username}</p>
                </div>
                <span><FiMoreHorizontal/></span>
            </div>
            <img className={styles.postPhoto} src={photo} alt={'Post'}/>
            <div className={styles.icons}>
                <div>
                    <span><AiOutlineHeart/></span>
                    <span className={styles.smallIcon}><FaRegComment/></span>
                    <span className={styles.smallIcon}><FiSend/></span>
                </div>
                <span><IoBookmarkOutline/></span>
            </div>
        </div>
    );
}

export default Post;
