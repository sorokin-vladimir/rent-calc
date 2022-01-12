import { FC } from 'react';
import { useForm } from 'react-hook-form';

import { Button } from '../../components/Button';
import { Input } from '../../components/Input';
import { useStores } from '../../hooks';
import { InputNames } from '../../types';

import styles from './signup.module.scss';

export const Signup: FC = () => {
  const { userStore } = useStores();
  const { register, handleSubmit } = useForm<InputNames>();

  const onSubmit = ({
    email,
    password,
  }: Pick<InputNames, 'email' | 'password'>) =>
    userStore.signup(email, password);

  return (
    <div className={styles.root}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <div className={styles.inputWrap}>
            <Input
              name="email"
              label="Email"
              type="email"
              register={register}
              options={{
                required: { value: true, message: 'Email is requred' },
              }}
            />
          </div>
          <div className={styles.inputWrap}>
            <Input
              name="password"
              label="Password"
              type="password"
              register={register}
              options={{
                required: { value: true, message: 'Password is requred' },
                minLength: { value: 6, message: 'Min length is 6 chars' },
              }}
            />
          </div>
        </div>
        <div className={styles.buttonWrap}>
          <Button type="submit">Signup</Button>
        </div>
      </form>
    </div>
  );
};
