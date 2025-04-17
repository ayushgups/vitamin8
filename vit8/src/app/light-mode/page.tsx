'use client';

import { usePathname } from 'next/navigation';
import clsx from 'clsx';
import Link from 'next/link';
import styles from '../page.module.css';



function lightMode() {
    const pathname = usePathname();
    const containerClass = clsx(styles.container, {
        [styles.darkMode]: pathname === '/dark-mode'
      });
  
    return (
      <div className={containerClass}>
        <h1>Light Mode Page</h1>
  
        <Link href="/dark-mode">
          <button>Dark-Mode</button>
        </Link>
      </div>
    );
}

export default lightMode;