import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';



function Login() {
  return (
    <div className='d-flex justify-content-center align-item-center bg-light vh-100' >
<form action='' className='bg-black w-25 text-white p-3 m-3 round'>
  <div className='greeting' bg-black>
    <h1 className='header  fs-20'>Hello</h1>
    <p className='wel '>Welcome Back!</p>
  </div>
    <div className='login-cls'>
        <label htmlFor='email'>Email</label> 
        <input type='email' name='useremail' placeholder='example@gmail' required/>
    </div>

    <div className='login-cls'>
        <label htmlFor='password'>Password</label>
        <input type='password' name='password' placeholder='*********' required/>
        <p><a href='..'>forget password</a></p>
    </div>

         <button type='submit btn success'>Log In</button>
         <p>Don't have account</p> <button type='sign up'>Sign Up</button>
</form>

    </div>
  )
}

export default Login