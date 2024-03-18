import { useEffect } from "react";

export function useScrollReset() {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);
}
