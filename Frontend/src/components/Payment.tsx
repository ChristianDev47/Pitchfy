import React, { ReactNode } from 'react';
import WidgetWrapper from './ui/WidgetWrapper';
import Headline from './ui/Headline';
import ButtonPay from './payment/ButtonPay';
import Check from './ui/svg/Check';

interface Props {
  title?: string;
  subtitle?: string;
  tagline?: string;
  items?: Array<{
    title: string;
    description?: string;
    value: string;
    time: string;
    points?: string[];
    plan: string;
  }>;
  columns?: number;
  defaultIcon?: React.ReactNode;
  id?: string;
  isDark?: boolean;
  classes?: {
    container?: string;
    headline?: Record<string, string>;
    items?: Record<string, string>;
  };
  children?: ReactNode; 
  
}

const Payment: React.FC<Props> = ({
  title,
  subtitle,
  tagline,
  items = [],
  id,
  isDark = false,
  classes = {},
}) => {
  return (
    <WidgetWrapper id={id} isDark={isDark} containerClass={`max-w-7xl mx-auto ${classes?.container ?? ''}`}>
      <Headline title={title} subtitle={subtitle} tagline={tagline} classes={classes?.headline ?? {}} />
      <div className="relative flex items-start justify-center w-full gap-8 wdt-heading-title-wrapper wdt-heading-align-center wdt-heading-deco-wrapper motion-safe:opacity-0 motion-safe:intersect:animate-fade">
        {items &&
          items.map((item, index) => (
            <div
              key={index}
              className="flex flex-col justify-between w-full max-w-sm px-5 py-8 text-center bg-white border border-gray-200 rounded-lg shadow backdrop-blur"
            >
              <div className="absolute right-[-5px] 2xl:right-[-8px] rtl:right-auto rtl:left-[-8px] rtl:2xl:left-[-10px] top-[-5px] 2xl:top-[-10px] z-[1] h-[100px] w-[100px] overflow-hidden text-right">
                <span className="absolute top-[19px] right-[-21px] rtl:right-auto rtl:left-[-21px] block w-full rotate-45 rtl:-rotate-45 bg-green-700 text-center text-[10px] font-bold uppercase leading-5 text-white shadow-[0_3px_10px_-5px_rgba(0,0,0,0.3)] before:absolute before:left-0 before:top-full before:z-[-1] before:border-[3px] before:border-r-transparent before:border-b-transparent before:border-l-green-800 before:border-t-green-800 before:content-[''] after:absolute after:right-0 after:top-full after:z-[-1] after:border-[3px] after:border-l-transparent after:border-b-transparent after:border-r-green-800 after:border-t-green-800 after:content-['']">
                  New
                </span>
              </div>
              <div className="px-2 py-0">
                <h3 className="mb-1 text-[20px] font-semibold leading-6 tracking-wider text-center uppercase">
                  {item.title}
                </h3>
                {subtitle && <p className="font-light text-gray-600 text-[18px]">{item.description}</p>}
                <div className="my-2">
                  <div className="flex items-center justify-center mb-1 text-center">
                    <span className="text-[1.5rem]">$</span>
                    <span className="text-[2.5rem] font-extrabold">{item.value}</span>
                  </div>
                  <span className="text-base leading-6 text-gray-600 lowercase">{item.time}</span>
                </div>
                {item.points && (
                  <ul className="my-8 space-y-2 text-left">
                    {item.points.map((point, idx) => (
                      <li key={idx} className="mb-1.5 flex items-start space-x-3 leading-7">
                        <div className="mt-1.5 rounded-full bg-primary">
                          <Check size='10' color='secondary' />
                        </div>
                        <span className="text-[15px]">{point}</span>
                      </li>
                    ))}
                  </ul>
                )}
                <div>
                  <ButtonPay item={item.plan} />
                </div>
              </div>
            </div>
          ))}
      </div>
    </WidgetWrapper>
  );
};

export default Payment;
