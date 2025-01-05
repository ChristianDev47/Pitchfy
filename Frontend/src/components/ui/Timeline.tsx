import { twMerge } from 'tailwind-merge';
import type { Item } from '~/types';

interface Props {
  items?: Array<Item>;
  defaultIcon?: string;
  classes?: Record<string, string>;
}

const iconMap: Record<string, JSX.Element> = {
  'tabler:star': (
    <svg className="w-10 h-10 p-2 border-2 rounded-full border-primary text-secondary" height="1em" width="1em" data-icon="tabler:star"><symbol id="ai:tabler:star" viewBox="0 0 24 24"><path d="m12 17.75l-6.172 3.245l1.179-6.873l-5-4.867l6.9-1l3.086-6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z" fill="none" stroke="#FF7130" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></symbol><use href="#ai:tabler:star"></use></svg>
  ),
  'tabler:rocket': (
    <svg className="w-10 h-10 p-2 border-2 rounded-full border-primary text-secondary" height="1em" width="1em" data-icon="tabler:rocket"><symbol id="ai:tabler:rocket" viewBox="0 0 24 24"><g strokeLinecap="round" strokeLinejoin="round" fill="none" stroke="#FF7130" strokeWidth="2"><path d="M4 13a8 8 0 0 1 7 7a6 6 0 0 0 3-5a9 9 0 0 0 6-8a3 3 0 0 0-3-3a9 9 0 0 0-8 6a6 6 0 0 0-5 3"></path><path d="M7 14a6 6 0 0 0-3 6a6 6 0 0 0 6-3m4-8a1 1 0 1 0 2 0a1 1 0 1 0-2 0"></path></g></symbol><use href="#ai:tabler:rocket"></use></svg>
  ),
  'tabler:e-passport': (
    <svg className="w-10 h-10 p-2 border-2 rounded-full border-primary text-secondary" height="1em" width="1em" data-icon="tabler:e-passport"><symbol id="ai:tabler:e-passport" viewBox="0 0 24 24"><g strokeLinecap="round" strokeLinejoin="round" fill="none" stroke="#FF7130" strokeWidth="2"><path d="M2 7a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2z"></path><path d="M9 12a3 3 0 1 0 6 0a3 3 0 1 0-6 0m0 0H2m13 0h7"></path></g></symbol><use href="#ai:tabler:e-passport"></use></svg>
  ),
  'tabler:speakerphone': (
    <svg className="w-10 h-10 p-2 border-2 rounded-full border-primary text-secondary" height="1em" width="1em" data-icon="tabler:speakerphone"><symbol id="ai:tabler:speakerphone" viewBox="0 0 24 24"><g strokeLinecap="round" strokeLinejoin="round" fill="none" stroke="#FF7130" strokeWidth="2"><path d="M18 8a3 3 0 0 1 0 6m-8-6v11a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1v-5"></path><path d="m12 8l4.524-3.77A.9.9 0 0 1 18 4.922v12.156a.9.9 0 0 1-1.476.692L12 14H4a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1z"></path></g></symbol><use href="#ai:tabler:speakerphone"></use></svg>
  ),
};

const Timeline: React.FC<Props> = ({ items = [], classes = {} }) => {
  const {
    container: containerClass = '',
    panel: panelClass = '',
    title: titleClass = '',
    description: descriptionClass = '',
  } = classes;

  return (
    items && items.length > 0 ? (
      <div className={containerClass}>
        {items.map(({ title, description, icon, classes: itemClasses = {} }, index) => (
          <div
            key={index}
            className={twMerge(
              'flex intersect-once intersect-quarter motion-safe:opacity-0 motion-safe:intersect:animate-fade',
              panelClass,
              itemClasses?.panel
            )}
          >
            <div className="flex flex-col items-center mr-4 rtl:mr-0 rtl:ml-4">
              <div>
                <div className="flex items-center justify-center">
                {icon && iconMap[icon] || (
                  <div className="w-10 h-10 p-2 border-2 rounded-full">
                    Icono no encontrado
                  </div>
                )}
                </div>
              </div>
              {index !== items.length - 1 && <div className="w-px h-full bg-primary" />}
            </div>
            <div className={`pt-1 ${index !== items.length - 1 ? 'pb-8' : ''}`}>
              {title && <p className={twMerge('text-[20px] font-bold', titleClass, itemClasses?.title)} dangerouslySetInnerHTML={{ __html: title }} />}
              {description && (
                <p
                  className={twMerge('text-muted mt-2 text-[16px]', descriptionClass, itemClasses?.description)}
                  dangerouslySetInnerHTML={{ __html: description }}
                />
              )}
            </div>
          </div>
        ))}
      </div>
    ) : null
  );
};

export default Timeline;
