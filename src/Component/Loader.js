import React from "react";
import ContentLoader from "react-content-loader";

export default function Loader() {
  return (
    <ContentLoader
      speed={2}
      width={400}
      height={103}
      viewBox="0 0 400 103"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
    >
      <rect x="23" y="11" rx="3" ry="3" width="88" height="10" />
      <rect x="23" y="36" rx="0" ry="0" width="70" height="40" />
      <rect x="97" y="36" rx="0" ry="0" width="70" height="40" />
      <rect x="250" y="36" rx="0" ry="0" width="70" height="40" />
      <rect x="173" y="36" rx="0" ry="0" width="70" height="40" />
    </ContentLoader>
  );
}
