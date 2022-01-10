import { FC } from 'react';
import { AddField } from '../../containers/AddField';
import { useStores } from '../../hooks';

export const OneHome: FC<Props> = ({ homeID }) => {
  const { homeStore } = useStores();

  return (
    <div>
      <div>
        Title: {homeStore.currentHome?.name} | ID: {homeID}
      </div>
      <div>data</div>
      <div>
        <AddField />
      </div>
    </div>
  );
};

type Props = {
  homeID: string;
};
