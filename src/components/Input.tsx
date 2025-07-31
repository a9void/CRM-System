import './Input.css';

const Input = () => {
  return (
    <div className="input-container">
      <input type="text" className="input" placeholder="Task To Be Done..." />
      <button className="btn-input btn-blue">Add</button>
    </div>
  );
};

export default Input;
