import { Button, TextField } from '@mui/material';
import { styled } from '@mui/material/styles';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import React from 'react';
import registerVector from '../../images/register-vector.jpg'
import './Register.css'
import useAuth from '../../../Hooks/useAuth'
import googleIcon from '../../images/google.png'
import githubIcon from '../../images/github.png'
import { NavLink } from 'react-router-dom';

const Register = () =>
{

  // Login in button custom style
  const LoginButtonStyle = styled(Button)({
    background: '#29D8DB',
    width: '100%',
    padding: '15px 0',
    fontSize: '17px',
    '&:hover': {
      background: 'black'
    }
  });

  // Destructure firebase
  const { getEmail,error, getPassword,registerWithEmailAndPassword,loginWithGithub,loginWithGoogle } = useAuth();
  return (
    <div className='flex py-32 container justify-between'>
      <div className='w-2/4'>
        <img className='w-10/12' src={registerVector} alt="Login Vector" />
      </div>

      <form className='m-auto rounded p-10 shadow-2xl w-2/4'>
        <h2 className='font-bold pb-6 text-3xl text-center'>Please Register</h2>
        <strong className='font-bold text-lg py-3 text-center text-red-600'>{error}</strong>
        <div>
          <TextField onBlur={getEmail} required fullWidth type='email' label="Email" id="fullWidth" />
        </div>

        <div className='my-4'>
          <TextField onBlur={getPassword} required fullWidth type='password' label="Password" id="fullWidth" />
        </div>

        <div>
          <LoginButtonStyle onClick={registerWithEmailAndPassword} size="large" variant="contained" endIcon={<PersonAddIcon />}>Register</LoginButtonStyle>
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
          <NavLink style={{color:'#29D8DB'}} className='text-lg' to='/login'>Already User?</NavLink>
        </div>
      </form>
    </div>
  );
};

export default Register;