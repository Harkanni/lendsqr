import React, { useState } from 'react'
import { lendsqrLogo, signIn } from '../assets/'
import './login.scss';

const Login = () => {
   const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');
   const [showPassword, setShowPassword] = useState(false);

   // Handler for email input
   const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setEmail(e.target.value);
   };

   // Handler for password input
   const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setPassword(e.target.value);
   };

   // Toggle the visibility of the password
   const toggleShowPassword = () => {
      setShowPassword(!showPassword);
   };


   return (
      <div className='loginPage' style={{ display: 'flex', minHeight: '100vh', flexDirection: 'column' }}>
         <div className='page' style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'start', justifyContent: 'center', backgroundColor: '#fbfbfb' }}>
            <img src={lendsqrLogo} alt="logo" width={100} style={{ marginBottom: '5rem'}} />
            <img src={signIn} alt="" width={'100%'} height={350} />
         </div>
         <div className='page' style={{ flex: 1, backgroundColor: '#fff' }}>
            <div style={{ marginBottom: "2rem" }}>
               <h1 style={{ fontFamily: 'Avenir Next', color: '#213F7D', fontWeight: '700', fontSize: '40px', lineHeight: '55px', letterSpacing: '-4%' }}>Welcome!</h1>
               <p>Enter details to login</p>
            </div>
            <form action="">
               <>
                  <div style={{ width: '100%', display: 'flex' }}>
                     <input
                        style={{ width: '100%', height: '', padding: '1rem', borderRadius: '5px', border: '2px solid #545F7D26', outline: 'none' }}
                        type="email"
                        id="email"
                        value={email}
                        onChange={handleEmailChange}
                        placeholder="Enter your email"
                     />
                  </div>

                  <div style={{ padding: '1rem', marginTop: '10px', display: 'flex', justifyContent: 'space-between', width: '100%', borderRadius: '5px', border: '2px solid #545F7D26' }}>
                     <input
                        style={{ width: '100%', border: 'none', outline: 'none' }}
                        type={showPassword ? 'text' : 'password'}
                        id="password"
                        value={password}
                        onChange={handlePasswordChange}
                        placeholder="Enter your password"
                     />
                     <p
                        // type="button"
                        onClick={toggleShowPassword}
                        style={{
                           marginLeft: '10px',
                           // padding: '5px',
                           cursor: 'pointer',
                           background: 'none',
                           border: 'none',
                           color: '#007bff',
                        }}
                     >
                        {showPassword ? 'Hide' : 'Show'}
                     </p>
                  </div>

               </>
               <div style={{ marginTop: '2rem' }}>
                  <p className='forgotPassword'>FORGOT PASSWORD</p>
                  <button style={{ color: 'white', marginTop: '2rem', width: '100%', padding: '0.75rem', backgroundColor: '#39cdcc', border: '2px solid #545F7D26', borderRadius: '0.5rem' }}>LOG IN</button>
               </div>
            </form>
         </div>
      </div>
   )
}

export default Login
