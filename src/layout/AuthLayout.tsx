import AuthPicture from '../UI/Auth/AuthPicture/AuthPicture';
import AuthPages from '../pages/Auth/AuthPages';
import './AuthLayout.scss'

const AuthLayout = () => {
  return (
    <div className="authLayout">
      <AuthPicture />
      <AuthPages />
    </div>
  );
};

export default AuthLayout;
