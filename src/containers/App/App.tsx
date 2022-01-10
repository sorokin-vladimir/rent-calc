import { FC } from 'react';
import { useRouteNode } from 'react-router5';

import { Login } from '../../pages/Login';
import { Signup } from '../../pages/Signup';
import { LoggedInComponentWrapper } from '../LoggedInComponentWrapper';

export const App: FC = () => {
  const { route } = useRouteNode('');

  if (route.name === 'login') return <Login />;
  if (route.name === 'signup') return <Signup />;
  if (['table', 'home', 'home.oneHome', 'additem'].includes(route.name)) {
    return <LoggedInComponentWrapper />;
  }

  return <>not match</>;
};
