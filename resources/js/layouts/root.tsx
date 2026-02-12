import { Head } from "@inertiajs/react";
import { ComponentProps, ReactNode } from "react";

import Header from "./header";

export interface RootLayoutProps {
  children: ReactNode;
  headProps?: ComponentProps<typeof Head>;
}

export default function RootLayout({ children, headProps }: RootLayoutProps) {
  return (
    <>
      <Head {...headProps} />

      <Header />

      <main className="container mx-auto p-4">
        {children}
      </main>
    </>
  );
}
