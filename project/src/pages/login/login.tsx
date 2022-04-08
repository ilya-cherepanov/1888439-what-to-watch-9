import {FormEventHandler, useState} from 'react';
import {Navigate} from 'react-router-dom';
import Footer from '../../components/footer/footer';
import Logo from '../../components/logo/logo';
import {AppRoute, AuthorizationStatus, LogoStyle} from '../../constants';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {loginAction} from '../../store/api-action';
import {validateEmail, validatePassword} from './utils';


function LoginPage(): JSX.Element {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const {authorizationStatus, serverErrorMessage} = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();

  if (authorizationStatus !== AuthorizationStatus.NoAuth) {
    return <Navigate to={AppRoute.Main} />;
  }

  const handleSubmit: FormEventHandler<HTMLFormElement> = (evt) => {
    evt.preventDefault();

    const isEmailValid = validateEmail(email);
    if (!isEmailValid) {
      setEmailError('Please enter a valid email address');
    } else {
      setEmailError('');
    }

    const isPasswordValid = validatePassword(password);
    if (!isPasswordValid) {
      setPasswordError('Please enter a valid password');
    } else {
      setPasswordError('');
    }

    if (isEmailValid && isPasswordValid) {
      dispatch(loginAction({email, password}));
    }
  };

  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <Logo type={LogoStyle.Regular} />

        <h1 className="page-title user-page__title">Sign in</h1>
      </header>

      <div className="sign-in user-page__content">
        <form action="#" className="sign-in__form" onSubmit={handleSubmit}>

          {(emailError || passwordError || serverErrorMessage) && (
            <div className="sign-in__message">
              {emailError && <p>{emailError}</p>}
              {passwordError && <p>{passwordError}</p>}
              {serverErrorMessage && <p>We can’t recognize this email <br/> and password combination. Please try again.</p>}
            </div>
          )}

          <div className="sign-in__fields">
            <div className={`sign-in__field ${emailError ? 'sign-in__field--error' : ''}`}>
              <input
                className="sign-in__input"
                type="email"
                placeholder="Email address"
                name="user-email"
                id="user-email"
                value={email}
                onChange={({target}) => setEmail(target.value)}
              />
              <label className="sign-in__label visually-hidden" htmlFor="user-email">Email address</label>
            </div>

            <div className={`sign-in__field ${passwordError ? 'sign-in__field--error' : ''}`}>
              <input
                className="sign-in__input"
                type="password"
                placeholder="Password"
                name="user-password"
                id="user-password"
                value={password}
                onChange={({target}) => setPassword(target.value)}
              />
              <label className="sign-in__label visually-hidden" htmlFor="user-password">Password</label>
            </div>
          </div>
          <div className="sign-in__submit">
            <button className="sign-in__btn" type="submit">Sign in</button>
          </div>
        </form>
      </div>

      <Footer />
    </div>
  );
}


export default LoginPage;
