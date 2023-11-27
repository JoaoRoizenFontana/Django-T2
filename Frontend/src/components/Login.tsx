import React, {useState, useEffect} from 'react'
import APIService from '../APIService'
import { useCookies } from 'react-cookie'
import {useHistory } from 'react-router-dom'

function Login() {
  const [username, setUsername] =   useState('')
  const [password, setPassword] =   useState('')
  const [token , setToken] = useCookies(['mytoken'])
  const [isLogin, setLogin] = useState(true)
  let history = useHistory()

  useEffect(() =>  {
    if(token['mytoken']) {
        //history.push('/articles')
        window.location.href = '/articles'
    }
  }, [token])

  const LoginBtn = () => {
    APIService.LoginUser({username, password})
    .then(resp => setToken('mytoken', resp.token))
    .catch(error => console.log(error))
  }

  const RegisterBtn = () => {
    APIService.RegisterUser({username, password})
    .then(() => LoginBtn)
    .catch(error => console.log(error))
  }

  return (
    <div className='App'>
        <br/>
        <br/>
      {isLogin ? <h1>Login</h1> : <h1>Cadastre-se</h1>}
      

      <br/>
      <br/>

      <div className='mb-3'>
        <label htmlFor='username' className='form-label'>Username</label>
        <input type = "text" className='form-control' id='username' placeholder='Enter Username' 
        value={username} onChange={e => setUsername(e.target.value)}
        />
      </div>

        <div className='mb-3'>
        <label htmlFor='password' className='form-label'>Password</label>
        <input type = "password" className='form-control' id='password' placeholder='Enter Password' 
        value={password} onChange={e => setPassword(e.target.value)}
        />
        </div>

        {isLogin ? <button onClick={LoginBtn} className='btn btn-primary'>Login</button> 
        : <button onClick={RegisterBtn} className='btn btn-primary'>Cadastre-se</button>}

        

        <div className='mb-3'>
        <br/>
        {isLogin ? (
            <h5>
                Se não possui conta,
                <button className='btn btn-primary' onClick={() => setLogin(false)}>
                Cadastre-se
                </button>
            </h5>
            ) : <h5>Se ja possui conta, <button className='btn btn-primary' onClick={() => setLogin(true)}>
            Login
            </button></h5>
        }
    
        </div>
    </div>
  )
}

export default Login
