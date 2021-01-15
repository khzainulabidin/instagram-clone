import React from 'react';
import styles from './NavBar.module.scss';
import Logo from "../Logo/Logo";
import {
    FiSearch,
    AiOutlineHome,
    AiFillHome,
    RiMessengerLine,
    RiMessengerFill,
    AiOutlineCompass,
    AiFillCompass,
    AiOutlineHeart,
    AiFillHeart
} from "react-icons/all";
import avatar from '../../assets/images/avatar.jpg';
import {Link} from "react-router-dom";

const NavBar = ({page, notification}) => {
    return(
        <nav className={styles.navbar}>
            <Logo size={'2rem'}/>
            <div className={styles.search}>
                <FiSearch className={styles.searchIcon}/>
                <input type={'text'} placeholder={'Search'}/>
            </div>
            <div className={styles.icons}>
                <span>
                    <Link to={'/'}>
                    {page === 'home' ? <AiFillHome/> : <AiOutlineHome/>}
                    </Link>
                    {notification === 'home' ? <div className={styles.notification}> </div> : null}
                </span>
                <span>
                    <Link to={'/'}>
                        {page === 'messages' ? <RiMessengerFill/> : <RiMessengerLine/>}
                    </Link>
                    {notification === 'messages' ? <div className={styles.notification}> </div> : null}
                </span>
                <span>
                    <Link to={'/explore'}>
                        {page === 'explore' ? <AiFillCompass/> : <AiOutlineCompass/>}
                    </Link>
                    {notification === 'explore' ? <div className={styles.notification}> </div> : null}
                </span>
                <span>
                    {page === 'activity' ? <AiFillHeart/> : <AiOutlineHeart/>}
                    {notification === 'activity' ? <div className={styles.notification}> </div> : null}
                </span>
                <span>
                    <Link to={'/profile'}>
                        <img src={avatar} className={styles.avatar} alt={'Avatar'}/>
                    </Link>
                    {notification === 'profile' ? <div className={styles.notification}> </div> : null}
                </span>
            </div>
        </nav>
    );
}

export default NavBar;
