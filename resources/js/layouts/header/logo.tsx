import { Link } from "@inertiajs/react"
import { Bird } from "lucide-react"

import { home } from "@/routes"

export function HeaderLogo() {
  return (
    <Link
      href={home()}
      className="flex items-center gap-2 text-xl font-bold tracking-tight transition-opacity hover:opacity-80"
    >
      <Bird className="size-6 text-primary" aria-hidden />
      <span>Chirp</span>
    </Link>
  )
}
