import React from "react";

const Login: React.FC = () => {
  return (
    <>
      <link href="https://unpkg.com/boxicons@2.0.7/css/boxicons.min.css" rel="stylesheet" />
      <div className="login">
        <div className="login__content">
          <div className="login__img">
            <img src="https://image.freepik.com/free-vector/code-typing-concept-illustration_114360-3581.jpg" alt="user login" />
          </div>
          <div className="login__forms">
            <form action="" className="login__register" id="login-in">
              <h1 className="login__title">Sign In</h1>
              <div className="login__box">
                <i className="bx bx-user login__icon"></i>
                <input type="text" placeholder="Username" className="login__input" />
              </div>
              <div className="login__box">
                <i className="bx bx-lock login__icon"></i>
                <input type="text" placeholder="Password" className="login__input" />
              </div>
              <a href="#" className="login__forgot">Forgot Password? </a>
              <a href="#" className="login__button">Sign In</a>
              <div>
                <span className="login__account login__account--account">Don't Have an Account?</span>
                <span className="login__signin login__signin--signup" id="sign-up">Sign Up</span>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
