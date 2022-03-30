import { useEffect } from "react";
import reset from "./util/resetScroll";

export default function useScroll(pathname) {
  useEffect(() => {
    reset();
  }, [pathname]);
}
