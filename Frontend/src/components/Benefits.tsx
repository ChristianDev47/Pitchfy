import React from 'react';
import WidgetWrapper from './ui/WidgetWrapper';
import Timeline from './ui/Timeline.tsx';
import Headline from './ui/Headline.tsx';


interface Item {
  title?: string;
  description?: string;
  icon?: string
  classes?: {
    panel?: string;
    title?: string;
    description?: string;
    actionClass?: string;
  };

}


interface ClassesProps {
  container?: string;
  headline?: Record<string, string>;
  items?: Record<string, never>;
}

interface Props {
  title?: React.ReactNode;
  subtitle?: React.ReactNode;
  tagline?: React.ReactNode;
  items?: Item[]; 
  image?: string;
  isReversed?: boolean;
  id?: string;
  isDark?: boolean;
  classes?: ClassesProps;
  bg?: React.ReactNode ;
}

const Component: React.FC<Props> = ({
  title,
  subtitle,
  tagline,
  items = [],
  image,
  isReversed = false,
  id,
  isDark = false,
  classes = {},
}) => {
  return (
    <WidgetWrapper
      id={id}
      isDark={isDark}
      containerClass={`max-w-[75rem] ${classes.container ?? ''}`}
    >
      <div
        className={`flex flex-col gap-16 md:gap-12 ${
          isReversed ? 'lg:flex-row-reverse' : 'lg:flex-row'
        } ${image ? '' : ''}`}
      >
        <div
          className={`lg:py-4 lg:self-center ${
            image ? 'lg:basis-1/2' : 'w-full'
          }`}
        >
          <Headline
            title={title}
            subtitle={subtitle}
            tagline={tagline}
            classes={{
              container: 'text-left rtl:text-right',
              title: 'text-4xl',
              subtitle: 'text-[28px]',
              ...(classes.headline || {}),
            }}
          />
          <Timeline items={items} classes={classes.items || {}} />
        </div>

        {image && (
          <div className="relative gap-12 lg:basis-1/2 lg:mx-0 md:px-[12rem] px-[6rem]">
            <img
              src={`${image}`}
              className="inset-0 object-cover object-top w-full rounded-md lg:absolute lg:h-full "
              width={732}
              height={568}
            />
          </div>
        )}
      </div>
    </WidgetWrapper>
  );
};

export default Component;
