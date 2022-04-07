import React, { useState, useEffect, useMemo } from "react";
import PropTypes from "prop-types";
import { Row, Col, Input, Radio, Button } from 'antd'


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
      setSex(e.target.value);
    };
  }, []);

  return (
    <Row gutter={20} style={{
      marginBottom: 20
    }}>
      <Col>
        <Input
          addonBefore="关键词："
          placeholder="请输入关键词"
          allowClear
          onChange={handleKeyChange}
          value={key}
          style={{ width: 304 }}
        />
      </Col>

      <Col>
        <Radio.Group onChange={handleSexChange} value={sex}>
          <Radio.Button value={-1}>不限</Radio.Button>
          <Radio.Button value={0}>男</Radio.Button>
          <Radio.Button value={1}>女</Radio.Button>
        </Radio.Group>
      </Col>
      <Col>
        <Button type="primary" onClick={() => {
          props.onSearch({
            key,
            sex,
          });
        }}>查询</Button>
      </Col>
    </Row>
  );
}

StudentSearchBar.propTypes = {
  search: PropTypes.string,
  sex: PropTypes.number,
  onSearch: PropTypes.func,
};