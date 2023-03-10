import "./sign-in.styles.scss";

import React, { useState } from "react";
import Input from "../../components/input/input.component";
import Btn from "../../components/btn/btn.component";
import { Link, withRouter } from "react-router-dom";
import { useForm } from "react-hook-form";
import { connect } from "react-redux";
import { signIn } from "../../redux/user/user.actions";
import { setFlash } from "../../redux/flash/flash.actions";
import { signInUser } from "../../utils/api";
import ScrollToTop from "../../components/scroll-to-top/scroll-to-top.component";

function SignInPage({ history, signIn, setFlash }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [isLoading, setIsLoading] = useState(false);

  const submitForm = async (data) => {
    try {
      setIsLoading(true);
      const { email: username, password } = data;
      const { data: user } = await signInUser({ username: username.toLowerCase(), password });
      setIsLoading(false);
      setFlash({
        type: "success",
        message: "You are signed in successfully",
      });
      signIn(user);
      history.push("/profile");
    } catch (err) {
      setIsLoading(false);
      console.log(err.message);
      setFlash({
        type: "error",
        message: "Invalid username or password",
      });
    }
  };
  return (
    <div className="signin-page">
      <ScrollToTop />
      <div className="container">
        <h1 className="signin-title">Log in</h1>
        <form
          noValidate
          name="sign-in-form"
          id="sign-in-form"
          onSubmit={handleSubmit(submitForm)}
        >
          <Input
            label="email"
            // type="email"
            // don't validate for email
            error={errors?.email?.message}
            register={{
              ...register("email", {
                required: "Email required",
                pattern: {
                  value:
                    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                  message: "not a valid email address",
                },
              }),
            }}
          />
          <Input
            label="password"
            type="password"
            error={errors?.password?.message}
            register={{
              ...register("password", {
                required: "password required",
                minLength: {
                  value: 8,
                  message: "length should be 8 to 16 characters",
                },
                maxLength: {
                  value: 16,
                  message: "length should be 8 to 16 characters",
                },
              }),
            }}
          />
        </form>
        <p className="forgot-password-text">forgot password?</p>
        <Btn form="sign-in-form" __isloading={isLoading}>
          Log in
        </Btn>
        <Link to="/signup">
          <p className="create-new-account-text">
            New Here? <span className="__link">Create New Account</span>
          </p>
        </Link>
      </div>
    </div>
  );
}
function mapDispatchToProps(dispatch) {
  return {
    signIn: (user) => dispatch(signIn(user)),
    setFlash: (flash) => dispatch(setFlash(flash)),
  };
}

export default connect(null, mapDispatchToProps)(withRouter(SignInPage));
