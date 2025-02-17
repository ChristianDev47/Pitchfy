import React from 'react';

interface LogoProps {
  size?: string;
  color?: string; 
}

const Logo: React.FC<LogoProps> = ({ size = "32", color = "currentColor" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    version="1.1"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    width={size}
    height={size}
    viewBox="0 0 32 32"
    xmlSpace="preserve"
    className="mb-1"
    style={{ color }}  
  >
    <g>
      <path
        d="m25.53 24.239-5.47-5.479a.692.692 0 0 0-.45-.2l-2.63-.15a.672.672 0 0 0-.72.72l.15 2.63c.01.17.08.33.2.45l5.48 5.48zM27.08 25.79l-.49-.49-3.44 3.45.49.49c.48.48 1.1.71 1.72.71s1.24-.23 1.72-.71c.96-.96.96-2.5 0-3.45z"
        fill="currentColor" 
        opacity="1"
      ></path>
      <path
        d="M23 2.05H7.75A3.55 3.55 0 0 0 4.2 5.6v19.56a3.55 3.55 0 0 0 3.55 3.55h13.239l-5.44-5.439a2.196 2.196 0 0 1-.637-1.425l-.15-2.63a2.168 2.168 0 0 1 2.167-2.307l2.766.154a2.193 2.193 0 0 1 1.423.634l5.431 5.441V5.6A3.55 3.55 0 0 0 23 2.05zm-9.8 22.17H8.66a.9.9 0 0 1 0-1.8h4.54a.9.9 0 0 1 0 1.8zm-5.44-6.23a.9.9 0 0 1 .9-.9h4.18a.9.9 0 0 1 0 1.8H8.66a.9.9 0 0 1-.9-.9zm14.232-4.428H8.664a.9.9 0 0 1 0-1.8h13.328a.9.9 0 0 1 0 1.8zm0-5.331H8.664a.9.9 0 0 1 0-1.8h13.328a.9.9 0 0 1 0 1.8z"
        fill="currentColor"
        opacity="1"
      ></path>
    </g>
  </svg>
);

export default Logo;
