import '../assets/styles/hero.css';
import StyleTitle from './ui/svg/StyleTitle.tsx';
import Style2Title from './ui/svg/Style2Title.tsx';
import ButtonHero from './ui/ButtonHero.tsx';

const Hero = () => {
  return (
    <section className="relative md:-mt-[76px] not-prose">
      <div className="relative max-w-6xl px-6 mx-auto md:px-28">
        <div className="pt-0 md:pt-[76px] pointer-events-none"></div>
        <div className="relative z-20 py-16 md:py-16">
          <div className="flex flex-col items-center justify-center max-w-5xl pb-10 mx-auto space-y-6 text-center md:pb-16">
              <h2 className="wdt-heading-title-wrapper wdt-heading-align-center wdt-heading-deco-wrapper motion-safe:opacity-0 motion-safe:intersect:animate-heroFade">
                    <div className="flex wdt-heading-title">
                      <StyleTitle className="wdt-shin size-10 text-primary" />
                      <span className="font-bold text-7xl">Pitchfy</span>
                      <Style2Title className="text-yellow-400 wdt-glit size-10" />
                    </div>
              </h2>
            <div className="flex flex-col items-center justify-center max-w-2xl">
               <p className="mb-6 text-[18px] mx-auto text-black font-normal text-muted intersect-once intersect-quarter motion-safe:opacity-0 motion-safe:intersect:animate-heroFade">
               Transform your stories into captivating articles and easily connect with journalists in just a few clicks. Share your content, increase your visibility, and reach the right audience quickly and effectively.
                </p>
              <div className="flex flex-col max-w-xs duration-500 ease-in-out sm:max-w-md flex-nowrap sm:flex-row intersect-once intersect-quarter motion-safe:opacity-0 motion-safe:intersect:animate-heroFade">
                <ButtonHero/>
              </div>
            </div>
          </div>
          <div className="relative z-20 flex flex-col items-center justify-center space-y-6 sm:space-x-10 sm:flex-row sm:space-y-0 motion-safe:opacity-0 motion-safe:intersect:animate-heroFade">
            <div className="flex flex-col p-5 bg-gray-50 shadow-[-10px_-10px_30px_4px_rgba(0,0,0,0.1),_10px_10px_30px_4px_rgba(135,43,151,0.15)] rounded-lg text-start max-w-[350px] space-y-2">
              <div className="flex items-center space-x-1">
                <div className="relative flex items-center justify-center w-10 h-6 bg-tertiary rounded-xl">
                  <span className="absolute text-[14px] font-semibold text-white">new</span>
                </div>
                <h3 className="text-[24px] font-semibold">1000+</h3>
              </div>
              <p className="text-[17px]">Journalists always connected to share stories, news, and unique collaborations with you.</p>
            </div>
            <div className="flex flex-col p-5 bg-gray-50 shadow-[-10px_-10px_30px_4px_rgba(0,0,0,0.1),_10px_10px_30px_4px_rgba(135,43,151,0.15)] rounded-lg text-start max-w-[350px] space-y-2">
              <div className="flex items-center space-x-1">
                <div className="relative flex items-center justify-center w-10 h-6 bg-tertiary rounded-xl">
                  <span className="absolute text-[14px] font-semibold text-white">new</span>
                </div>
                <h3 className="text-[24px] font-semibold">24/7</h3>
              </div>
              <p className="text-[17px]">PR Agent for You, always here to manage your brand and connect with your audience.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
