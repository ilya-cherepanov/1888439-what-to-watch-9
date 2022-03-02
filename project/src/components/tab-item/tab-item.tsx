import {MouseEventHandler} from 'react';
import {makeSlug} from './utils';


type TabItemProps = {
  content: string;
  active: boolean;
  containerClass: string;
  linkClass: string;
  onClick: (content: string) => void;
};


function TabItem({content, active, containerClass, linkClass, onClick}: TabItemProps): JSX.Element {
  const activationModifier = active ? `${containerClass}--active` : '';

  const clickHandler: MouseEventHandler<HTMLAnchorElement> = (evt) => {
    evt.preventDefault();

    onClick(content);
  };

  return (
    <li className={`${containerClass} ${activationModifier}`}>
      <a href={`#${makeSlug(content)}`} className={linkClass} onClick={clickHandler}>
        {content}
      </a>
    </li>
  );
}


export default TabItem;
