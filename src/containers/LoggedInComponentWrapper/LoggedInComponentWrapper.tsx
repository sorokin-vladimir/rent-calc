import { FC } from 'react';
import { useRouteNode, useRouter } from 'react-router5';
import clsx from 'clsx';
import { Button } from '../../components/Button';
import { useStores } from '../../hooks';
import { Home } from '../../pages/Home';
import { Bill } from '../../pages/Bill';
import { Table } from '../../pages/Table';

import classes from './loggedInComponentWrapper.module.scss';

export const LoggedInComponentWrapper: FC = () => {
  const { route } = useRouteNode('');
  const router = useRouter();
  const { userStore } = useStores();
  let Component = null;

  switch (route.name) {
    case 'table':
      Component = <Table />;
      break;
    case 'home':
      Component = <Home />;
      break;
    case 'home.bill':
      Component = <Bill homeID={route.params.homeID} />;
      break;
    case 'additem':
      Component = <div>add item</div>;
      break;
    default:
  }

  return (
    <div className={classes.root}>
      <div className={classes.header}>
        {route.name !== 'home' && (
          <div className={classes.buttonWrap}>
            <Button
              onClick={() => router.navigate('home', {}, { reload: true })}
            >
              to Home
            </Button>
          </div>
        )}
        <div className={clsx(classes.buttonWrap, classes.singoutBtnWrap)}>
          <Button onClick={userStore.logout}>Sign out</Button>
        </div>
      </div>
      {Component}
    </div>
  );
};
