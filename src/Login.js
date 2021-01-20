import React, { useState } from 'react';
import './Login.css';
import { Link, useHistory } from 'react-router-dom';
import { auth } from './firebase';


function Login() {
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signIn = e => {
        e.preventDefault();

        auth
            .signInWithEmailAndPassword(email, password)
            .then((auth) => {
                if(auth) {
                    history.push('/');
                }
            })
            .catch(error => alert(error.message))

    }

    const register = e => {
        e.preventDefault();

        auth
            .createUserWithEmailAndPassword(email, password)
            .then((auth) => {
                if(auth) {
                    history.push('/');
                }
            })
            .catch(error => alert(error.message))
    }

    return (
        <div className="login">
            <Link to="/">
                <img className="login__logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png" alt=""/>
            </Link>

            <div className="login__container">
                <h1>サインイン</h1>
                <form>
                    <h5>Eメールアドレス</h5>
                    <input 
                    type="text"  
                    value={email} 
                    onChange={e => setEmail(e.target.value)} />

                    <h5>パスワード</h5>
                    <input 
                    type="password" 
                    value={password} 
                    onChange={e => setPassword(e.target.value)} />

                    <button 
                    className="login__signInButton" 
                    type="sumit" 
                    onClick={signIn} >サインイン</button>

                </form>
                <p>-----------------------------------------------------
                
                </p>

                <button className="login__registerButton" onClick={register} >新しいアカウントを作成する</button>
            </div>
        </div>
    )
}

export default Login;

