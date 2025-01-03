import { useState } from 'react';
import type { SubmitHandler } from 'react-hook-form';
import { useForm } from 'react-hook-form';
import { CreateAcount } from '~/services/user';

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


  // Función para manejar el inicio de sesión con correo electrónico
  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    try {
      const {user, token} = await CreateAcount({ user: data });

      if (user !== undefined)  {
        setTimeout(() => {
          window.location.href = `/log?token=${token}`
        }, 500);
      }
    } catch (error) {
      console.error("Error :", error);
    }
  };

  

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
    <div className="max-w-xs mx-auto text-start">
      <input
        {...register('displayName', {
          required: 'Username is required',
          onChange: handleInputUserName,
        })}
        className="w-full px-4 py-2 text-[15px] mt-[15px] mb-[2px] font-medium placeholder-gray-500 bg-gray-100 border border-gray-200 rounded-lg focus:outline-none focus:border-gray-400 focus:bg-white"
        type="username"
        placeholder="Username"
      />
      {errors.displayName && (
        <p className="text-[14px] ml-2 text-[#ff2d2d]">{errors.displayName.message}</p>
      )}
      <input
        {...register('firstName', {
          required: 'First name is required',
          onChange: handleInputFirstName,
        })}
        className="w-full px-4 py-2 text-[15px] mt-[15px] mb-[2px] font-medium placeholder-gray-500 bg-gray-100 border border-gray-200 rounded-lg focus:outline-none focus:border-gray-400 focus:bg-white"
        type="firstname"
        placeholder="First name"
      />
      {errors.firstName && (
        <p className="text-[14px] ml-2 text-[#ff2d2d]">{errors.firstName.message}</p>
      )}
      <input
        {...register('lastName', {
          required: 'Last name is required',
          onChange: handleInputLastName,
        })}
        className="w-full px-4 py-2 text-[15px] mt-[15px] mb-[2px] font-medium placeholder-gray-500 bg-gray-100 border border-gray-200 rounded-lg focus:outline-none focus:border-gray-400 focus:bg-white"
        type="lastname"
        placeholder="Last name"
      />
      {errors.lastName && (
        <p className="text-[14px] ml-2 text-[#ff2d2d]">{errors.lastName.message}</p>
      )}

      <input
        {...register('email', {
          required: 'Email is required',
          pattern: {
            value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
            message: 'Invalid email format. Please enter a valid email address',
          },
          onChange: handleInputEmail,
        })}
        className="w-full px-4 py-2 text-[15px] mt-[15px] mb-[2px] font-medium placeholder-gray-500 bg-gray-100 border border-gray-200 rounded-lg focus:outline-none focus:border-gray-400 focus:bg-white"
        type="email"
        placeholder="Email"
      />
      {errors.email && (
        <p className="text-[14px] ml-2 text-[#ff2d2d]">{errors.email.message}</p>
      )}

      <input
        {...register('password', {
          required: 'Password is required',
          minLength: {
            value: 6,
            message: 'Password must be at least 6 characters long',
          },
          onChange: handleInputPassword,
        })}
        className="w-full px-4 py-2 mt-[15px] mb-[2px] text-sm font-medium placeholder-gray-500 bg-gray-100 border border-gray-200 rounded-lg focus:outline-none focus:border-gray-400 focus:bg-white"
        type="password"
        placeholder="Password"
      />
      {errors.password && (
        <p className="text-[14px] ml-2 text-[#ff2d2d]">{errors.password.message}</p>
      )}

      <button
        disabled={inputEmailValue === '' || inputPasswordValue === '' || inputUserNameValue === '' || inputFirstNameValue === '' || inputLastNameValue === ''}
        className="w-full py-2 rounded-md mt-[15px] mb-[2px] btn-primary"
      >
        <span className="text-[15px]">Register</span>
      </button>

    </div>
  </form>
  );
}
