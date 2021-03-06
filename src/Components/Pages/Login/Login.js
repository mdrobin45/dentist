import { Button, TextField } from '@mui/material';
import { styled } from '@mui/material/styles';
import VpnKeyIcon from '@mui/icons-material/VpnKey';
import React from 'react';
import loginVector from '../../images/login-vector.jpg'
import './Login.css'
import googleIcon from '../../images/google.png'
import githubIcon from '../../images/github.png'
import { NavLink } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth'

const Login = () =>
{

  const SignInButton = styled(Button)({
    background: '#29D8DB',
    width: '100%',
    padding: '15px 0',
    fontSize: '17px',
    '&:hover': {
      background: 'black'
    }
  });


  // Destructure auth context
  const { loginWithGoogle,error,loginWithEmailAndPassword,loginWithGithub } = useAuth();
  return (
    <div className='md:flex py-32 container justify-between'>
      <div className='md:w-2/4'>
        <img className='md:w-10/12' src={loginVector} alt="Login Vector" />
      </div>

      <form className='m-auto rounded p-10 shadow-2xl md:w-2/4'>
        <h2 className='font-bold pb-6 text-3xl text-center'>Please Login</h2>
        <strong className='font-bold text-center py-3 text-lg text-red-600'>{error}</strong>
        <div>
          <TextField required fullWidth type='email' label="Email" id="fullWidth" />
        </div>

        <div className='my-4'>
          <TextField required fullWidth type='password' label="Password" id="fullWidth" />
        </div>

        <div>
          <SignInButton onClick={loginWithEmailAndPassword} size="large" variant="contained" endIcon={<VpnKeyIcon />}>Login</SignInButton>
        </div>

        <hr />
        <div onClick={loginWithGoogle} className='flex shadow rounded-lg justify-center items-center mt-6 p-3 border-2 cursor-pointer'>
          <img className='w-10' src={googleIcon} alt="Continue with google" />
          <h3 className='text-2xl pl-3'>Continue with Google</h3>
        </div>

        <div onClick={loginWithGithub} className='flex shadow rounded-lg justify-center items-center mt-6 p-3 border-2 cursor-pointer'>
          <img className='w-10' src={githubIcon} alt="Continue with github" />
          <h3 className='text-2xl pl-3'>Continue with Github</h3>
        </div>
        
        <div className='text-center pt-3'>
          <NavLink style={{color:'#29D8DB'}} className='text-lg' to='/register'>Create a new account</NavLink>
        </div>
      </form>
    </div>
  );
};

export default Login;