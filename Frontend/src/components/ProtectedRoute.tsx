import { PropsWithChildren, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { useAuth } from '../hooks/useAuth';

type ProtectedRouteProps = PropsWithChildren;

export default function ProtectedRoute({ children }: ProtectedRouteProps) {
  const {user} = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (user._id && user._id === '') {
      navigate('/login');
    }
  }, [navigate, user]);

  return children;
}