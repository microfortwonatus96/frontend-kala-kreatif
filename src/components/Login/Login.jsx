import React, { useEffect, useState } from "react";
import axios from "axios";
import imgLogin from '../../assets/login.svg'
import './Login.css'


const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleChange = (value, cbSetState) => {
        // console.log(value);
        cbSetState(value);
    }

    useEffect(() => {
      sessionStorage.clear()
    },[])

    const onSubmit = (e) =>{
        e.preventDefault();

        console.log({username, password});
        axios({
            method: 'POST',
            url: `https://dummyjson.com/auth/login`,
            headers: { 'Content-Type': 'application/json' },
            data: {
                username: username,
                password: password,
              },
        })
        .then((res) => {
            console.log(res)
            alert("Login successful !!");
            const firstName = res.data.firstName;
            sessionStorage.setItem ('firstName', firstName);

            // const token = res.data.token;
            // localStorage.setItem("token", token);
  
            // const id = res.data.id;
            // localStorage.setItem("id", id);

            // const firstName = res.data.firstName;
            // localStorage.setItem("firstName", firstName);

            window.location.href = "/";
          })
          .catch((error) => {
            console.log(error);
            alert("Login Failed! Please, Check Email and Password !!");
          });
    }

  return (
    <>
      <div class={`container-form`}>
        <div class="forms-container">
          <div class="signin-signup">
            {/* sign-in  */}
            <form onSubmit={onSubmit} class="sign-in-form">
              <h2 class="title">Sign in</h2>
              <div class="input-field">
                <i class="fas fa-envelope"></i>
                <input
                  placeholder="Username" className="input-box" value={username} onChange={(e)=>{handleChange(e.target.value, setUsername)}} type="text"
                />
              </div>
              <div class="input-field">
                <i class="fas fa-lock"></i>
                <input
                  placeholder="Password"  className="input-box" value={password} onChange={(e)=>{handleChange(e.target.value, setPassword)}} type="password"
                />
              </div>
              <input type="submit" value="Login" class="button-login solid" />
              <p class="social-text">Or Sign in with social platforms</p>
              <div class="social-media">
                <div class="social-icon">
                  <i class="fab fa-twitter"></i>
                </div>
                <div class="social-icon">
                  <i class="fab fa-linkedin-in"></i>
                </div>
                <div className="social-icon">
                  <i class="fab fa-facebook-f"></i>
                </div>
                <div class="social-icon">
                  <i class="fab fa-google"></i>
                </div>
              </div>
            </form>
            {/* end-sign-in  */}

          </div>
        </div>

        <div class="panels-container">
          <div class="panel left-panel">
            <div class="content">
              <h3>New here ?</h3>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Debitis, ex ratione. Aliquid!
              </p>
            </div>
            <img src={imgLogin} class="image" alt="" />
          </div>
        
        </div>
      </div>
    </>
  );
};

export default Login;
