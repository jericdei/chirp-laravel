import { useAuth } from "@/hooks/auth"

import { AuthButtons } from "./auth-buttons"
import { HeaderLogo } from "./logo"
import { HeaderNav } from "./nav"
import { UserMenu } from "./user-menu"

export default function Header() {
  const { user } = useAuth()

  return (
    <header className="sticky top-0 z-50 border-b border-border/50 bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60">
      <div className="mx-auto container flex h-14 items-center justify-between gap-6 px-4 sm:px-6">
        <HeaderLogo />
        <HeaderNav />

        <div className="flex items-center gap-2">
          {user ? <UserMenu user={user} /> : <AuthButtons />}
        </div>
      </div>
    </header>
  )
}
