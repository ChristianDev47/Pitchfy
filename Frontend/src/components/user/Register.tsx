import { useState } from 'react';
import type { SubmitHandler } from 'react-hook-form';
import { useForm } from 'react-hook-form';
import { CreateAcount } from '../../services/user';
import { useAuth } from '../../hooks/useAuth';

// Validations types
type Inputs = {
  displayName: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
};

export default function FormRegister() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const {login} = useAuth()

  const [inputUserNameValue, setInputUserNameValue] = useState<string>('');
  const [inputFirstNameValue, setInputFirstNameValue] = useState<string>('');
  const [inputLastNameValue, setInputLastNameValue] = useState<string>('');
  const [inputEmailValue, setInputEmailValue] = useState<string>('');
  const [inputPasswordValue, setInputPasswordValue] = useState<string>('');

  const handleInputUserName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputUserNameValue(event.target.value);
  };
 
  const handleInputFirstName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputFirstNameValue(event.target.value);
  };
 
  const handleInputLastName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputLastNameValue(event.target.value);
  };

  const handleInputEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputEmailValue(event.target.value);
  };

  const handleInputPassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputPasswordValue(event.target.value);
  };


  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    try {
      const {user, token} = await CreateAcount({ user: data });

      if (user !== undefined)  {
        setTimeout(() => {
          login(token)
          window.location.href = `/`
        }, 500);
      }
    } catch (error) {
      console.error("Error :", error);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className='max-w-[38rem] w-full text-start'>  
      <h3 className="text-[22px] font-semibold mb-4 text-start">Register</h3>
      <div className="flex flex-col w-full text-start">
        <div className="flex items-center justify-start space-x-1">
          <label className="block mb-1 text-[14px]"><i className="fa fa-user"></i>Username</label>
          {errors.displayName?.message && <p className="text-[12px] text-red-500 mb-[.2rem]"> ({errors.displayName.message})</p>}
        </div>
        <input
          {...register('displayName', {
            required: 'Username is required',
            onChange: handleInputUserName,
          })}
          placeholder='RobertWill'
          autoComplete='displayName'
          className="w-full py-1 px-2 border border-gray-300 rounded-md mb-2 text-[14px]"
          type="username"
        />
        <div className="flex space-x-2">
          <div className="w-full md:w-1/2">
          <div className="flex items-center justify-start space-x-1">
          <label className="block mb-1 text-[14px]"><i className="fa fa-envelope"></i>First name</label>
          {errors.firstName?.message && <p className="text-[12px] text-red-500 mb-[.2rem]"> ({errors.firstName.message})</p>}
        </div>
        <input
          {...register('firstName', {
            required: 'First name is required',
            onChange: handleInputFirstName,
          })}
          autoComplete='firstName'
          className="w-full py-1 px-2 border border-gray-300 rounded-md mb-2 text-[14px]"
          type="firstname"
          placeholder="Robert"
        />
          </div>
          <div className="w-full md:w-1/2">
          <div className="flex items-center justify-start space-x-1">
          <label className="block mb-1 text-[14px]"><i className="fa fa-envelope"></i>Last name</label>
          {errors.lastName?.message && <p className="text-[12px] text-red-500 mb-[.2rem]"> ({errors.lastName.message})</p>}
        </div>
        <input
          {...register('lastName', {
            required: 'Last name is required',
            onChange: handleInputLastName,
          })}
          autoComplete='lastName'
          className="w-full py-1 px-2 border border-gray-300 rounded-md mb-2 text-[14px]"
          type="lastname"
          placeholder="Williams"
        />
          </div>
        </div>
        <div className="flex items-center justify-start space-x-1">
          <label className="block mb-1 text-[14px]"><i className="fa fa-envelope"></i>Email</label>
          {errors.email?.message && <p className="text-[12px] text-red-500 mb-[.2rem]"> ({errors.email.message})</p>}
        </div>
        <input
          {...register('email', {
            required: 'Email is required',
            pattern: {
              value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
              message: 'Invalid email format. Please enter a valid email address',
            },
            onChange: handleInputEmail,
          })}
          autoComplete='email'
          className="w-full py-1 px-2 border border-gray-300 rounded-md mb-2 text-[14px]"
          type="email"
          placeholder="robertwilliam21@gmai.com"
        />
        <div className="flex items-center justify-start space-x-1">
          <label className="block mb-1 text-[14px]"><i className="fa fa-envelope"></i>Password</label>
          {errors.password?.message && <p className="text-[12px] text-red-500 mb-[.2rem]"> ({errors.password.message})</p>}
        </div>
        <input
          {...register('password', {
            required: 'Password is required',
            minLength: {
              value: 6,
              message: 'Password must be at least 6 characters long',
            },
            onChange: handleInputPassword,
          })}
          autoComplete='current-password'
          className="w-full py-1 px-2 border border-gray-300 rounded-md mb-2 text-[14px]"
          type="password"
        />

      <button
        disabled={inputEmailValue === '' || inputPasswordValue === '' || inputUserNameValue === '' || inputFirstNameValue === '' || inputLastNameValue === ''}
        className=" py-2 rounded-md mt-[15px] mb-[6px] btn-primary px-10"
      >
        <span className="text-[14px]">Continue</span>
      </button>

    </div>
  </form>
  );
}
