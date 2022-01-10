import { observer } from 'mobx-react';
import { FC } from 'react';
import { useRouter } from 'react-router5';
import { useStores } from '../../hooks';
import { Home } from '../../types';
import classes from './home-card.module.scss';

export const HomeCard: FC<Props> = observer(({ home }) => {
  const router = useRouter();
  const { homeStore } = useStores();

  const handleClick = () => {
    homeStore.setCurrentHomeID(home.id);
    router.navigate('home.oneHome', { homeID: home.id }, { reload: true });
  };

  return (
    <div className={classes.root} onClick={handleClick}>
      {home.name}
    </div>
  );
});

type Props = {
  home: Home;
};
