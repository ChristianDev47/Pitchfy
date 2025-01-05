import React from 'react';

export interface Props {
  isDark?: boolean;
  children?: React.ReactNode;
}

const Background: React.FC<Props> = ({ isDark = false, children }) => {
  return (
    <div
      className={`absolute inset-0 ${isDark ? '' : ''}`}
    >
      {children}
    </div>
  );
};

export default Background;
