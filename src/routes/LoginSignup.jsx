import React from "react";
import { useState } from "react";

const LoginSignup = () => {
  const [toggle, setToggle] = useState(true)
  return (
    <div className={toggle?"formContainer sign-in":"formContainer sign-up"}>
      <div className="row">
        {/* signup Here */}
        <div className="half-wrapper align-items-center flex-col sign-up">
          <div className="form-wrapper align-items-center">
            <div className="form sign-up">
              <div className="contentInput">
                <div className="boxInput mg-y-sm">
                  <input
                    type="text"
                    className="itemInput"
                    placeholder="Username"
                  />
                </div>
                <div className="boxInput mg-y-sm">
                  <input
                    type="email"
                    id="email"
                    className="itemInput"
                    placeholder="Email"
                  />
                </div>
                <div className="boxInput mg-b-sm">
                  <input
                    type="password"
                    className="itemInput"
                    placeholder="Password"
                  />
                </div>
                <div className="boxInput mg-b-sm">
                  <input
                    type="password"
                    className="itemInput"
                    placeholder="Confirm Password"
                  />
                </div>
              </div>
              <button className="btn btn-primary">Sign up</button>
              <div className="mg-md">
                Already have an account?
                <div className="pointer prim-color" onClick={() => {
                  setToggle(true)}}>Sign in here</div>
              </div>
            </div>
          </div>
        </div>
        {/* sign in here */}
        <div className="half-wrapper align-items-center flex-col sign-in">
          <div className="form-wrapper align-items-center">
            <div className="form sign-in">
              <div className="contentInput">
                <div className="boxInput mg-y-sm">
                  <input
                    type="text"
                    className="itemInput"
                    placeholder="Username"
                  />
                </div>
                <div className="boxInput mg-b-sm">
                  <input
                    type="password"
                    className="itemInput"
                    placeholder="Password"
                  />
                </div>
              </div>
              <button className="btn btn-primary">Sign in</button>
              <div className="mg-md">Forgot password?</div>
              <div className="mg-md">
                Don't have an account?
                <div className="pointer prim-color" onClick={() => {
                    setToggle(false)
                    
    }}>Sign up here</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* welcome msgs */}
      <div className="row content-row">
        {/* SIGN IN */}
        <div className="half-wrapper align-items-center flex-col">
          <div className="offPageContent sign-in">
            <h1>Welcome back!</h1>
          </div>
          <div className="img sign-in">
            <img src="https://res.cloudinary.com/ddqawrqs1/image/upload/v1649348706/purritos/kyotHugCat_dldvh4.jpg" alt="anotherCat" />
          </div>
        </div>
        {/* Sign up */}
        <div className="half-wrapper align-items-center flex-col">
          <div className="img sign-up">
            <img src="https://res.cloudinary.com/ddqawrqs1/image/upload/v1649348704/purritos/kyotComfy_pzgcmt.jpg" alt="catpic" />
          </div>
          <div className="offPageContent sign-up">
            <h1>Join our family!</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginSignup;
