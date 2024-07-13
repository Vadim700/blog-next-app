'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './styles.module.scss';
import { useSession, signOut } from 'next-auth/react';

type NavLink = {
  label: string;
  href: string;
};
type Props = {
  navLinks: NavLink[];
};

function Navigation({ navLinks }: Props) {
  const pathname = usePathname();
  const session = useSession();

  return (
    <>
      {navLinks.map((link) => {
        const isActive = pathname === link.href;

        return (
          <Link
            className={
              isActive ? `${styles.linkActive} ${styles.link}` : styles.link
            }
            href={link.href}
            key={link.label}
          >
            {link.label}
          </Link>
        );
      })}

      {session?.data && <Link className={styles.link} href="/profile">Profile</Link>}

      {session?.data ? (
        <Link className={`${styles.auth} ${styles.link}`}  href="#" onClick={() => signOut({ callbackUrl: '/' })}>
          Sing out
        </Link>
      ) : (
        <Link className={styles.link} href="/signin">Sign in</Link>
      )}
    </>
  );
}

export { Navigation };
