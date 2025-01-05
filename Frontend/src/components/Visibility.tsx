import WidgetWrapper from './ui/WidgetWrapper';
import Headline from './ui/Headline';
import Forbes from './ui/svg/Forbes';
import CNN from './ui/svg/CNN';
import CBS from './ui/svg/CBS';
import Bloomberg from './ui/svg/Bloomberg';
import Reuters from './ui/svg/Reuters';
import AP from './ui/svg/AP';

interface MediaLogosProps {
  title: string;
  subtitle: string;
  tagline: string;
  id: string;
}

const MediaLogos: React.FC<MediaLogosProps> = ({
  title,
  subtitle,
  tagline,
  id
}) => {
  return (
    <WidgetWrapper containerClass={`max-w-5xl`} {...id ? { id } : {}}>
      <Headline title={title} subtitle={subtitle} tagline={tagline} />
      <div className="flex justify-center items-center gap-[3rem] my-[5rem] w-full flex-wrap">
        <div className="flex items-center justify-center md:w-[200px] md:max-w-[200px] w-[120px] max-w-[120px] h-20">
          <Forbes color='primary' size='152' />
        </div>
        <div className="flex items-center justify-center w-[200px] max-w-[200px] h-14">
          <CNN color='primary' size='90' />
        </div>
        <div className="flex items-center justify-center w-[200px] max-w-[200px] h-14">
          <CBS color='primary' size='182' />
        </div>
        <div className="flex items-center justify-center w-[200px] max-w-[200px] h-14">
          <Bloomberg color='primary' size='182' />
        </div>
        <div className="flex items-center justify-center w-[200px] max-w-[200px] h-14">
          <Reuters color='primary' size='182' />
        </div>
        <div className="flex items-center justify-center w-[200px] max-w-[200px] h-14">
          <AP color='primary' size='212' />
        </div>
      </div>
      <p className="text-center text-[12px] mt-[-1rem]">
        *Potential media coverage opportunities. Results may vary based on story quality and news relevance.
      </p>
    </WidgetWrapper>
  );
};

export default MediaLogos;
