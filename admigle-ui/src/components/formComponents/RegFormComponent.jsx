import React, { useState } from "react";
import style from "./styles/inputForm.module.scss";
import GoogleButton from "react-google-button";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

export default function RegFormComponent() {

  const states = {
    text: 'text', 
    pass:'password'
  }

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();


  const [type, setType] = useState(states.pass);

  const show_pass = (e)=>{
    e.target.classList.toggle(style.show)
    if(type === states.text){
      setType(states.pass);
    }
    else{
      setType(states.text);
    }
  }

  const pass_input = (type) =>{
    return(  <input
      type={type}
      placeholder="************"
      id="password_input"
      {...register("password", {required:true})}
    />)
  }

  return (
    <div className={style.wrapper}>
      <div className={style.back_login}>
        <Link to='/'>
        <button type="button">Back to Login</button>
        </Link>
      </div>
      <form
        className={style.input_form}
        onSubmit={handleSubmit((data) => {
          console.log(data);
        })}
      >
        <div className={style.title_form}>
          Create your account
          <p className={style.sub__title_form}>Enter your email & password</p>
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
            <div className={style.show_pass} onClick={show_pass}>show</div>
          {pass_input(type)}
          {errors.password && ( <p className={style.error_mess}>Empty password input!</p>)}
          </>
        </div>

        <div className={style.sing_btn}>
          <input type="submit" value="Create Account" />
        </div>

        <div className={style.diff_method_login}>
          <p>Or Creat account with</p>
          <GoogleButton style={{ width: "340px" }} value="reg" />
        </div>
      </form>
    </div>
  );
}
