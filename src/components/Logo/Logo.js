import React from 'react';
import styles  from './Logo.module.scss';

const Logo = ({size}) => {
    return(
        <p className={styles.logo} style={{fontSize: size ? size : '3.2rem'}}>Instagram</p>
    );
}

export default Logo;
