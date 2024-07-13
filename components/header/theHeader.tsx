import Link from 'next/link';
import styles from './styles.module.scss';
import { Navigation } from '../navigation/Navigation';

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'Blog', href: '/blog' },
  { label: 'About', href: '/about' },
];

function TheHeader() {
  return (
    <header className={styles.header}>
      <Navigation navLinks={navItems} />
    </header>
  );
}

export { TheHeader };
