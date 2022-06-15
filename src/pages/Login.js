import React, { useState } from 'react'
import {useNavigate } from 'react-router-dom'
import Button from '../component/Button'
import { validateEmail } from '../utility/Validate';

 const Login = () => {
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [state, setState] = useState({
      email: '',
      password: '',
      });
     const navigate = useNavigate()
  
    const handleInput = (e) => 
    {
        const { name, value } = e.target;
        setState((prevState) => ({
            ...prevState,
            [name]: value, 
        }));
        setEmailError('')
        setPasswordError('')
           };

    const onSubmit = (e) => {
      e.preventDefault();
  
      if (!validateEmail(state.email)) {
        setEmailError('Invalid Email');
        return true;
      }
      if (state.password.length < 8) {
        setPasswordError('Password must be at least 8 character');
        return true;
      }
  
      if (emailError == "" && passwordError=="") {
          localStorage.setItem("cred",JSON.stringify(state));
        navigate('/dashboard', {replace:true})
      }
     
    };
   
  return (
        <div className='parent'>
            <div className='styleBox'>
               <h2 className='title'>Login</h2>
                <div>
                    <label className="label">Email</label>
                    <input 
                        className="searchInput"
                        type="text"
                        name="email"
                        value={state.email}
                        onChange={(event) => handleInput(event)}
                    />
                    {emailError && <div style={{ color: 'red' }}>{emailError}</div>}
                </div>

                <div>
                    <label className="label">Password</label>
                    <input 
                        className="searchInput"
                        type="password"
                        name="password"
                        value={state.password}
                        onChange={(event) => handleInput(event)}
                        autocomplete="off"
                    />
                    {passwordError && <div style={{ color: 'red' }}>{passwordError}</div>}
                </div>
                <Button buttonText="Log in" onClick={onSubmit}/>
            </div>
       </div>
  )
}

export default Login;