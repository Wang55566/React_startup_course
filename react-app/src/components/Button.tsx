import React from 'react'
import styles from './Button.module.css';

interface Props {
  handleOnClick: () => void;
  children?: React.ReactNode;
}

const Button = ({ handleOnClick, children }: Props) => {

  return (
    <button className={[styles.btn, styles['btn-primary']].join(' ')}onClick={handleOnClick}>{children}</button>
  )
}

export default Button
