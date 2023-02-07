import { login } from './utils';
import './index.css';
import { useState, useCallback } from "react";

export default function LoginForm() {
  const [data, setData] = useState({email: "", password: ""});
  const [error, setError] = useState("");
  const [disabledButton, setDisabledButton] = useState();

  const handleLogin = useCallback((e) => {
      e.preventDefault();
      setDisabledButton(true)
      setError("")
      
      login(data)
      .then(() => {
          alert("Congrats, man, you did it!")
        })
        .catch((error) => {
          setError(error.message);
        })
        .finally(() => {
          setDisabledButton(false)
        });
    },
    [data]
  );

  return (
    <div className='wrapper'>
      <div className='login-form'>
        <h1>Login Form</h1>
        {error &&
        <div className='errorMessage'>
          <p className="text-red-700 text-center">{error}</p>
        </div>
        }
        <div className='row'>
          <label htmlFor={'email'}>Email</label>
          <input
          id={'email'}
          type={'email'}
          autoComplete='off'
          onChange={(e) => setData({ ...data, email: e.target.value })}
          />
        </div>
        <div className='row'>
          <label htmlFor={'password'}>Password</label>
          <input
          id={'password'}
          type={'password'}
          onChange={(e) => setData({ ...data, password: e.target.value })}
          />
        </div>

        <div className='button'>
          <button onClick={handleLogin} disabled={!data.email || data.password.length < 6 || disabledButton}>Login</button>
        </div>
      </div>
    </div>
  );
}