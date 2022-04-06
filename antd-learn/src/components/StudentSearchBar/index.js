import React, { useState, useEffect, useMemo } from "react";
import PropTypes from "prop-types";
import styles from "./index.css";

export default function StudentSearchBar(props) {
  const [key, setKey] = useState("");
  const [sex, setSex] = useState(-1);
  useEffect(() => {
    setKey(props.search);
    setSex(props.sex);
  }, [props]);

  const handleKeyChange = useMemo(() => {
    return (e) => {
      setKey(e.target.value);
    };
  }, []);

  const handleSexChange = useMemo(() => {
    return (e) => {
      setSex(+e.target.value);
    };
  }, []);

  return (
    <div className={styles.search}>
      <label>
        关键词:
        <input type="text" value={key} onChange={handleKeyChange} />
      </label>
      <label className={styles.flag}>性别:</label>
      <label>
        <input
          checked={sex === -1}
          type="radio"
          value={-1}
          name="sex"
          onChange={handleSexChange}
        />
        全部
      </label>
      <label>
        <input
          checked={sex === 0}
          type="radio"
          value={0}
          name="sex"
          onChange={handleSexChange}
        />
        男
      </label>
      <label>
        <input
          checked={sex === 1}
          type="radio"
          value={1}
          name="sex"
          onChange={handleSexChange}
        />
        女
      </label>
      <button
        onClick={() => {
          props.onSearch({
            key,
            sex,
          });
        }}
      >
        查询
      </button>
    </div>
  );
}

StudentSearchBar.propTypes = {
  search: PropTypes.string,
  sex: PropTypes.number,
  onSearch: PropTypes.func,
};