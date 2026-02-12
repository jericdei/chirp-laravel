import { Link, usePage } from "@inertiajs/react"
import { HomeIcon, MessageCircle } from "lucide-react"

import { useAuth } from "@/hooks/auth"
import { index as chirpsIndex } from "@/routes/chirps"
import { home } from "@/routes"
import { cn } from "@/lib/utils"
import { RouteDefinition } from "@/wayfinder"

export function HeaderNav() {
  const { user } = useAuth();

  return (
    <nav className="flex items-center gap-4">
      <NavLink href={home()}>
        <HomeIcon className="size-6" aria-hidden />
      </NavLink>

      {user && (
        <NavLink href={chirpsIndex()}>
          <MessageCircle className="size-6" aria-hidden />
        </NavLink>
      )}
    </nav>
  )
}

function NavLink({ href, children }: { href: RouteDefinition<'get'>; children: React.ReactNode }) {
  const { url } = usePage();

  const isActive = url === href.url;

  return (
    <div className={cn({
      "border-b-2 border-primary": isActive,
    })}>
      <Link href={href} className="flex items-center rounded-md gap-2 px-3 py-2 text-muted-foreground transition-colors hover:bg-accent hover:text-foreground">
        {children}
      </Link>
    </div>
  )
}
