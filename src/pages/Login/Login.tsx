import { FC, useState, useCallback } from 'react';
import { Button } from '../../components/Button';

import { Input } from '../../components/Input';
import { useStore } from '../../hooks';

import styles from './login.module.scss';

export const Login: FC = () => {
  const { userStore } = useStore();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleClick = useCallback(() => {
    userStore.login(email, password);
  }, [userStore, email, password]);

  return (
    <div className={styles.root}>
      <div>
        <div className={styles.inputWrap}>
          <Input
            id="email"
            label="Email"
            onChange={setEmail}
            type="email"
            value={email}
          />
        </div>
        <div className={styles.inputWrap}>
          <Input
            id="password"
            label="Password"
            onChange={setPassword}
            type="password"
            value={password}
          />
        </div>
      </div>
      <div className={styles.buttonWrap}>
        <Button onClick={handleClick} isDisabled={!(email && password)}>
          Login
        </Button>
      </div>
    </div>
  );
};
