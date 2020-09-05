import React from "react";
import PropTypes from "prop-types";
import styles from "./Filter.module.css";

export default function Filter({ value, onChangeFilter }) {
  return (
    <label htmlFor="filter" className={styles.filter}>
      Find contacts by name
      <input
        type="search"
        name="filter"
        value={value}
        onChange={onChangeFilter}
      ></input>
    </label>
  );
}

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChangeFilter: PropTypes.func.isRequired,
};
