import React, { useRef } from "react";
import classNames from "classnames";
import styles from "./styles/MainHeader_styles.module.scss";

export default function AccountEditComponent({ visib }) {
  const handleButtonClick = () => {
    input_file.current.click();
  };

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
  
    try {
      const reader = new FileReader();
  
      reader.onload = (e) => {
        const fileContent = e.target.result;
        document.getElementById('img_profile').textContent = '';
        document.getElementById('img_profile').style.backgroundImage = `url("${fileContent}")`;
        
    };
  
      reader.readAsDataURL(selectedFile);
    } catch (e) {
      console.log(e);
    }
  };

  const input_file = useRef(null);
  return (
    <div
      className={classNames(
        styles.wrapper_account_edit,
        visib ? styles.visib : ""
      )}
    >
      <input
        type="file"
        style={{ display: "none" }}
        ref={input_file}
        onChange={handleFileChange}
        accept="image/*"
      />

      <button onClick={handleButtonClick}>Изменить фото</button>
    </div>
  );
}
