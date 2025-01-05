import { FC } from 'react';

export interface Props {
  label?: string;
  className?: string;
}

const ToggleMenuButton: FC<Props> = ({
  label = 'Toggle Menu',
  className = 'flex flex-col h-12 w-12 rounded justify-center items-center cursor-pointer group',
}) => {
  return (
    <button
      type="button"
      className={className}
      aria-label={label}
      data-aw-toggle-menu
    >
      <span className="sr-only">{label}</span>
      <span
        aria-hidden="true"
        className="h-0.5 w-6 my-1 rounded-full bg-black transition ease transform duration-200 opacity-80 group-[.expanded]:rotate-45 group-[.expanded]:translate-y-2.5"
      ></span>
      <span
        aria-hidden="true"
        className="h-0.5 w-6 my-1 rounded-full bg-black transition ease transform duration-200 opacity-80 group-[.expanded]:opacity-0"
      ></span>
      <span
        aria-hidden="true"
        className="h-0.5 w-6 my-1 rounded-full bg-black transition ease transform duration-200 opacity-80 group-[.expanded]:-rotate-45 group-[.expanded]:-translate-y-2.5"
      ></span>
    </button>
  );
};

export default ToggleMenuButton;
