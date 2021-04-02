import styles from './Header.module.css';

interface HeaderProps {}

const Header = ({}: HeaderProps): JSX.Element => {
  const arrayObjects = [
    { id: 0, name: 'tere' },
    { id: 1, name: 'hello' },
  ];

  return <header className={styles.header}>Tere</header>;
};

export default Header;
