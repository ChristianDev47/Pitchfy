import React from 'react';
import { twMerge } from 'tailwind-merge';

export interface Props {
  id?: string;
  isDark?: boolean;
  containerClass?: string;
  as?: keyof JSX.IntrinsicElements;
  bg?: string ;
  children?: React.ReactNode;
}

const Wrapper: React.FC<Props> = ({
  id,
  isDark = false,
  containerClass = '',
  as: WrapperTag = 'section',
  bg,
  children,
}) => {
  return (
    <WrapperTag className="relative not-prose scroll-mt-[72px]" {...(id ? { id } : {})}>
      <div className="absolute inset-0 pointer-events-none -z-[1]" aria-hidden="true">
        {bg &&
         <div className={`absolute inset-0 ${bg} mt-[-2rem]`}></div> 
        }
      </div>
      <div
        className={twMerge(
          'relative mx-auto max-w-7xl px-4 md:px-6 py-12 md:py-16 lg:py-20 text-default intersect-once intersect-quarter intercept-no-queue motion-safe:opacity-0 motion-safe:intersect:animate-fade',
          containerClass,
          isDark ? 'dark' : ''
        )}
      >
        {children}
      </div>
    </WrapperTag>
  );
};

export default Wrapper;
