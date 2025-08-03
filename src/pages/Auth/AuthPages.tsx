import AuthButton from '../../UI/Auth/AuthButton/AuthButton';
import AuthInput from '../../UI/Auth/AuthInput/AuthInput';
import './AuthPages.scss';
const AuthPages = () => {
  return (
    <div className="authPages">
      <div className="authPages__container">
        <h2 className="authPages__title">Login to your Account</h2>
        <div className="authPages__subtitle">
          See what is going on with your business
        </div>
        <div className="authPages__form">
          <AuthInput />
          <AuthInput />
        </div>
        <div className="authPages__options">
          <div className="authPages__remeber">
            <input type="checkbox" />
            <span>Remeber me</span>
          </div>
          <div className="authPages__fogot">Forgot Password?</div>
        </div>

        <div className="authPages_btn">
          <AuthButton />
        </div>
      </div>
    </div>
  );
};

export default AuthPages;
