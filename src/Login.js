import React from 'react'

function Login() {
  return (
    <div className='login'>
<form action=''>
    <div className='login-cls'>
        <label htmlFor='email'>Email</label> 
        <input type='email' name='useremail' placeholder='Enter Email' required/>
    </div>

    <div className='login-cls'>
        <label htmlFor='password'>Password</label>
        <input type='password' name='password' placeholder='password' required/>
    </div>

         <button type='submit btn success'>Log In</button>
         <p>Don't have account</p> <button type='sign up'>Sign Up</button>
</form>


    </div>
  )
}

export default Login