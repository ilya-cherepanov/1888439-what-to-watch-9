import {MouseEventHandler} from 'react';
import {makeSlug} from './utils';


type TabItemProps = {
  content: string;
  active: boolean;
  containerClass: string;
  linkClass: string;
  onClick: (content: string) => void;
};


function TabSelector({content, active, containerClass, linkClass, onClick}: TabItemProps): JSX.Element {
  const activationModifier = active ? `${containerClass}--active` : '';

  const handleClick: MouseEventHandler<HTMLAnchorElement> = (evt) => {
    evt.preventDefault();

    onClick(content);
  };

  return (
    <li className={`${containerClass} ${activationModifier}`}>
      <a href={`#${makeSlug(content)}`} className={linkClass} onClick={handleClick}>
        {content}
      </a>
    </li>
  );
}


export default TabSelector;
