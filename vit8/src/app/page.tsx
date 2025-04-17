// app/page.js

'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

// HINT: Use the `usePathname` hook to get the current pathname.
// HINT: Use the `clsx` utility to conditionally apply the 'dark-mode' class.
// HINT: There should also be two new pages we are redirecting to. Think about how we make more pages within Next.js.

export default function Home() {
  return (
    <main style={{ padding: '20px' }}>
      <h2>Welcome!</h2>
      <a href="/light-mode">Go to Light Mode</a><br />
      <a href="/dark-mode">Go to Dark Mode</a>
    </main>
  );
}
