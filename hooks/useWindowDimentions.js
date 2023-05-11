// "use client"; // this is a client component 👈🏽

import { useEffect, useState } from "react";

export function useWindowDimention() {
  const [innerWidth, setWidth] = useState("");
  const [innerHeight, setHeight] = useState("");

  useEffect(() => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  }, []);
  return { innerWidth, innerHeight };
}
