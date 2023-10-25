import React from "react";
import styles from "./styles/AddUserPopUp_style.module.scss";
import classnames from "classnames";
import { useForm, Controller } from "react-hook-form";
import create_user from "../../../test_immitation/Entity_user";
import generateRandomKey from "../../../test_immitation/test_methods.js";
import { add_user_db } from "../../../test_immitation/test_database_users";

export default function AddUserPopUpComponent({ visib, state_fun }) {
  const {
    control,
    handleSubmit,
    formState: { errors },
    reset, // Добавляем функцию reset
  } = useForm();

  const onSubmit = (data) => {
    const key = generateRandomKey(32);
    add_user_db(create_user(data.client_name, data.client_currency, key));

    // Сбрасываем значения полей
    reset();
    
    state_fun(!visib);
  };

  return (
    <div className={classnames(styles.wrapper_popup, { [styles.visib]: visib })}>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.form_create_user}>
        <h3>Client details</h3>
        <div className={styles._line}>
          <div className={styles.wrapper_input}>
            <label htmlFor="client_name">Client Name</label>
            <Controller
              name="client_name"
              control={control}
              defaultValue=""
              rules={{ required: "Client Name is required" }}
              render={({ field }) => (
                <input {...field} id="client_name" />
              )}
            />
            {errors.client_name && <p>{errors.client_name.message}</p>}
          </div>
          <div className={styles.wrapper_input}>
            <label htmlFor="client_website">Client Website</label>
            <Controller
              name="client_website"
              control={control}
              defaultValue=""
              rules={{ required: "Client Website is required" }}
              render={({ field }) => (
                <input {...field} id="client_website" />
              )}
            />
            {errors.client_website && <p>{errors.client_website.message}</p>}
          </div>
        </div>
        <div className={styles._line}>
          <div className={styles.wrapper_input}>
            <label htmlFor="client_currency">Select Currency</label>
            <Controller
              name="client_currency"
              control={control}
              defaultValue="USA"
              render={({ field }) => (
                <select {...field} id="client_currency">
                  <option value="USA">USA</option>
                </select>
              )}
            />
          </div>
          <div className={styles.wrapper_input}>
            <label htmlFor="client_timezone">Client Timezone</label>
            <select id="client_timezone" name="client_timezone">
              <option value="GMT+">GMT+</option>
            </select>
          </div>
        </div>
        <button type="submit">Add Client</button>
      </form>
    </div>
  );
}
