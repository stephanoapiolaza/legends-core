import React, {useEffect, useState} from "react";

const useIsMobile = (breakpoint: number = 768): boolean => {
  const [width, setWidth] = useState<number>(window.innerWidth);

  function handleWindowSizeChange() {
      setWidth(window.innerWidth);
  }
  useEffect(() => {
      window.addEventListener('resize', handleWindowSizeChange);
      return () => {
          window.removeEventListener('resize', handleWindowSizeChange);
      }
  }, []);

  return width <= breakpoint;
}

export default useIsMobile;
