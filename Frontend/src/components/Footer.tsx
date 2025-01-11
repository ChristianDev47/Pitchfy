import { FC, Fragment } from 'react';

interface Link {
  text?: string;
  href?: string;
  ariaLabel?: string;
  icon?: string;
}

interface Links {
  title?: string;
  links: Array<Link>;
}

export interface Props {
  links: Array<Links>;
  secondaryLinks: Array<Link>;
  socialLinks: Array<Link>;
  footNote?: string;
  theme?: string;
}


const iconMap: Record<string, JSX.Element> = {
  'tabler:brand-x': (
    <svg className="w-5 h-5" height="1em" width="1em" data-icon="tabler:brand-x"><symbol id="ai:tabler:brand-x" viewBox="0 0 24 24"><path d="m4 4l11.733 16H20L8.267 4zm0 16l6.768-6.768m2.46-2.46L20 4" fill="none" stroke="#171720" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></symbol><use href="#ai:tabler:brand-x"></use></svg>
  ),
  'tabler:brand-instagram': (
    <svg className="w-5 h-5" height="1em" width="1em" data-icon="tabler:brand-instagram"><symbol id="ai:tabler:brand-instagram" viewBox="0 0 24 24"><g strokeLinecap="round" strokeLinejoin="round" fill="none" stroke="#171720" strokeWidth="2"><path d="M4 8a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v8a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4z"></path><path d="M9 12a3 3 0 1 0 6 0a3 3 0 0 0-6 0m7.5-4.5v.01"></path></g></symbol><use href="#ai:tabler:brand-instagram"></use></svg>
  ),
  'tabler:brand-facebook': (
    <svg className="w-5 h-5" height="1em" width="1em" data-icon="tabler:brand-facebook"><symbol id="ai:tabler:brand-facebook" viewBox="0 0 24 24"><path d="M7 10v4h3v7h4v-7h3l1-4h-4V8a1 1 0 0 1 1-1h3V3h-3a5 5 0 0 0-5 5v2z" fill="none" stroke="#171720" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></symbol><use href="#ai:tabler:brand-facebook"></use></svg>
  ),
  'tabler:brand-github': (
    <svg className="w-5 h-5" height="1em" width="1em" data-icon="tabler:brand-github"><symbol id="ai:tabler:brand-github" viewBox="0 0 24 24"><path d="M9 19c-4.3 1.4-4.3-2.5-6-3m12 5v-3.5c0-1 .1-1.4-.5-2c2.8-.3 5.5-1.4 5.5-6a4.6 4.6 0 0 0-1.3-3.2a4.2 4.2 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a12.3 12.3 0 0 0-6.2 0C6.5 2.8 5.4 3.1 5.4 3.1a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 4 9.5c0 4.6 2.7 5.7 5.5 6c-.6.6-.6 1.2-.5 2V21" fill="none" stroke="#171720" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></symbol><use href="#ai:tabler:brand-github"></use></svg>
  ),
};


const Footer: FC<Props> = ({
  socialLinks = [],
  secondaryLinks = [],
  links = [],
  theme = 'light',
}) => {
  return (
    <footer className={`relative border-t border-gray-200 not-prose ${theme === 'dark' ? 'dark' : ''}`}>
      <div className="absolute inset-0 pointer-events-none " aria-hidden="true"></div>
      <div className="relative max-w-[75rem] px-4 mx-auto sm:px-6 intersect-once intersect-quarter intercept-no-queue motion-safe:opacity-0 motion-safe:intersect:animate-fade">
        <div className="grid grid-cols-12 gap-4 py-8 gap-y-8 sm:gap-8 md:py-12">
          <div className="col-span-12 lg:col-span-4">
            <div className="mb-2">
              <a className="inline-block text-xl font-bold" href='/'>Pitchfy</a>
            </div>
            <div className="flex gap-1 text-sm text-muted">
              {secondaryLinks.map(({ text, href }, index) => (
                <Fragment key={index}>
                  {index !== 0 ? ' · ' : ''}
                  <a
                    className="transition duration-150 ease-in-out text-muted hover:text-gray-700 hover:underline"
                    href={href}
                    dangerouslySetInnerHTML={{ __html: text || '' }}
                  />
                </Fragment>
              ))}
            </div>
          </div>
          {links.map(({ title, links }, index) => (
            <div key={index} className="col-span-6 md:col-span-3 lg:col-span-2">
              <div className="mb-2 font-medium">{title}</div>
              {links && Array.isArray(links) && links.length > 0 && (
                <ul className="text-sm">
                  {links.map(({ text, href, ariaLabel }, i) => (
                    <li key={i} className="mb-2">
                      <a
                        className="transition duration-150 ease-in-out text-muted hover:text-gray-700 hover:underline"
                        href={href}
                        aria-label={ariaLabel}
                        dangerouslySetInnerHTML={{ __html: text || '' }}
                      />
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
        <div className="py-6 md:flex md:items-center md:justify-between md:py-8">
          {socialLinks.length > 0 && (
            <ul className="flex mb-4 -ml-2 md:order-1 md:ml-4 md:mb-0 rtl:ml-0 rtl:-mr-2 rtl:md:ml-0 rtl:md:mr-4">
              {socialLinks.map(({ ariaLabel, href, icon }, index) => (
                <li key={index}>
                  <a
                    className="text-muted hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200 rounded-lg text-sm p-2.5 inline-flex items-center"
                    aria-label={ariaLabel}
                    href={href}
                  >
                   {icon && iconMap[icon]}
                  </a>
                </li>
              ))}
            </ul>
          )}
          <div className="mr-4 text-sm">Made by <a className="text-blue-600 underline" href="https://linktr.ee/Christian_Delgado">Christian Delgado</a> · All rights reserved.</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
