import { Link } from "@inertiajs/react"

import { Button } from "@/components/ui/button"
import { login, register } from "@/routes/auth"

export function AuthButtons() {
  return (
    <>
      <Button variant="ghost" size="sm" asChild>
        <Link href={login.url()}>Log in</Link>
      </Button>
      <Button size="sm" asChild>
        <Link href={register.url()}>Sign up</Link>
      </Button>
    </>
  )
}
