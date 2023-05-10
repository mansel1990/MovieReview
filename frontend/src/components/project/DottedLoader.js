import React, { useState, useEffect } from "react";

const DottedLoader = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => setLoading(false), 3000);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="loader" style={{ display: loading ? "flex" : "none" }}>
      <div className="loader-dot" />
      <div className="loader-dot" />
      <div className="loader-dot" />
      <div className="loader-dot" />
      <div className="loader-dot" />
      <div className="loader-dot" />
      <div className="loader-dot" />
      <div className="loader-dot" />
    </div>
  );
};

export default DottedLoader;
