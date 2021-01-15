import React from 'react';
import NavBar from "../../components/NavBar/NavBar";
import Stories from "../../components/Stories/Stories";
import styles from './Home.module.scss';
import Posts from "../../components/Posts/Posts";

const Home = () => {
    return(
        <React.Fragment>
            <NavBar page={'home'} notification={'profile'}/>
            <div className={styles.content}>
                <div className={styles.mainContent}>
                    <Stories/>
                    <Posts/>
                </div>
                <div className={styles.sideContent}> </div>
            </div>
        </React.Fragment>
    );
}

export default Home;
