import { useState } from "react";
import { useForm } from "../hooks/useForm";

export const FormComponent = () => {
  const { username, email, password, onInputForm, onSubmit } = useForm();

  return (
    <form onSubmit={onSubmit}>
      <div className='mb-3'>
        <label htmlFor='username' className='form-label'>
          UserName
        </label>
        <input
          type='text'
          id='username'
          className='form-control'
          name='username'
          placeholder='Enter your userName'
          value={username}
          onChange={onInputForm}
          autoComplete='username'
        />
      </div>
      <div className='mb-3'>
        <label htmlFor='email' className='form-label'>
          E-mail
        </label>
        <input
          type='email'
          id='email'
          className='form-control'
          name='email'
          placeholder='Enter your email ex: juan@gmail.com'
          value={email}
          onChange={onInputForm}
          autoComplete='email'
        />
      </div>

      <div className='mb-3'>
        <label htmlFor='password' className='form-label'>
          Password
        </label>
        <input
          type='password'
          id='password'
          className='form-control'
          name='password'
          placeholder='Password'
          value={password}
          onChange={onInputForm}
          autoComplete='new-password'
        />
      </div>
      <button type='submit' className='btn btn-primary'>
        Submit!
      </button>
    </form>
  );
};
