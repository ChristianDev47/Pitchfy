import React from 'react';

interface LogoProps {
  size?: string;
  color?: string;
}

const Check: React.FC<LogoProps> = ({ size = '960', color = 'currentColor' }) => (
<svg
  xmlns="http://www.w3.org/2000/svg"
  version="1.1"
  x="0"
  y="0"
  viewBox="0 0 2.54 2.54"
  fillRule="evenodd"
  width={size}
  height={size}
  style={{ color }}  
  ><g
    ><circle cx="1.27" cy="1.27" r="1.27" fill="#872B97" opacity="1" ></circle><path
      fill="#ffffff"
      d="M1.903 1.033a.134.134 0 0 1-.004.004l-.73.73a.126.126 0 0 1-.055.032.128.128 0 0 1-.126-.031l-.432-.432a.127.127 0 0 1 .18-.18l.342.343.726-.727c.05-.05.13-.049.18 0 .05.05.05.13 0 .18z"
      opacity="1"
      data-original="#ffffff"></path></g>
</svg>
);

export default Check;
