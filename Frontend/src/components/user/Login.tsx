import { useState } from 'react';
import type { SubmitHandler } from 'react-hook-form';
import { useForm } from 'react-hook-form';
import { LoginWithEmail } from '~/services/user';
import  '~/assets/styles/auth.css';
import FormRegister from './Register';

// Validations types
type Inputs = {
  email: string;
  password: string;
};

export default function FormLogin() {
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

  const [inputEmailValue, setInputEmailValue] = useState<string>('');
  const [inputPasswordValue, setInputPasswordValue] = useState<string>('');
  const [mode, setMode] = useState<string>('');
  const [sifMode, setSifMode] = useState<string>('visible');
  const [sufMode, setSufMode] = useState<string>('hidden');

  const handleInputEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputEmailValue(event.target.value);
  };

  const handleInputPassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputPasswordValue(event.target.value);
  };

  // Función para manejar la autenticación con Google
  const googleAuth = async () => {
    window.location.href = 'https://pitchfy.onrender.com/auth/google';
  };

  // Función para manejar el inicio de sesión con correo electrónico
  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    try {
      const {token} = await LoginWithEmail({ login: data });
      window.location.href = `/log?token=${token}`;
    } catch (error) {
      console.error("Error al iniciar sesión:", error);
    }
  };

  return (
    <div className={`container ${mode} `}>
      <div className="forms-container">
        <div className="signin-signup">
         <div className={`sign-in-form ${sifMode} flex justify-center items-center h-screen`}> 
          <div className="flex flex-col items-center justify-center flex-1 w-full mt-6 text-center wdt-heading-title-wrapper wdt-heading-align-center wdt-heading-deco-wrapper motion-safe:md:opacity-0 motion-safe:md:intersect:animate-fade">
            <h1 className='mb-5 text-[1.5rem] font-semibold text-gray-800'>Hello Again 👋</h1>
            <div className="flex flex-col items-center w-full ">
              <button
                onClick={googleAuth}
                className="flex items-center justify-center w-full max-w-xs py-2 text-sm font-bold text-gray-800 transition-all duration-300 ease-in-out bg-indigo-100 rounded-lg shadow-sm focus:outline-none hover:shadow focus:shadow-sm focus:shadow-outline"
              >
                <div className="p-2 bg-white rounded-full">
                  <svg className="w-4" viewBox="0 0 533.5 544.3">
                    <path
                      d="M533.5 278.4c0-18.5-1.5-37.1-4.7-55.3H272.1v104.8h147c-6.1 33.8-25.7 63.7-54.4 82.7v68h87.7c51.5-47.4 81.1-117.4 81.1-200.2z"
                      fill="#4285f4"
                    />
                    <path
                      d="M272.1 544.3c73.4 0 135.3-24.1 180.4-65.7l-87.7-68c-24.4 16.6-55.9 26-92.6 26-71 0-131.2-47.9-152.8-112.3H28.9v70.1c46.2 91.9 140.3 149.9 243.2 149.9z"
                      fill="#34a853"
                    />
                    <path
                      d="M119.3 324.3c-11.4-33.8-11.4-70.4 0-104.2V150H28.9c-38.6 76.9-38.6 167.5 0 244.4l90.4-70.1z"
                      fill="#fbbc04"
                    />
                    <path
                      d="M272.1 107.7c38.8-.6 76.3 14 104.4 40.8l77.7-77.7C405 24.6 339.7-.8 272.1 0 169.2 0 75.1 58 28.9 150l90.4 70.1c21.5-64.5 81.8-112.4 152.8-112.4z"
                      fill="#ea4335"
                    />
                  </svg>
                </div>
                <span className="ml-2 text-[15px]">Login with Google</span>
              </button>
            </div>

            <div className="my-5 text-center border-b w-[280px]">
              <div className="inline-block px-2 text-[15px] font-medium leading-none tracking-wide text-gray-600 transform translate-y-1/2 bg-white">
                Or login with e-mail
              </div>
            </div>

            <form className="flex flex-col items-center w-full " onSubmit={handleSubmit(onSubmit)}>
              <div  className="flex flex-col justify-center w-full max-w-xs text-start">
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
                  <p className="text-[14px] ml-2 text-start text-[#ff2d2d]">{errors.email.message}</p>
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
                  className="w-full px-4 py-2 text-[15px] mt-3 placeholder-gray-500 bg-gray-100 border border-gray-200 rounded-lg focus:outline-none focus:border-gray-400 focus:bg-white"
                  type="password"
                  placeholder="Password"
                />
                {errors.password && (
                  <p className="text-[14px] ml-2 text-start text-[#ff2d2d]">{errors.password.message}</p>
                )}

                <button
                  disabled={inputEmailValue === '' || inputPasswordValue === ''}
                  className="w-full py-2 mt-3 rounded-md btn-primary"
                >
                  <span className="text-[15px]">Login </span>
                </button>

              </div>
            </form>
          </div>
         </div>
          <div  className={`sign-up-form ${sufMode} text-center`}>
            <h1 className='mb-5 text-[1.5rem] font-semibold text-gray-800'>Register</h1>
            <FormRegister/>
          </div>
        </div>
      </div>
      <div className="panels-container">
			<div className="panel left-panel wdt-heading-title-wrapper wdt-heading-align-center wdt-heading-deco-wrapper motion-safe:md:opacity-0 motion-safe:md:intersect:animate-fade">
				<div className="content">
					<h3>New here ?</h3>
					<p>
            You can register on our website and start 
            creating your story on pitchfy.
					</p>
					<button className="px-5 py-2 transition-all border-2 rounded-md hover:border-primary hover:bg-primary border-gray-50" id="sign-up-btn" onClick={() => { setMode('sign-up-mode'); setTimeout(() => {setSifMode('hidden'); setSufMode('visible')}, 800) }}>
						Sign up
					</button>
				</div>
				<img  src='/login.png' className="mt-8 image" alt="" />
			</div>
			<div className="panel right-panel">
				<div className="content">
					<h3>One of us ?</h3>
					<p>
          If you already have an account you can log in with 
          your Google account or email and password.
					</p>
					<button className="px-5 py-2 transition-all border-2 rounded-md hover:border-primary hover:bg-primary border-gray-50" id="sign-in-btn" onClick={() => { setMode(''); setTimeout(() => {setSifMode('visible'); setSufMode('hidden')}, 800) }}>
						Sign in
					</button>
				</div>
				<img src='/register.png'  className="image" alt="" />
			</div>
		</div>
    </div>
  );
}
