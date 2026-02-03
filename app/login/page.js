import React from 'react'

const Login = () => {
  return (
    <div className='bg-gray-900'>
      <h1 className='text-4xl pt-3 text-center'>Please Login First</h1>
      <form action="" method='POST' className='flex flex-col items-center justify-evenly h-48 border rounded w-[20vw] mx-auto m-5'>
        <div>
          <label htmlFor="email">Email: </label>
          <input type="email" name="email" id="email" required className='border' />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input type="password" name='password' id='password' required className='border' />
        </div>
        <div>
          <button type='submit' className='border border-black rounded bg-blue-500 active:bg-blue-900 px-2 py-1'>Login</button>
        </div>
      </form>
    </div>
  )
}

export default Login