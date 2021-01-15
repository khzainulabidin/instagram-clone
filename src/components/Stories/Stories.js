import React, {useState} from 'react';
import styles from './Stories.module.scss';
import Story from "./Story/Story";
import avatar from '../../assets/images/avatar.jpg';
import avatar1 from '../../assets/images/avatar1.jpg';
import avatar2 from '../../assets/images/avatar2.jpeg';
import avatar3 from '../../assets/images/avatar3.jpg';
import avatar4 from '../../assets/images/avatar4.jpg';
import avatar5 from '../../assets/images/avatar5.jpg';
import avatar6 from '../../assets/images/avatar6.jpg';
//import {GrFormNext, GrFormPrevious} from 'react-icons/all'

const Stories = () => {
    const [stories, setStories] = useState([
        {
            avatar: avatar,
            username: 'khzainulabidin',
        },
        {
            avatar: avatar1,
            username: 'khzainulabidin',
        },
        {
            avatar: avatar2,
            username: 'khzainulabidin',
        },
        {
            avatar: avatar3,
            username: 'khzainulabidin',
        },
        {
            avatar: avatar4,
            username: 'khzainulabidin',
        },
        {
            avatar: avatar5,
            username: 'khzainulabidin',
        },
        {
            avatar: avatar6,
            username: 'khzainulabidin',
        },
        {
            avatar: avatar3,
            username: 'khzainulabidin',
        },
        {
            avatar: avatar4,
            username: 'khzainulabidin',
        },
    ]);

    return(
        <div className={styles.container}>
            {/*<div className={styles.icons}>
                <div className={styles.previous}><GrFormPrevious/></div>
                <div className={styles.next}><GrFormNext/></div>
            </div>*/}
            {stories.map(story => <Story avatar={story.avatar} username={story.username}/>)}
        </div>
    );
}

export default Stories;
