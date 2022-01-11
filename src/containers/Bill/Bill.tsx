import { Button } from '../../components';
import { observer } from 'mobx-react';
import { FC } from 'react';
import { useStores } from '../../hooks';

export const Bill: FC = observer(() => {
  const { billStore } = useStores();
  if (!billStore.fields.length) return <>No data</>;
  return (
    <>
      {billStore.fields.map((field) => (
        <div>
          {field.name} | {field.description}{' '}
          <Button onClick={() => billStore.removeField(field.id)}>
            delete
          </Button>
        </div>
      ))}
    </>
  );
});
