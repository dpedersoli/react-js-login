import { login } from './utils';
import './index.css';
import { useState, useCallback } from "react";

// Instruções:
// * Você tem um formulário de login INCOMPLETO
// * Não é permitido adicionar novos elementos HTML
// * Não é permitido usar refs ('useRef') -> usar controlled inputs react, que usam value e onChange
//
// Tarefas:
// todo - Desabilite o botão de Login caso o e-mail esteja em branco OU a senha for menor que 6 dígitos. ~~~~DONE~~~~
// todo - O botão de login deve disparar a função login(), importada no topo deste arquivo, e passar os dados necessários. (//função espera 1 param com 2 propriedades) ~~~~DONE~~~~
// todo - Desabilite o botão de Login equanto você está executando o login.
// todo - Mostre uma mensagem de erro de login() caso o Login falhe. A mensagem deve ser limpa a cada nova tentativa de Login.
// todo - Mostre um alerta caso o login seja efetuado com sucesso (javascript alert). Investigue a função login() para entender como ter sucesso na requisição. 

export default function LoginForm() {
  const [data, setData] = useState({email: "", password: ""});
  const [error, setError] = useState("");

  const handleLogin = useCallback((e, data) => {
      e.preventDefault();
      login(data)
        .then((response) => {
          if (response.status === 200) {
          }
        })
        .catch((error) => {
          setError();
        });
    },
    [data]
  );

  return (
    <div className='wrapper'>
      <div className='login-form'>
        <h1>Login Form</h1>
        {/* Coloque a mensagem de erro de login na div abaixo. Mostre a div somente se houver uma mensagem de erro. */}
        {error &&
        <div className='errorMessage'>
          <p className="text-red-700 text-center">{login.message}</p>
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
          {data.password.length < 6 || data.email.length == null
          ? <button onClick={handleLogin} disabled={true} style={{cursor: "not-allowed", borderColor: "transparent"}}>Login</button>
          : <button onClick={handleLogin} disabled={false}>Login</button>
          }
        </div>
      </div>
    </div>
  );
}
