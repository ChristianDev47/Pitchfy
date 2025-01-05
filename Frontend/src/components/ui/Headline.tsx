import { twMerge } from 'tailwind-merge';

interface HeadlineProps {
  title?: React.ReactNode; 
  subtitle?: React.ReactNode;
  tagline?: React.ReactNode;
  classes?: Record<string, string>;
}

const Headline: React.FC<HeadlineProps> = ({
  title,
  subtitle,
  tagline,
  classes = {},
}) => {
  const {
    container: containerClass = 'max-w-4xl',
    title: titleClass = 'text-[2.5rem]',
    subtitle: subtitleClass = 'text-[17px]',
  } = classes;

  return (
    (title || subtitle || tagline) && (
      <div className={twMerge('mb-8 md:mx-auto md:mb-12 text-center flex justify-center items-center flex-col', containerClass)}>
        {tagline && (
          <span className="text-[22px] font-bold uppercase text-secondary" dangerouslySetInnerHTML={{ __html: tagline }} />
        )}
        {title && (
          <h2
            className={twMerge('font-bold leading-tighter tracking-tighter font-heading text-primary text-5xl', titleClass)}
            dangerouslySetInnerHTML={{ __html: title }}
          />
        )}
        {subtitle && (
          <p className={twMerge('mt-4 text-muted text-[25px]', subtitleClass)} dangerouslySetInnerHTML={{ __html: subtitle }} />
        )}
      </div>
    )
  );
};

export default Headline;
