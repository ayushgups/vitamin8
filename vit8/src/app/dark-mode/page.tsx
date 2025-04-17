'use client';

import { usePathname } from 'next/navigation';
import clsx from 'clsx';
import Link from 'next/link';
import styles from '../page.module.css';



function darkMode() {
    const pathname = usePathname();
    const containerClass = clsx(styles.container, {
        [styles.darkMode]: pathname === '/dark-mode'
      });
  
    return (
      <div className={containerClass}>
        <h1>Dark Mode Page</h1>
  
        <Link href="/light-mode">
          <button>Light-Mode</button>
        </Link>
      </div>
    );
}

export default darkMode;