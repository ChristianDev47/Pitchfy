import { FC } from 'react';
import WidgetWrapper from './ui/WidgetWrapper';
import Headline from './ui/Headline';

interface StatsProps {
  title?: string;
  subtitle?: string;
  tagline?: string;
  stats: Array<{ amount: string | number; title: string; }>;
  id: string;
  isDark?: boolean;
  classes?: {
    container?: string;
  };
  bg?: string;
}

const StatsWidget: FC<StatsProps> = ({
  title = '',
  subtitle = '',
  tagline = '',
  stats = [],
  id,
  isDark = false,
  classes = {},
  bg = '',
}) => {
  return (
    <WidgetWrapper id={id} isDark={isDark} containerClass={`max-w-[84rem] mx-auto ${classes?.container ?? ''}`} bg={bg}>
      <Headline title={title} subtitle={subtitle} tagline={tagline} />
      <div className="flex flex-wrap justify-center -m-4 text-center">
        {stats &&
          stats.map(({ amount, title }, index) => (
            <div
              key={index}
              className="p-4 md:w-1/4 sm:w-1/2 w-full min-w-[220px] text-center md:border-r md:last:border-none intersect-once motion-safe:opacity-0 motion-safe:intersect:animate-fade intersect-quarter"
            >
              {amount && (
                <div className="font-heading text-primary text-[4rem] font-bold">
                  {amount}
                </div>
              )}
              {title && (
                <div className="text-sm font-medium tracking-widest text-gray-800 uppercase ">
                  {title}
                </div>
              )}
            </div>
          ))}
      </div>
    </WidgetWrapper>
  );
};

export default StatsWidget;
