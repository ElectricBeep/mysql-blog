import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";

import { AuthContext } from "../context/authContext";

const Login = () => {
  const [inputs, setInputs] = useState({});
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { login, currentUser } = useContext(AuthContext);

  const handleChange = (e) => {
    setInputs((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      login(inputs);
      navigate("/");
    } catch (err) {
      setError(err.response.data);
    }
  };


  return (
    <div className="auth">
      <h1>Login</h1>
      <form>
        <input required type="text" placeholder="Username" name="username" onChange={handleChange} />
        <input required type="password" placeholder="Password" name="password" onChange={handleChange} />
        <button onClick={handleSubmit}>Login</button>
        {error && (
          <p>{error}</p>
        )}
        <span>
          Don't have an account? <Link to="/register">Register</Link>
        </span>
      </form>
    </div>
  )
}

export default Login