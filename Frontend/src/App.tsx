import './index.css';
import {basic} from './utils/basic.ts';
import { RouterProvider } from 'react-router-dom';
import { useEffect } from 'react';
import { AuthProvider } from './context/auth';
import { Toaster } from 'react-hot-toast';
import router from './routes/routes.tsx';

function App() {
  useEffect(() => {
    basic()
  }, [])
  return (
    <AuthProvider>
      <RouterProvider router={router}/>
    <Toaster position="bottom-right"/>
    </AuthProvider>
  );
}

export default App;
