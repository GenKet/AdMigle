import React, { useState } from "react";
import styles from "./ChartsComponents/styles/MainChartComponent_style.module.scss";
import { useParams } from "react-router-dom";
import { get_user_name_by_key } from "../../test_immitation/Entity_user";
import AddProjectsPopUpComponents from "./popup's components/AddProjectsPopUpComponents";

import { get_user_projects } from "../../test_immitation/test_database_users";
import ProjectComponent from "./ProjectComponent";
import NoProjectsComponent from "./NoProjectsComponent";

import { Projects_DB } from "../../test_immitation/test_database_users";

export default function ProjectsComponent() {
  const param = useParams();

  const [visib, setVisib] = useState(false);

  const open_pop_up = () => {
    setVisib(!visib);
  };

  const sort_date = (date) => {
   
};

  const projects = get_user_projects(param.key);

  return (
    <>
      <div className={styles.wrapper_charts}>
        <div className={styles.top_header_part}>
          <div className={styles.user}>
            {get_user_name_by_key(param.key)} project's
          </div>
          <div className={styles.add_project_btn}>
            <button type="button" onClick={open_pop_up} >
              Add Project+
            </button>
          </div>
        </div>

        <div className={styles.list_project}>
          {projects.length > 0 ? (
            <table>
              <thead>
                <tr>
                  <th style={{ width: "30%" }}>Project Name</th>
                  <th style={{ width: "30%" }}>Description</th>
                  <th
                    style={{ width: "25%", cursor: "pointer" }}
                    onClick={() => sort_date(Projects_DB)}
                  >
                    Date Created
                  </th>
                  <th style={{ width: "15%" }}>Type</th>
                </tr>
              </thead>
              <tbody>
                {projects.map((item) => (
                  <ProjectComponent key_project={item} key={item} />
                ))}
              </tbody>
            </table>
          ) : (
            <NoProjectsComponent />
          )}
        </div>
      </div>
      <AddProjectsPopUpComponents
        visib={visib}
        setVisib={setVisib}
        user_key={param.key}
      />
    </>
  );
}
