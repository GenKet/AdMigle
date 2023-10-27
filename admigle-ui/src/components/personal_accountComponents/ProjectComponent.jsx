import React from "react";
import { get_project_info } from "../../test_immitation/test_database_users";

export default function ProjectComponent({ key_project }) {
  const project_info = get_project_info(key_project);

  const style = {
    backgroundColor :'rgba(0, 255, 30, 0.1)',
    color : 'rgba(0, 0, 0, 0.8)',
    padding : '10px 20px',
    borderRadius : '20px',
    maxWidth:'fit-content'
  }
  return (
    <tr key={key_project}>
      <td>
        <p> {project_info.name}</p>
      </td>
      <td>
        <p>{project_info.description}</p>
      </td>
      <td>
        <p>{project_info.date_created}</p>
      </td>
      <td>
        <p  style={style}>{project_info.type}</p>
      </td>
    </tr>
  );
}
