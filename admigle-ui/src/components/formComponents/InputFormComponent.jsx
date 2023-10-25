import React, { useState } from "react";
import style from "./styles/inputForm.module.scss";
import GoogleButton from "react-google-button";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import PreloaderComponent from "../loaderComponents/PreloaderComponent";

export default function InputFormComponent() {
  const onSubmit = (data) => {
    console.log(data);
  };

  const states = {
    text: "text",
    pass: "password",
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [type, setType] = useState(states.pass);

  const show_pass = (e) => {
    e.target.classList.toggle(style.show);
    if (type === states.text) {
      setType(states.pass);
    } else {
      setType(states.text);
    }
  };

  const pass_input = (type) => {
    return (
      <input
        type={type}
        placeholder="************"
        id="password_input"
        {...register("password", { required: true })}
      />
    );
  };

  const [loader, setLoaderState] = useState(false);

  const btn_click = () =>{
    setLoaderState(true);

setTimeout(() => {
  window.location.href = "/personal_account";
}, 5000);
  }

  return (
  
    <>{

      loader ? (<PreloaderComponent/>):(
        <div className={style.wrapper}>
      <form
        className={style.input_form}
        onSubmit={handleSubmit((data) => {
   
        })}
      >
        <div className={style.title_form}>
          Sing in to account
          <p className={style.sub__title_form}>
            Enter your email & password to login
          </p>
        </div>
        <div className={style.inputs_info}>
          <>
            <label htmlFor="email_input"> Email Addres</label>
            <input
              type="text"
              placeholder="test@gmail.com"
              id="email_input"
              {...register("email", {
                required: true,
                pattern:
                  /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/,
              })}
            />
            {errors.email && (
              <p className={style.error_mess}> Invalid email or emil empty!</p>
            )}
          </>

          <>
            <label htmlFor="password_input">Password</label>
            <div className={style.show_pass} onClick={show_pass}>
              show
            </div>
            {pass_input(type)}
            {errors.password && (
              <p className={style.error_mess}>Empty password input!</p>
            )}
          </>
        </div>
        <div className={style.forgot_pass_block}>
          <p>Forgot your password?</p>
        </div>

        <div className={style.sing_btn}>
          <Link to='' onClick={btn_click}>
            <input type="submit" value="Sing In"/>
          </Link>
        </div>

        <div className={style.diff_method_login}>
          <p>Or Sing In with</p>
          <GoogleButton style={{ width: "340px" }} />
        </div>
        <p className={style.create_account}>
          Don't have account?
          <span>
            <Link to="/regform ">Create Account</Link>
          </span>
        </p>
      </form>
    </div>
      )
    }
    
    </>

  );
}
