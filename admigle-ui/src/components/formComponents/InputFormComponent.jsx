import React from "react";
import { useForm } from "react-hook-form";
import style from "./styles/inputForm.module.scss";
import GoogleButton from 'react-google-button'

export default function InputFormComponent() {
  const {
    // register,
    handleSubmit,
    // watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  const google_inlut = (e)=>{
    console.log(e.target)
  }

  return (
    <div className={style.wrapper}>

      <div className={style.title_page}>
        <h2>Welcome to AdMigle!</h2>
      </div>
  
    <form className={style.form}>

    <label>
      Email Address
      <input placeholder="testemail@gmail.com"/>
    </label>

    <label>
      Your password
      <input placeholder="testemail@gmail.com"/>
    </label>

    <button type="submit" className={style.sing_in_btn}>Sing In</button>


    <div className={style.google_input}>
     <GoogleButton style={{width:'17vw'}} onClick={google_inlut}></GoogleButton>
    </div>
    </form>

   

    </div>
  );
}
