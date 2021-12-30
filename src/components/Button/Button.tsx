import { FC } from 'react';

import styles from './button.module.scss';

type Props = {
  onClick: () => void;
  isDisabled?: boolean;
};

export const Button: FC<Props> = ({
  children,
  onClick,
  isDisabled = false,
}) => {
  return (
    <button
      className={styles.button}
      onClick={() => !isDisabled && onClick?.()}
      disabled={isDisabled}
    >
      {children ? children : undefined}
    </button>
  );
};
