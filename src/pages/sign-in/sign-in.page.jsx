import "./sign-in.styles.scss";

import React from "react";
import Input from "../../components/input/input.component";
import Btn from "../../components/btn/btn.component";
import { Link, withRouter } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { signIn } from "../../redux/user/user.actions";
import { setFlash } from "../../redux/flash/flash.actions";
import { signInUser } from "../../utils/api";

function SignInPage({ history }) {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const submitForm = async (data) => {
    try {
      setIsLoading(true);
      const { email: username, password } = data;
      const res = await axios.post(
        "https://mrphonex-api.onrender.com/api/user/signin",
        { username, password }
      );

      dispatch(signIn(res.data.user));
      dispatch(
        setFlash({
          type: "success",
          message: "You are signed in successfully",
        })
      );
      history.goBack();
    } catch (err) {
      console.log(err.message);
      setIsLoading(false);
      dispatch(
        setFlash({
          type: "error",
          message: "Invalid username or password",
        })
      );
    }
  };
  return (
    <div className="signin-page">
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
            type="email"
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
        <Btn form="sign-in-form">Log in</Btn>
        <p className="create-new-account-text">
          New Here?{" "}
          <span>
            <Link to="/signup">Create New Account</Link>
          </span>
        </p>
      </div>
    </div>
  );
}

export default withRouter(SignInPage);
