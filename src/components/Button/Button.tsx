import { FC } from 'react';

import styles from './button.module.scss';

type Props = {
  onClick?: () => void;
  isDisabled?: boolean;
  type?: 'button' | 'submit';
};

export const Button: FC<Props> = ({
  children,
  onClick,
  type = 'button',
  isDisabled = false,
}) => {
  return (
    <button
      type={type}
      className={styles.button}
      onClick={() => !isDisabled && onClick?.()}
      disabled={isDisabled}
    >
      {children ? children : undefined}
    </button>
  );
};
