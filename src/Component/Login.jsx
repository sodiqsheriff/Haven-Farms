import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import myimg from '../assets/images.jpeg'
import {AiOutlineMail} from 'react-icons/ai'
import {FiLock} from 'react-icons/fi'
import {FaEyeSlash, FaEye} from 'react-icons/fa'
const Login = () => {
   
    const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');

//   const history = useHistory();
//     // Simulated signup credentials
//   const signupCredentials = {
//     email: 'user@example.com',
//     password: 'password123',
//   };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === 'email') setEmail(value);
    if (name === 'password'){
        if (value.length >=6 && value.length <=12){
            setPassword(value);
            setError('');
        }else{
            setError('password must be between 6 and 12 characters');
        }
        }
    };

  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };
  const signup = async () => {
    // Simulate signup logic
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(signupCredentials);
      }, 1000);
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check for empty inputs
    if (!email || !password) {
      setError('Please enter both email and password.');
      return;
    }
     if (password.length <6 || password.length >12){
        setError('password must be between 6 and 12 characters');
        return;
     }
    setLoading(true);

    try {
      // Simulate signup logic
      const credentials = await signup();
      // Check if entered credentials match signup credentials
      if (email === credentials.email && password === credentials.password) {
        // Successful login
        setError('');
        // Redirect to dashboard
        history.push('/dashboard');
      } else {
        // Incorrect credentials
        setError('Invalid credentials. Please try again.');
      }
    } catch (error) {
      setError('An error occurred. Please try again.');
    } finally {
      setLoading(false);
    }
  };






  return (
    <>
      <div className="flex flex-row m-0  md:h-[500px] justify-center rounded-r-3xl md:m-10">
        <div className="sm:hidden md:flex flex-col w-1/2 bg-white h-full shadow-2xl ">
          <img src={myimg} alt="" className='w-full h-full' />
        </div>
         <div className="flex flex-col justify-center items-center w-full bg-none shadow-none md:w-1/2 py-10 md:bg-white md:shadow-2xl h-full">
             <div className="flex items-center justify-center">
                    <h1 className="font-Albert text-3xl text-blue-950 font-bold">IFAKO JAIYE LGA.</h1>
             </div>
               <h1 className="text-sm font-md font-Albert ">Login into your account</h1>
                <div className="flex flex-col w-full px-10">
                    <div className="flex mt-10 w-full">
                        <AiOutlineMail className='bg-blue-950 text-white text-4xl absolute h-12 rounded-lg w-12 p-3' />
                        <input type="email" placeholder='sodiqsheriff9@gmail.com'
                        id='email'
                        name="email"
                        value={email}
                        onChange={handleInputChange} 
                        className='border-none outline-none w-full bg-gray-200 h-12 ps-16 rounded-lg placeholder-black'
                        required/>
                    </div>
                    <div className="flex items-center mt-10 w-full">
                        <FiLock className='bg-blue-950 text-white text-4xl absolute h-12 rounded-lg w-12 p-3' />
                        <input type={showPassword ? 'text' : 'password'}
                        id='password'
                        name="password"
                        value={password}
                        onChange={handleInputChange} 
                        className='border-none outline-none w-full bg-gray-200 h-12 ps-16 rounded-lg placeholder-black'
                        required/>
                        <button className='absolute inset-x-0 flex items-center justify-end right-0 pr-12 ' type='button' onClick={togglePasswordVisibility}>
                            {showPassword ? (
                                <FaEyeSlash className=' z-10'  />
                            ):(
                                <FaEye className=' z-10' />
                            )}
                        </button>
                    </div>
                    <NavLink className='text-right font-semibold pt-5 text-blue-950 hover:opacity-50 underline' to=''>Forgot Password?</NavLink>
                    <NavLink to='/dashboard' className='text-center py-3 w-full bg-blue-950 text-white mt-5  rounded-lg' type="submit" disabled={loading}>
                        {loading ? 'Loggin in...': 'Login' }
                    </NavLink>
                    {error && <p style={{color:'red'}}>{error}</p>}
                    <h1 className="text-Albert text-center text-xl font-semibod text-gray-300">
                      OR
                    </h1>
                    <NavLink className='border border-black py-3 rounded-lg font-semibold text-center hover:bg-blue-950 hover:text-white' to='/signup'>Signup Now</NavLink>
                </div>
                
         </div>

      </div>
    </>
  )
}

export default Login