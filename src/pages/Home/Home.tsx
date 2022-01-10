import { observer } from 'mobx-react';
import { FC, useEffect, useState } from 'react';
import { Homes } from '../../containers/Homes';
import { useStores } from '../../hooks';
import classes from './home.module.scss';

export const Home: FC = observer(() => {
  const { homeStore } = useStores();
  const [value, setValue] = useState('');

  useEffect(() => {
    homeStore.getAllHomes();
  }, []);

  return (
    <div>
      <div>
        <input value={value} onChange={(val) => setValue(val.target.value)} />
        <button onClick={() => homeStore.createHome(value)}>add home</button>
      </div>
      <div className={classes.homesWrapper}>
        <Homes homes={homeStore.homes} />
      </div>
    </div>
  );
});
