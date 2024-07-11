import styles from './CloseButton.module.scss';

type Props = {
  onClose?: () => void;
}

export const CloseButton = ({onClose = (() => {})}: Props) => {
  let className = styles.default;

  return <button className={className} onClick={onClose}>
    <span/>
  </button>
}
