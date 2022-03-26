import React, { useEffect, useState, useRef } from "react";

export default function Test() {
  const [n, setN] = useState(10);
  const refN = useRef(10);
  useEffect(() => {
    const timer = setInterval(() => {
      refN.current--;
      setN(refN.current);
      if (refN.current === 0) {
        clearInterval(timer);
      }
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return <h1>{n}</h1>;
}
