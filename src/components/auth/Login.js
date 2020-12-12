import React from 'react';

import { Button } from '@material-ui/core';

import { auth, provider } from '../../firebase';
import { actionTypes } from '../../context/reducer';
import { useStateValue } from '../../context/StateProvider';

import './login.css';

const Login = () => {
    const [state, dispatch] = useStateValue();

    const signIn = () => {
        auth.signInWithPopup(provider)
            .then(reslut => {
                dispatch({
                    type: actionTypes.SET_USER,
                    user: reslut.user
                })
            })
            .catch((err) => alert(err));
    }


    return (
        <div className="login">
            <div className="login__logo">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/800px-Facebook_f_logo_%282019%29.svg.png" alt="" />
                <img src="https://www.logo.wine/a/logo/Facebook/Facebook-Logo.wine.svg" alt="" />
            </div>
            <Button type="submit" onClick={signIn}>Sign In</Button>
        </div>
    )
}

export default Login
