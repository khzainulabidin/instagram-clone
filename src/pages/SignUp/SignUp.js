import React from 'react';
import AccountBox from "../../components/AccountBox/AccountBox";
import {Link} from "react-router-dom";

const SignUp = () => {
    return(
        <AccountBox otherOption={<p>Have an account? <Link to={'/'}>Log in</Link></p>}>
            <form>
                <input type={'text'} placeholder={'Mobile number or email'}/>
                <input type={'text'} placeholder={'Full name'}/>
                <input type={'text'} placeholder={'Username'}/>
                <input type={'password'} placeholder={'Password'}/>
                <button type={"submit"}>Sign up</button>
                <h6>By signing up, you agree to our <Link to={'/terms'}>Terms</Link> , <Link to={'/dataPrivacy'}>Data Policy</Link> and <Link to={'/cookiesPolicy'}>Cookies Policy</Link>.</h6>
            </form>
        </AccountBox>
    );
}

export default SignUp;
