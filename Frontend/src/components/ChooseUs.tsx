import React from 'react';
import WidgetWrapper from './ui/WidgetWrapper';
import Headline from './ui/Headline';

interface Props {
  title?: string;
  subtitle?: string;
  tagline?: string;
  items?: {
    icon?: string;
    title: string;
    color?: string;
    points?: string[];
  }[];
  columns?: number;
  defaultIcon?: string;
  id?: string;
  isDark?: boolean;
  classes?: Record<string, string>;
  bg?: string;
}


const iconMap: Record<string, JSX.Element> = {
  'tabler:star': (
    <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="2.2em" height="2.2em" x="0" y="0" viewBox="0 0 511.987 511" className=""><g><path d="M114.594 491.14c-5.61 0-11.18-1.75-15.934-5.187a27.223 27.223 0 0 1-10.582-28.094l32.938-145.09L9.312 214.81a27.188 27.188 0 0 1-7.976-28.907 27.208 27.208 0 0 1 23.402-18.71l147.797-13.419L230.97 17.027C235.277 6.98 245.089.492 255.992.492s20.715 6.488 25.024 16.512l58.433 136.77 147.774 13.417c10.882.98 20.054 8.344 23.425 18.711 3.372 10.368.254 21.739-7.957 28.907L390.988 312.75l32.938 145.086c2.414 10.668-1.727 21.7-10.578 28.098-8.832 6.398-20.61 6.89-29.91 1.3l-127.446-76.16-127.445 76.203c-4.309 2.559-9.11 3.864-13.953 3.864zm141.398-112.874c4.844 0 9.64 1.3 13.953 3.859l120.278 71.938-31.086-136.942a27.21 27.21 0 0 1 8.62-26.516l105.473-92.5-139.543-12.671a27.18 27.18 0 0 1-22.613-16.493L255.992 39.895 200.844 168.96c-3.883 9.195-12.524 15.512-22.547 16.43L38.734 198.062l105.47 92.5c7.554 6.614 10.858 16.77 8.62 26.54l-31.062 136.937 120.277-71.914c4.309-2.559 9.11-3.86 13.953-3.86zm-84.586-221.848s0 .023-.023.043zm169.13-.063.023.043c0-.023 0-.023-.024-.043zm0 0" fill="#ffffff" opacity="1" data-original="#000000"></path></g></svg>
  ),
  'tabler:heart-handshake': (
    <svg className="p-2 text-white rounded-full size-14" height="1em" width="1em" data-icon="tabler:heart-handshake"><symbol id="ai:tabler:heart-handshake" viewBox="0 0 24 24"><g strokeLinecap="round" strokeLinejoin="round" fill="none" stroke="currentColor" strokeWidth="2"><path d="M19.5 12.572L12 20l-7.5-7.428A5 5 0 1 1 12 6.006a5 5 0 1 1 7.5 6.572"></path><path d="M12 6L8.707 9.293a1 1 0 0 0 0 1.414l.543.543c.69.69 1.81.69 2.5 0l1-1a3.18 3.18 0 0 1 4.5 0l2.25 2.25m-7 3l2 2M15 13l2 2"></path></g></symbol><use href="#ai:tabler:heart-handshake"></use></svg>
  ),
  'tabler:coin': (
    <svg className="p-2 text-white rounded-full size-14" height="1em" width="1em" data-icon="tabler:coin"><symbol id="ai:tabler:coin" viewBox="0 0 24 24"><g strokeLinecap="round" strokeLinejoin="round" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 12a9 9 0 1 0 18 0a9 9 0 1 0-18 0"></path><path d="M14.8 9A2 2 0 0 0 13 8h-2a2 2 0 1 0 0 4h2a2 2 0 1 1 0 4h-2a2 2 0 0 1-1.8-1M12 7v10"></path></g></symbol><use href="#ai:tabler:coin"></use></svg>
  ),
};

const Component: React.FC<Props> = ({
  title,
  subtitle,
  tagline,
  items = [],
  id,
  isDark = false,
  classes = {},
  bg,
}) => {
  return (
    <WidgetWrapper
      id={id}
      isDark={isDark}
      containerClass={`max-w-7xl mx-auto ${classes?.container ?? ''}`}
      bg={bg}
    >
      <Headline
        title={title}
        subtitle={subtitle}
        tagline={tagline}
      />

      <div className="flex justify-center items-start w-full px-[5rem] gap-8 flex-wrap">
        {items.map((item, index) => (
          <div
            key={index}
            className="flex flex-col min-w-[324px] max-w-[324px] min-h-[385px] max-h-[385px] items-center justify-start col-span-1 px-6 pt-6 bg-white rounded-lg shadow-lg"
          >
            <div
              className={`rounded-full ${item.color} size-16 flex justify-center items-center`}
            >
              {item.icon && iconMap[item.icon] || (
                  <div className="w-10 h-10 p-2 border-2 rounded-full">
                    Icono no encontrado
                  </div>
                )}
            </div>
            <h1 className="mt-2 text-2xl font-semibold text-center">
              {item.title}
            </h1>
            <ul className="mt-10 mb-10 space-y-3">
              {item.points?.map((point, pointIndex) => (
                <div
                  key={pointIndex}
                  className="flex items-start space-x-2"
                >
                  <div className='mt-1 mr-1'>
                    <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="15" height="15" x="0" y="0" viewBox="0 0 512 512">
                      <g>
                        <path
                          d="M256 0C114.837 0 0 114.837 0 256s114.837 256 256 256 256-114.837 256-256S397.163 0 256 0zm79.083 271.083L228.416 377.749A21.275 21.275 0 0 1 213.333 384a21.277 21.277 0 0 1-15.083-6.251c-8.341-8.341-8.341-21.824 0-30.165L289.835 256l-91.584-91.584c-8.341-8.341-8.341-21.824 0-30.165s21.824-8.341 30.165 0l106.667 106.667c8.341 8.341 8.341 21.823 0 30.165z"
                          fill="currentColor"
                          opacity="1"
                          data-original="currentColor">
                        </path>
                      </g>
                    </svg>
                  </div>
                  <li className="text-[14px]">{point}</li>
                </div>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </WidgetWrapper>
  );
};

export default Component;
