import { FC } from 'react';
import { useRouteNode } from 'react-router5';
import { Button } from '../../components/Button';
import { useStore } from '../../hooks';
import { Table } from '../../pages/Table';

import styles from './loggedInComponentWrapper.module.scss';

export const LoggedInComponentWrapper: FC = () => {
  const { route } = useRouteNode('');
  const { userStore } = useStore();
  let Component = null;

  switch (route.name) {
    case 'table':
      Component = <Table />;
      break;
    case 'additem':
      Component = <div>add item</div>;
      break;
    default:
  }

  return (
    <div className={styles.root}>
      <div className={styles.header}>
        <div className={styles.buttonWrap}>
          <Button onClick={userStore.logout}>Sign out</Button>
        </div>
      </div>
      {Component}
    </div>
  );
};
