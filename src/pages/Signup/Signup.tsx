import { FC, useState, useCallback } from 'react';
import { Button } from '../../components/Button';

import { Input } from '../../components/Input';
import { useStore } from '../../hooks';

import styles from './signup.module.scss';

export const Signup: FC = () => {
  const { userStore } = useStore();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleClick = useCallback(() => {
    userStore.signup(email, password);
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
          Signup
        </Button>
      </div>
    </div>
  );
};
