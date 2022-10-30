import React from 'react';
import ContentLoader from 'react-content-loader';

const MyLoader = (props) => (
  <ContentLoader
    speed={2}
    width={476}
    height={465}
    viewBox="0 0 476 465"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <circle cx="120" cy="121" r="121" />
    <rect x="3" y="258" rx="0" ry="0" width="243" height="29" />
    <rect x="3" y="304" rx="0" ry="0" width="243" height="78" />
    <rect x="2" y="406" rx="0" ry="0" width="92" height="36" />
    <rect x="121" y="406" rx="0" ry="0" width="124" height="36" />
  </ContentLoader>
);

export default MyLoader;
