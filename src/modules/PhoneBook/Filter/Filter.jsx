import { memo } from "react";
import PropTypes from "prop-types";

import s from "./Filter.module.css";

const Filter = ({ onChange }) => {
  return (
    <label className={s.label}>
      Find contacts by name
      <input
        onChange={onChange}
        className={s.input}
        type="text"
        name="filter"
        placeholder="Input name"
      />
    </label>
  );
};

Filter.propTypes = {
  onChange: PropTypes.func.isRequired,
};

export default memo(Filter);
