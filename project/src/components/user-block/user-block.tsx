import {MouseEventHandler} from 'react';
import {useNavigate} from 'react-router-dom';
import {LoggedInUser} from '../../types/user';


type UserBlockProps = {
  user: LoggedInUser;
};


function UserBlock({user}: UserBlockProps): JSX.Element {
  const navigate = useNavigate();

  const clickAvatarHandler: MouseEventHandler<HTMLImageElement> = () => {
    navigate('/mylist');
  };

  return (
    <ul className="user-block">
      <li className="user-block__item">
        <div className="user-block__avatar">
          <img src={user.avatarUrl} alt="User avatar" width="63" height="63" onClick={clickAvatarHandler} />
        </div>
      </li>
      <li className="user-block__item">
        <a href="/logout" className="user-block__link">Sign out</a>
      </li>
    </ul>
  );
}


export default UserBlock;
