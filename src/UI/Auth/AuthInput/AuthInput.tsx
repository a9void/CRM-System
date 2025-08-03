import './AuthInput.scss';

const AuthInput = () => {
  return (
    <div className="AuthInput">
      <span className="AuthInput__label">Email</span>
      <input
        type="text"
        className="AuthInput__input"
        placeholder="mail@abc.com"
      />
    </div>
  );
};

export default AuthInput;
