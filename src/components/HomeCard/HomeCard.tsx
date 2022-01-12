import { observer } from 'mobx-react';
import { FC } from 'react';
import { useRouter } from 'react-router5';
import { useStores } from '../../hooks';
import { Home } from '../../types';
import { Button } from '../Button';
import classes from './home-card.module.scss';

export const HomeCard: FC<Props> = observer(({ home }) => {
  const router = useRouter();
  const { homeStore } = useStores();

  const handleClick = () => {
    router.navigate('home.bill', { homeID: home.id }, { reload: true });
  };

  return (
    <div className={classes.root}>
      <div onClick={handleClick}>{home.name}</div> |{' '}
      <Button onClick={() => homeStore.removeHome(home.id)}>delete</Button>
    </div>
  );
});

type Props = {
  home: Home;
};
