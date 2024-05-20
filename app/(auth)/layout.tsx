import Logo from "@/components/Logo";
import Link from "next/link";

import React, { ReactNode } from "react";

function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen min-w-full bg-background max-h-screen ">
      <nav className="flex justify-between items-center border-b border-border h-[60px] px-4 py-2">
        <Logo />
        <div className="flex gap-4 items-center">
          <Link
            href={"/sign-up"}
            className="block w-full rounded border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-white focus:outline-none focus:ring active:text-opacity-75 sm:w-auto"
          >
            Sign In
          </Link>
        </div>
      </nav>
      <main className="flex w-full flex-grow h-full items-center justify-center">
        {children}
      </main>
    </div>
  );
}

export default Layout;
