import { FC, useState } from 'react';
import { useRouter } from 'react-router5';
import { useStores } from '../../hooks';

export const Table: FC = () => {
  const router = useRouter();
  const { tableStore } = useStores();
  const [value, setValue] = useState('');
  const [id, setId] = useState('');

  return (
    <div>
      <button
        onClick={() => {
          router.navigate('login');
        }}
      >
        go to login
      </button>
      <div>
        <input value={value} onChange={(val) => setValue(val.target.value)} />
        {/* <button onClick={() => tableStore.setTestData(value)}>send</button> */}
      </div>
      <div>
        <input value={id} onChange={(val) => setId(val.target.value)} />
        {/* <button onClick={() => tableStore.getTestDataOnce(id)}>get once</button> */}
      </div>
    </div>
  );
};
