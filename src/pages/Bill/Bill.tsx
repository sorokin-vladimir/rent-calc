import { observer } from 'mobx-react';
import { FC } from 'react';
import { AddField, Bill as BillContainer } from '../../containers';
import { useStores } from '../../hooks';
import classes from './bill.module.scss';

export const Bill: FC<Props> = observer(({ homeID }) => {
  const { homeStore } = useStores();

  return (
    <div>
      <div>
        Title: {homeStore.currentHome?.name} | ID: {homeID}
      </div>
      <div>
        <BillContainer />
      </div>
      <div className={classes.addFieldWrap}>
        <AddField />
      </div>
    </div>
  );
});

type Props = {
  homeID: string;
};
