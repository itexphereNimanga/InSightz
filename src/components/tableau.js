import React, { useEffect, useRef } from "react";

function TableauReport({ url, options }) {
  const ref = useRef(null);

  useEffect(() => {
    if (ref.current) {
      const viz = new window.tableau.Viz(ref.current, url, options);
      return () => viz.dispose();
    }
  }, [url, options]);

  return <div ref={ref}></div>;
}
