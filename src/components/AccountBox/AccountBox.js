import React from 'react';
import styles from './AccountBox.module.scss';
import Logo from "../Logo/Logo";

const AccountBox = ({children, otherOption}) => {
    return(
        <div className={styles.box}>
            <div className={styles.formContainer}>
                <div className={styles.logo}>
                    <Logo/>
                </div>
                {children}
            </div>
            <div className={styles.otherOption}>
                {otherOption}
            </div>
        </div>
    );
}

export default AccountBox;
