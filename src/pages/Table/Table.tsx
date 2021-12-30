import { FC } from 'react';
import { useRouter } from 'react-router5';

export const Table: FC = () => {
  const router = useRouter();
  // console.log(`Table:6 | router`, router);

  return (
    <div
      onClick={() => {
        router.navigate('login');
      }}
    >
      Table
    </div>
  );
};
