import React from "react";

const Lazy = ({children}: {children: React.ReactNode}) => (
  <React.Suspense fallback={<span>Cargando...</span>}>
    {children}
  </React.Suspense>
);

export default Lazy;
