import React from "react";
import style from "./styles/inputForm.module.scss";
import GoogleButton from 'react-google-button'

export default function InputFormComponent() {
  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className={style.wrapper}>

      <form className={style.input_form}>
        <div className={style.title_form}>
          Sing in to account
          <p className={style.sub__title_form}>
            Enter your email & password to login
          </p>
        </div>
        <div className={style.inputs_info}>
          <>
            <label for="email_input"> Email Addres</label>
            <input
              type="text"
              placeholder="test@gmail.com"
              id="email_input"
            ></input>
          </>

          <>
            <label for="password_input">Password</label>
            <div className={style.show_pass}>show</div>
            <input
              type="text"
              placeholder="test@gmail.com"
              id="password_input"
            ></input>
          </>
        </div>
        <div className={style.forgot_pass_block}>
          <p>Forgot your password?</p>
        </div>

        <div className={style.sing_btn}>
          <input type="submit" value="Sing In"/>
        </div>

        <div className={style.diff_method_login}>
        <p>Or Sing In with</p>
       <GoogleButton style={{width:'340px'}}/>
      </div>
      <p className={style.create_account}>Don't have account?<span>Create Account</span></p>
      </form>

    
    </div>
  );
}
