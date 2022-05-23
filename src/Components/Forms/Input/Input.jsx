import React from "react";
import styles from "./Input.module.css";

function Input({ label, onBlur, type, name, onChange, error, value }) {
  return (
    <div className={styles.wrapper}>
      <label htmlFor={name}>{label}</label>
      <input
        id={name}
        name={name}
        className={styles.input}
        type={type}
        onChange={onChange}
        onBlur={onBlur}
        value={value}
      />
      {error && <p className={styles.error}>{error}</p>}
    </div>
  );
}

export default Input;
