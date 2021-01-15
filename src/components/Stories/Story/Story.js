import React from 'react';
import styles from './Story.module.scss';

const Story = ({avatar, username}) => {
    return(
        <div className={styles.story}>
            <img src={avatar} alt={'Story'}/>
            <p>{username}</p>
        </div>
    );
}

export default Story;
