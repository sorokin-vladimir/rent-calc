import { FC } from 'react';
import { useRouter } from 'react-router5';

export const AddItem: FC = () => {
  const router = useRouter();
  console.log(`Add item:6 | router`, router);

  return (
    <div
      onClick={() => {
        router.navigate('table');
      }}
    >
      Add item
    </div>
  );
};
