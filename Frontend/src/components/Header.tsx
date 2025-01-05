import Logo from './ui/svg/Logo';
import ToggleMenu from './common/ToggleMenu';
import ButtonComponent from './ui/ButtonComponent';
import UserBotton from './user/UserBotton';
import type { CallToAction } from '~/types';

interface Link {
  text?: string;
  href?: string;
  ariaLabel?: string;
  icon?: string;
}

interface MenuLink extends Link {
  links?: Array<MenuLink>;
}

interface Props {
  id?: string;
  links?: Array<MenuLink>;
  actions?: Array<CallToAction>;
  isSticky?: boolean;
  isDark?: boolean;
  isFullWidth?: boolean;
  showToggleTheme?: boolean;
  showRssFeed?: boolean;
  position?: 'left' | 'center' | 'right';
}

const Header: React.FC<Props> = ({
  id = 'header',
  isSticky = false,
  isFullWidth = false,
  position = 'center',
}) => {

  return (
    <header
      className={[
        isSticky ? 'sticky' : 'relative',
        'top-0 z-40 flex-none mx-auto w-full border-b border-gray-50/0 transition-[opacity] ease-in-out',
      ].join(' ')}
      {...(isSticky ? { 'data-aw-sticky-header': true } : {})}
      id={id}
    >
      <div className="absolute inset-0 head"></div>
      <div
        className={[
          'relative text-default py-2 mt-[1.5rem]  px-6 mx-auto w-full animate-headerFade h-full',
          position !== 'center' ? 'md:flex md:justify-between' : '',
          position === 'center' ? 'md:grid md:grid-cols-2 ' : '',
          !isFullWidth ? 'max-w-7xl' : '',
        ].join(' ')}
      >
        <div
          className={[
            position === 'right' ? 'mr-auto rtl:mr-0 rtl:ml-auto' : '',
            'flex justify-between',
          ].join(' ')}
        >
          <a className="flex items-center " href='/'>
          <span
        className="self-center text-[1.7rem] font-bold text-gray-900 rtl:ml-0 rtl:mr-2 whitespace-nowrap">
            <div className="flex items-end justify-end text-primary">
              <Logo size="30" color="primary" /> Pitchfy
            </div>
          </span>
          </a>
          <div className="flex items-center md:hidden">
            <ToggleMenu />
          </div>
        </div>

        <div
          className={[
            position === 'left' ? 'ml-auto rtl:ml-0 rtl:mr-auto' : '',
            'hidden md:self-center md:flex items-center md:mb-0 fixed w-full md:w-auto md:static justify-end left-0 rtl:left-auto rtl:right-0 bottom-5 p-3 md:p-0 md:justify-self-end',
          ].join(' ')}
        >
          <div className="flex items-center justify-start w-full md:justify-between md:w-auto">
            <ButtonComponent/>
            <UserBotton/>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
