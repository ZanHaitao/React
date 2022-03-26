import { useState, useEffect } from "react";
import getStudentData from "../Student/getStudentData";

// eslint-disable-next-line import/no-anonymous-default-export
export default function (page, limit) {
  const [resp, setResp] = useState();
  useEffect(() => {
    (async function () {
      const resp = await getStudentData(page, limit);
      setResp(resp);
    })();
  }, [page, limit]);
  return resp;
}
