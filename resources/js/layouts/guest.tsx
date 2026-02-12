import { Head } from '@inertiajs/react'

import { RootLayoutProps } from './root';

export default function GuestLayout({ children, headProps }: RootLayoutProps) {
  return (
    <>
      <Head {...headProps} />

      <main className="container mx-auto p-4">
        {children}
      </main>
    </>
  );
}
