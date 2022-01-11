import { FC, useState } from 'react';
import { UseFormRegister, Path } from 'react-hook-form';
import { v4 as uuid } from 'uuid';

import { InputNames } from '../../types';

import styles from './input.module.scss';

type Props = {
  name: Path<InputNames>;
  type?: 'text' | 'email' | 'password' | 'number';
  label?: string;
  options?: Partial<{
    required: { value: boolean; message: string };
    minLength: { value: number; message: string };
    valueAsNumber: boolean;
  }>;
  register: UseFormRegister<InputNames>;
};

export const Input: FC<Props> = ({
  type = 'text',
  name,
  label,
  options = {},
  register,
}) => {
  const [uid] = useState(uuid());
  return (
    <div className={styles.root}>
      {!!label && (
        <label htmlFor={uid} className={styles.label}>
          {label}
        </label>
      )}
      <input id={uid} {...register(name, options)} type={type} />
    </div>
  );
};
