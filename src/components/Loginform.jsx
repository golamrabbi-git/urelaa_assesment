import { useState } from 'react';
import axios from 'axios';
import { useNavigate, } from 'react-router-dom';

const Loginform = () => {
  const [errorMessage, setErrorMessage] = useState(null);
  const navigate = useNavigate();
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    const phone = e.target.phone.value;
    const password = e.target.password.value;

    try {
      // Make a POST request using Axios
      const response = await axios.post('https://demo.zfcourier.xyz/api/v/1.0.0/auth/login', {
        phone,
        password,
      });

      // Handle the successful response here
    //   console.log('Response:', response.data.token);
    
    //save the token in local storage
    if(response.data.token){
        localStorage.setItem('token', response.data.token);
        return navigate('/parcels')
    }
    

      // handling errors
    } catch (error) {
      console.error('Error:', error.message);
      setErrorMessage('Login failed. Please check your credentials.');
    }
  };

  return (
    <>
      <div className='my-8'>
        <h1 className='text-emerald-500 text-center text-3xl font-semibold mb-8'>User Login</h1>

        <form className='flex flex-col gap-4 items-center my-4' onSubmit={handleSubmit}>
          <input
            type='text'
            name='phone'
            placeholder='Phone Number'
            className='w-full max-w-xs p-2 border border-[#18C2AD] rounded'
            required
          />
          <input
            type='password'
            name='password'
            placeholder='Password'
            className='w-full max-w-xs p-2 border border-[#18C2AD] rounded'
            required
          />
          <button type='submit' className='text-white p-2 px-4 border-2 rounded-xl bg-emerald-500'>
            Login
          </button>
        </form>

        {errorMessage && (
          <p className='text-red-500 text-sm text-center'>{errorMessage}</p>
        )}
      </div>
    </>
  );
};

export default Loginform;
