import { useEffect } from 'react';
import { useAuth } from '8base-react-sdk';
import { AUTH_CONNECTION } from 'shared/constants';

export const AuthContainer = () => {
  const { authClient } = useAuth();

  useEffect(() => {
    authClient.authorize({ connection: AUTH_CONNECTION });
  }, [authClient]);

  return <h2>Loading...</h2>;
};
