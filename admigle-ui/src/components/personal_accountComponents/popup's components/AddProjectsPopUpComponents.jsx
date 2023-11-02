import React from "react";
import styles from "./styles/AddUserPopUp_style.module.scss";
import classnames from "classnames";
import { useForm, Controller } from "react-hook-form";
import { create_project } from "../../../test_immitation/Entity_Project";
import generateRandomKey from "../../../test_immitation/test_methods.js";
import { add_project_db } from "../../../test_immitation/test_database_users";
import { useSelector } from "react-redux"; 

export default function AddProjectsPopUpComponents(props) {
  const { visib, setVisib, user_key } = props;
  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const connectionList = useSelector((state) => state.connection_list.value); 

  const onSubmit = async (data) => {
    const key_project = generateRandomKey(32);

    try {
      const project = create_project(
        data.client_name,
        data.client_website,
        new Date().toLocaleDateString("ru-RU", {
          weekday: "long",
          year: "2-digit",
          month: "2-digit",
          day: "2-digit",
        }),
        data.client_currency
      );

      const add_project_db_immit = (project_key, project, user_key) => {
        return {
          project_key: project_key,
          project: project,
          user_key: user_key,
        };
      };

      const response = await fetch("http://localhost:8000/add_project", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify(add_project_db_immit(key_project, project, user_key)),
      });

      if (response.status == 200 ) {
        add_project_db(
          key_project,
          create_project(
            data.client_name,
            data.client_website,
            new Date().toLocaleDateString("ru-RU", {
              weekday: "long",
              year: "2-digit",
              month: "2-digit",
              day: "2-digit",
            }),
            data.client_currency
          ),
          user_key
        );
      } else {
        console.error("Ошибка сервера:", response.status, response.statusText);
      }
    } catch (error) {
      console.error("Ошибка при выполнении запроса:", error);
      // add_project_db(
      //   key_project,
      //   create_project(
      //     data.client_name,
      //     data.client_website,
      //     new Date().toLocaleDateString("ru-RU", {
      //       weekday: "long",
      //       year: "2-digit",
      //       month: "2-digit",
      //       day: "2-digit",
      //     }),
      //     data.client_currency
      //   ),
      //   user_key
      // ); //этого здесь не должно быть, это для теста
    }

    reset();

    setVisib(!visib);
  };

  return (
    <div
      className={classnames(styles.wrapper_popup, { [styles.visib]: visib })}
    >
      <div
        className={styles.close_cross}
        onClick={() => {
          setVisib(!visib);
        }}
      >
        &#10006;
      </div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className={styles.form_create_user}
      >
        <h3>Project details</h3>
        <div className={styles._line}>
          <div className={styles.wrapper_input}>
            <label htmlFor="Project_name">Project Name</label>
            <Controller
              name="client_name"
              control={control}
              defaultValue=""
              rules={{ required: "Project name is required" }}
              render={({ field }) => <input {...field} id="client_name" />}
            />
            {errors.client_name && <p>{errors.client_name.message}</p>}
          </div>
          <div className={styles.wrapper_input}>
            <label htmlFor="client_website">Description</label>
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
            <label htmlFor="client_currency">Type Project</label>
            <Controller
              name="client_currency"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <select {...field} id="client_currency">
                  {connectionList.map((connection) => (
                    <option key={connection} value={connection}>
                      {connection}
                    </option>
                  ))}
                </select>
              )}
            />
          </div>
        </div>
        <button type="submit">Create Project</button>
      </form>
    </div>
  );
}
