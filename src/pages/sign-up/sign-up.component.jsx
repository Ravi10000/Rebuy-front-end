import "./sign-up.styles.scss";

import React, { useState } from "react";
import Input from "../../components/input/input.component";
import Btn from "../../components/btn/btn.component";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { signUpUser } from "../../utils/api";
import { setFlash } from "../../redux/flash/flash.actions";
import { connect } from "react-redux";
import { signIn } from "../../redux/user/user.actions";
import ScrollToTop from "../../components/scroll-to-top/scroll-to-top.component";
import { withRouter } from "react-router-dom";

function SignUpPage({ flash, signIn, history }) {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const password = watch("password");
  const [isLoading, setIsLoading] = useState(false);

  async function submitForm(data) {
    console.log(data);
    try {
      setIsLoading(true);
      const { name, email, password } = data;
      const res = await signUpUser({
        name,
        email,
        password,
        "phone number": data["phone number"],
      });
      setIsLoading(false);
      console.log({ data: res.data });
      // const res = await axios.post(
      //   "https://mrphonex-api.onrender.com/api/user/signup",
      //   {
      //     user: {
      //       username,
      //       password,
      //       "phone number": res.data["phone number"],
      //     },
      //   }
      // );
      if (res.data.error) {
        console.error(res.data.error.message);
        flash({
          type: "error",
          message: res.data.error.message,
        });
        // history.push("/signup");
        // setIsLoading(false);
        return;
      }
      signIn(res.data);
      history.push("/profile");
    } catch (err) {
      console.log(err.message);
    }
  }

  return (
    <div className="signup-page">
      <ScrollToTop />

      <div className="container">
        <h1 className="signup-title">Sign up</h1>
        <form
          noValidate
          name="sign-up-form"
          id="sign-up-form"
          action=""
          onSubmit={handleSubmit(submitForm)}
        >
          <Input
            label="name"
            error={errors?.name?.message}
            register={{
              ...register("name", {
                required: "Name required",
              }),
            }}
          />
          <Input
            label="email"
            // type="email"
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
            label="phone"
            type="number"
            error={errors?.["phone number"]?.message}
            register={{
              ...register("phone number", {
                required: "phone number required",
                pattern: {
                  value: /^[0-9]{10}$/,
                  message: "10 digit number only",
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
          <Input
            label="confirm password"
            type="password"
            error={errors?.["confirm password"]?.message}
            register={{
              ...register("confirm password", {
                required: "confirm password required",
                minLength: {
                  value: 8,
                  message: "length should be 8 to 16 characters",
                },
                maxLength: {
                  value: 16,
                  message: "length should be 8 to 16 characters",
                },
                pattern: {
                  value: RegExp(password),
                  message: "password does not match",
                },
              }),
            }}
          />
        </form>
        <Btn form="sign-up-form" __isloading={isLoading}>
          Sign up
        </Btn>
        <Link to="/signin">
          <p className="create-new-account-text">
            Already Have An Account? <span className="__link">Log in</span>
          </p>
        </Link>
      </div>
    </div>
  );
}

function mapDispatchToProps(dispatch) {
  return {
    signIn: (user) => dispatch(signIn(user)),
    flash: (flash) => dispatch(setFlash(flash)),
  };
}

export default connect(null, mapDispatchToProps)(withRouter(SignUpPage));
