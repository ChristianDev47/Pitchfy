import { useState } from 'react';
import type { SubmitHandler } from 'react-hook-form';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
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
  const [createError, setCreateError] = useState<string>('');

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
      console.log(user, token);

      if (user === undefined) {
        toast.error(`Email o contraseña incorrectos..`, {
          duration: 5000,
        });
      } else {
        toast.success(`Sesión iniciada. Bienvenido/a ${user.email}.`, {
          duration: 2000,
          style: {
            background: "#7DA640",
            color: "#fff",
          },
          iconTheme: {
            primary: "#fff",
            secondary: "#000",
          },
        });
        setTimeout(() => {
          window.location.href = `/log?token=${token}`
        }, 2000);
      }
    } catch (error) {
      setCreateError('Email already used')
      console.error("Error :", error);
      toast.error(
        "Error al iniciar sesión. Por favor, inténtalo de nuevo más tarde.",
        {
          duration: 5000,
        }
      );
      setTimeout(() => {
        window.location.href = '/';
      }, 8888000);

    }
  };

  

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
    <div className="max-w-xs mx-auto space-y-3">
      <input
        {...register('displayName', {
          minLength: {
            value: 1,
            message: 'Username is required',
          },
          onChange: handleInputUserName,
        })}
        className="w-full px-4 py-2 text-[15px] font-medium placeholder-gray-500 bg-gray-100 border border-gray-200 rounded-lg focus:outline-none focus:border-gray-400 focus:bg-white"
        type="username"
        placeholder="Username"
      />
      {errors.displayName && (
        <p className="text-sm text-[#ff2d2d]">{errors.displayName.message}</p>
      )}
      <input
        {...register('firstName', {
          minLength: {
            value: 1,
            message: 'Firstname is required',
          },
          onChange: handleInputFirstName,
        })}
        className="w-full px-4 py-2 text-[15px] font-medium placeholder-gray-500 bg-gray-100 border border-gray-200 rounded-lg focus:outline-none focus:border-gray-400 focus:bg-white"
        type="firstname"
        placeholder="Firstname"
      />
      {errors.firstName && (
        <p className="text-sm text-[#ff2d2d]">{errors.firstName.message}</p>
      )}
      <input
        {...register('lastName', {
          minLength: {
            value: 1,
            message: 'Lastname is required',
          },
          onChange: handleInputLastName,
        })}
        className="w-full px-4 py-2 text-[15px] font-medium placeholder-gray-500 bg-gray-100 border border-gray-200 rounded-lg focus:outline-none focus:border-gray-400 focus:bg-white"
        type="lastname"
        placeholder="Lastname"
      />
      {errors.lastName && (
        <p className="text-sm text-[#ff2d2d]">{errors.lastName.message}</p>
      )}

      <input
        {...register('email', {
          required: 'El correo electrónico es obligatorio',
          pattern: {
            value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
            message: 'El correo electrónico no es válido',
          },
          onChange: handleInputEmail,
        })}
        className="w-full px-4 py-2 text-[15px] font-medium placeholder-gray-500 bg-gray-100 border border-gray-200 rounded-lg focus:outline-none focus:border-gray-400 focus:bg-white"
        type="email"
        placeholder="Email"
      />
      {errors.email && (
        <p className="text-sm text-[#ff2d2d]">{errors.email.message}</p>
      )}

      <input
        {...register('password', {
          required: 'La contraseña es obligatoria',
          minLength: {
            value: 6,
            message: 'La contraseña debe tener al menos 6 caracteres',
          },
          onChange: handleInputPassword,
        })}
        className="w-full px-4 py-2 mt[15px] text-sm font-medium placeholder-gray-500 bg-gray-100 border border-gray-200 rounded-lg focus:outline-none focus:border-gray-400 focus:bg-white"
        type="password"
        placeholder="Password"
      />
      {errors.password && (
        <p className="text-sm text-[#ff2d2d]">{errors.password.message}</p>
      )}

      <button
        disabled={inputEmailValue === '' || inputPasswordValue === '' || inputUserNameValue === '' || inputFirstNameValue === '' || inputLastNameValue === ''}
        className="w-full py-2 rounded-md btn-primary"
      >
        <span className="text-[15px]">Register</span>
      </button>
      {createError !== '' && (
        <p className="text-sm text-[#ff2d2d]">{createError}</p>
      )}
    </div>
  </form>
  );
}
