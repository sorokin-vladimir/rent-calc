import { FC, FormEvent } from 'react';

import styles from './input.module.scss';

type Props = {
  id: string;
  onChange?: (value: string) => void;
  type?: 'text' | 'email' | 'password' | 'number';
  value?: string;
  label?: string;
};

export const Input: FC<Props> = ({
  onChange,
  type = 'text',
  value,
  id,
  label,
}) => {
  const val = typeof value === 'string' ? { value } : {};
  return (
    <div className={styles.root}>
      {!!label && (
        <label htmlFor={id} className={styles.label}>
          {label}
        </label>
      )}
      <input
        id={id}
        onChange={(event: FormEvent<HTMLInputElement>) =>
          onChange?.(event.currentTarget.value)
        }
        type={type}
        {...val}
      />
    </div>
  );
};
