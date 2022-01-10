import { observer } from 'mobx-react';
import { FC } from 'react';
import { HomeCard } from '../../components/HomeCard';
import { Home } from '../../types';

export const Homes: FC<Props> = observer(({ homes }) => {
  return (
    <>
      {homes.map((home) => (
        <HomeCard key={home.id} home={home} />
      ))}
    </>
  );
});

type Props = {
  homes: Home[];
};
