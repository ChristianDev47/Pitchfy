import './index.css';
import {basic} from './utils/basic.ts';
import { RouterProvider } from 'react-router-dom';
import { useEffect } from 'react';
import { AuthProvider } from './context/auth';
import { Toaster } from 'react-hot-toast';
import { Router } from './routes/Routes';

function App() {
  useEffect(() => {
    basic()
  }, [])
  return (
    <AuthProvider>
      <RouterProvider router={Router}/>
    <Toaster position="bottom-right"/>
    </AuthProvider>
  );
}

export default App;
