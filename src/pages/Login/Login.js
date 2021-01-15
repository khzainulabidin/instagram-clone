import React from 'react';
import AccountBox from "../../components/AccountBox/AccountBox";
import {Link} from "react-router-dom";

const Login = () => {
    return(
        <AccountBox otherOption={<p>Don't have an account? <Link to={'/signup'}>Sign Up</Link></p>}>
            <form>
                <input type={'text'} placeholder={'Phone number, username or email'}/>
                <input type={'password'} placeholder={'Password'}/>
                <button type={"submit"}>Log In</button>
            </form>
        </AccountBox>
    );
}

export default Login;
