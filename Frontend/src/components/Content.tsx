import { ReactNode } from 'react';
import { Content as Props } from '~/types';
import Headline from './ui/Headline';
import WidgetWrapper from './ui/WidgetWrapper';
import Check from './ui/svg/Check';

interface Item {
  title?: string;
  description?: string;
  classes?: {
    panel?: string;
    title?: string;
    description?: string;
    actionClass?: string;
  };

}

interface WidgetProps extends Props {
  title?: string;
  subtitle?: string;
  tagline?: string;
  title2?: string;
  description?: string;
  items?: Item[];
  image?: string;
  isReversed?: boolean;
  isAfterContent?: boolean;
  id?: string;
  isDark?: boolean;
  classes?: { container?: string };
  bg?: string;
  children?: ReactNode; 
}

const WidgetComponent: React.FC<WidgetProps> = ({
  title,
  subtitle,
  tagline,
  title2,
  description,
  items = [],
  image,
  isReversed = false,
  isAfterContent = false,
  id,
  isDark = false,
  classes = {},
  bg
}) => {
  return (
    <WidgetWrapper
      id={id}
      isDark={isDark}
      containerClass={`max-w-7xl mx-auto ${isAfterContent ? 'pt-0 md:pt-0 lg:pt-0' : ''} ${classes?.container ?? ''}`}
      bg={bg}
    >
      <Headline
        title={title}
        subtitle={subtitle}
        tagline={tagline}
        classes={{
          container: 'max-w-xl sm:mx-auto lg:max-w-2xl',
          title: 'text-4xl font-bold tracking-tighter mb-4 font-heading mx-[2rem]',
          subtitle: 'max-w-3xl mx-auto sm:text-center text-xl text-muted ',
        }}
      />
      <div className="p-4 mx-auto max-w-7xl md:px-8">
        <div className={`md:flex ${isReversed ? 'md:flex-row-reverse' : ''} md:gap-16`}>
          <div className="self-center md:basis-1/2">
          <div slot="content" className='mb-3'>
            <h3 className="mb-2 text-[25px] font-bold tracking-tight">{title2}</h3>
            <p className="text-[16px]">{description}</p>
          </div>
            <div aria-hidden="true" className="mt-5 md:mt-0 md:basis-1/2">
              {items && (
                <div className={`flex flex-col space-y-2`}>
                  {items.map(({ title, description, classes: itemClasses = {} }, index) => (
                    <div key={index} className="intersect-once motion-safe:opacity-0 motion-safe:intersect:animate-fade">
                      <div className={`flex flex-row  ${itemClasses?.panel}`}>
                        <div className="flex justify-center mt-2 mr-2">
                          <Check size='18' color='secondary' />
                        </div>
                        <div className="mt-0.5">
                          {title && <h3 className={`text-[20px] font-bold ${itemClasses?.title}`}>{title}</h3>}
                          {description && (
                            <p
                              className={` w-full ${title ? 'mt-2' : ''} text-[15px] ${itemClasses?.description}`}
                              dangerouslySetInnerHTML={{ __html: description }}
                            />
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          <div aria-hidden="true" className="mt-10 md:mt-0 md:basis-1/2">
            <div className="relative max-w-4xl m-auto">
              <img
                src={`${image}`}
                className="w-full mx-auto rounded-lg shadow-lg"
                width={500}
                height={500}
                sizes="(max-width: 768px) 100vw, 432px"
              />
            </div>
          </div>
        </div>
      </div>
    </WidgetWrapper>
  );
};

export default WidgetComponent;
