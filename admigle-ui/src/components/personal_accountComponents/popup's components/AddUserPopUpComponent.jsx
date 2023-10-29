import React from "react";
import styles from "./styles/AddUserPopUp_style.module.scss";
import classnames from "classnames";
import { useForm, Controller } from "react-hook-form";
import generateRandomKey from "../../../test_immitation/test_methods.js";
import { create_user } from "../../../test_immitation/Entity_user";

export default function AddUserPopUpComponent({ visib, state_fun }) {
  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = async (data, e) => {
    const key = generateRandomKey(32);
    // add_user_db(create_user(data.client_name, data.client_currency, key, data.client_website));

    e.preventDefault();
    console.log(data);
    try {
      const user = create_user(
        data.client_name,
        data.client_currency,
        key,
        data.client_website
      );
      const response = await fetch("http://localhost:5000/api/login/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify(user),
      });

      if (response.status == 200) {
        console.log("good");
      } else {
        console.error("Ошибка сервера:", response.status, response.statusText);
      }
    } catch (error) {
      console.error("Ошибка при выполнении запроса:", error);
    }

    reset();

    state_fun(!visib);
  };

  return (
    <div
      className={classnames(styles.wrapper_popup, { [styles.visib]: visib })}
    >
      <div
        className={styles.close_cross}
        onClick={() => {
          state_fun(!visib);
        }}
      >
        &#10006;
      </div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className={styles.form_create_user}
      >
        <h3>Client details</h3>
        <div className={styles._line}>
          <div className={styles.wrapper_input}>
            <label htmlFor="client_name">Client Name</label>
            <Controller
              name="client_name"
              control={control}
              defaultValue=""
              rules={{ required: "Client Name is required" }}
              render={({ field }) => <input {...field} id="client_name" />}
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
              render={({ field }) => <input {...field} id="client_website" />}
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
